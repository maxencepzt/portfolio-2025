import Navbar from './Navbar';
import ParticleCanvas from '../interactive/ParticleCanvas';
import GravityToggle from '../interactive/GravityToggle';
import { useState, useEffect, ReactNode } from 'react';
import { useI18n } from '../../i18n';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [gravityMode, setGravityMode] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') {
        setGravityMode((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-page text-neutral-800 overflow-x-hidden">
      {/* Particle Background */}
      <ParticleCanvas gravityMode={gravityMode} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Gravity Toggle Button */}
      <GravityToggle
        active={gravityMode}
        onToggle={() => setGravityMode((prev) => !prev)}
      />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-neutral-400 text-sm border-t border-neutral-100">
        <p>
          © {new Date().getFullYear()} Maxence Poizat. {t.footer.rights}
        </p>
        <p className="mt-2 text-xs text-neutral-300">{t.footer.made_with}</p>
      </footer>
    </div>
  );
};

export default Layout;
