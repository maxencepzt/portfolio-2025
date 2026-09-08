import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';

interface GravityToggleProps {
  active: boolean;
  onToggle: () => void;
}

const GravityToggle = ({ active, onToggle }: GravityToggleProps) => {
  const { t } = useI18n();

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        active
          ? 'bg-neutral-800 text-white shadow-lg'
          : 'bg-surface text-neutral-400 border border-neutral-200 hover:border-neutral-300 hover:text-neutral-600 shadow-sm'
      }`}
      title={`${t.gravity.label_prefix} ${active ? t.gravity.reversed : t.gravity.normal} (G)`}
      aria-label={`${t.gravity.label_prefix} ${active ? t.gravity.reversed : t.gravity.normal}`}
      aria-pressed={active}
    >
      <motion.svg
        animate={{ rotate: active ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Two opposed arrows, the standard "flip the vertical direction"
            glyph. A single down arrow read as a scroll control, and putting a
            baseline under it only made it read as a download. */}
        <path d="M7 4v16" />
        <path d="m3 8 4-4 4 4" />
        <path d="M17 20V4" />
        <path d="m21 16-4 4-4-4" />
      </motion.svg>

      {/* Ripple effect when active */}
      {active && (
        <>
          <motion.span
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-neutral-400"
          />
          <motion.span
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 rounded-full bg-neutral-600"
          />
        </>
      )}
    </motion.button>
  );
};

export default GravityToggle;
