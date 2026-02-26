import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      <div className="w-12 h-1 bg-neutral-900 rounded-full" />
    </motion.div>
  );
};

export default SectionHeader;
