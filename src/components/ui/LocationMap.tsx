import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LocationMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
}

const LocationMap = ({ lat = 48.6, lng = 2.25, zoom = 10 }: LocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      keyboard: false,
    });

    // CartoDB Voyager — clean, colorful, Apple-like style
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      { maxZoom: 19 }
    ).addTo(map);

    // Pulsing blue dot marker (Apple-style)
    const pulsingIcon = L.divIcon({
      className: '',
      html: `
        <div style="position:relative;width:40px;height:40px;">
          <div style="
            position:absolute;
            top:50%;left:50%;
            transform:translate(-50%,-50%);
            width:40px;height:40px;
            border-radius:50%;
            background:rgba(59,130,246,0.15);
            animation:pulse-ring 2s ease-out infinite;
          "></div>
          <div style="
            position:absolute;
            top:50%;left:50%;
            transform:translate(-50%,-50%);
            width:14px;height:14px;
            border-radius:50%;
            background:#3b82f6;
            border:3px solid white;
            box-shadow:0 1px 4px rgba(0,0,0,0.3);
          "></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    L.marker([lat, lng], { icon: pulsingIcon }).addTo(map);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [lat, lng, zoom]);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
      `}</style>
      <div ref={mapRef} className="w-full h-full" />
    </>
  );
};

export default LocationMap;
