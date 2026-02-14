import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-neutral-900 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
        >
          MP
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-4"
        >
          Maxence Poizat
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl sm:text-2xl text-neutral-400 font-light mb-8"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-2xl mx-auto text-neutral-500 text-lg leading-relaxed mb-12"
        >
          {t.hero.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-800 transition-all shadow-sm text-sm cursor-pointer"
          >
            {t.hero.cta_projects}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-surface text-neutral-700 rounded-xl font-medium border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all text-sm cursor-pointer"
          >
            {t.hero.cta_contact}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-neutral-300 mx-auto flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-neutral-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
