import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { useI18n } from '../i18n';
import LocationMap from '../components/ui/LocationMap';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Flutter'],
    icon: '◆',
  },
  {
    category: 'Backend',
    items: ['Symfony', 'PHP', 'Node.js', 'Python', 'API REST', 'SQL / MongoDB'],
    icon: '▲',
  },
];

const AboutSection = () => {
  const { t } = useI18n();

  const devopsSkill = {
    category: t.about.skills_devops,
    items: ['Docker', 'Git / CI-CD', 'Linux', 'Ollama', 'JetBrains', 'Grafana'],
    icon: '●',
  };

  const allSkills = [...skills, devopsSkill];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {t.about.title}
          </h2>
          <div className="w-12 h-1 bg-neutral-900 rounded-full" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Card className="p-8 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-lg flex-shrink-0">
                  👋
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{t.about.who_title}</h3>
                  <p className="text-neutral-400 text-sm">{t.about.who_subtitle}</p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {t.about.bio_p1}
                {' '}<strong className="text-neutral-800">{t.about.bio_do}</strong>
                {t.about.bio_p1_end}
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                {t.about.bio_p2_start}{' '}
                <strong className="text-neutral-800">{t.about.bio_p2_strong}</strong>{' '}
                {t.about.bio_p2_end}
              </p>
            </Card>
          </motion.div>

          {/* Location Card with Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full overflow-hidden relative min-h-[320px]">
              {/* Map Background */}
              <div className="absolute inset-0">
                <LocationMap />
              </div>

              {/* Glass Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-surface/70 backdrop-blur-xl border-t border-surface/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center text-white text-sm flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{t.about.based_in} {t.about.location}</h3>
                    <p className="text-neutral-500 text-xs">{t.about.location_detail}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Skills Cards */}
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-neutral-300 text-xl">{skill.icon}</span>
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-neutral-50 text-neutral-600 text-xs font-medium rounded-lg border border-neutral-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Passions - Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Card className="p-8">
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                {t.about.interests_title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.about.passions.map((passion) => (
                  <div
                    key={passion.label}
                    className="p-4 rounded-xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-all"
                  >
                    <span className="text-2xl mb-3 block">{passion.emoji}</span>
                    <h4 className="font-medium text-neutral-800 text-sm mb-1">{passion.label}</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">{passion.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
