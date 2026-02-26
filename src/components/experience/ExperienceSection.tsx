import { motion } from 'framer-motion';
import Card from '../common/Card';
import SectionHeader from '../common/SectionHeader';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import { useI18n } from '../../i18n';

const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t.experience.title} />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Experiences - takes 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2 px-1">
              {t.experience.pro_title}
            </h3>
            {t.experience.jobs.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExperienceCard
                  title={exp.title}
                  company={exp.company}
                  type={exp.type}
                  period={exp.period}
                  description={exp.description}
                  techs={exp.techs}
                />
              </motion.div>
            ))}
          </div>

          {/* Education - takes 1 col */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2 px-1">
              {t.experience.edu_title}
            </h3>
            {t.experience.education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EducationCard
                  period={edu.period}
                  title={edu.title}
                  school={edu.school}
                  desc={edu.desc}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Projects — Autodidact */}
        {t.experience.autodidact_projects &&
          t.experience.autodidact_projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="flex items-center gap-3 mb-6 px-1">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                  {t.experience.autodidact_title}
                </h3>
                <span className="text-neutral-300 text-xs">—</span>
                <p className="text-neutral-400 text-xs">
                  {t.experience.autodidact_desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {t.experience.autodidact_projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <Card className="p-5 h-full flex flex-col">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1.5">
                        {project.title}
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed flex-1">
                        {project.desc}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Joke */}
              {t.experience.autodidact_joke && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-neutral-400 text-xs italic mt-6 text-center"
                >
                  {t.experience.autodidact_joke}
                </motion.p>
              )}
            </motion.div>
          )}
      </div>
    </section>
  );
};

export default ExperienceSection;
