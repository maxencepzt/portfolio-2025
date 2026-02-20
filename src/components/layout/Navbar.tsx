import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

    setIsOpen(false);

    setTimeout(() => {
      window.scrollTo({ top, behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`rounded-2xl px-6 py-3 transition-all duration-300 ${
            isOpen
              ? 'backdrop-blur-xl border border-neutral-200/80 shadow-sm'
              : scrolled
                ? 'backdrop-blur-xl border border-neutral-200/80 shadow-sm'
                : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center font-bold text-white text-sm">
                MP
              </div>
              <span className="hidden sm:block font-semibold text-neutral-800 text-sm tracking-tight">
                Maxence Poizat
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center"
            >
              {isOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-neutral-700"
                >
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-neutral-700"
                >
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
