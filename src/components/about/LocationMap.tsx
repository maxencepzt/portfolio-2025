// A static export of OpenStreetMap tiles rather than a live map. Every
// interaction was already disabled (dragging, zoom, keyboard), so Leaflet
// was only composing a fixed image, at the cost of 151 kB of JS, a
// dependency that needs `window` at import time, and a tile request per
// visitor against providers that rate-limit them.
// Regenerate with a screenshot of the tile grid, see the PR that added it.
const LocationMap = () => (
  <div className="w-full h-full relative">
    <img
      src="/location-map.webp"
      alt=""
      width={1116}
      height={959}
      loading="lazy"
      className="w-full h-full object-cover"
    />

    {/* Pulsing dot, centred on the coordinates the image is cropped around */}
    <span className="absolute top-1/2 left-1/2 flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
      <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-[3px] border-white bg-blue-500 shadow-soft" />
    </span>

    {/* ODbL requires crediting the tile source, so keep it legible */}
    <span className="absolute top-1 right-1 rounded bg-surface/75 px-1.5 py-0.5 text-[10px] leading-none text-neutral-600">
      © OpenStreetMap
    </span>
  </div>
);

export default LocationMap;
