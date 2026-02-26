import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
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
  );
};

export default ScrollIndicator;
