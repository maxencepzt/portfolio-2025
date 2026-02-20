import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { useI18n } from '../i18n';

const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 px-4">
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
            {t.experience.title}
          </h2>
          <div className="w-12 h-1 bg-neutral-900 rounded-full" />
        </motion.div>

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
                <Card className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900">{exp.title}</h4>
                      <p className="text-accent font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="px-2.5 py-1 bg-neutral-50 text-neutral-500 text-xs font-medium rounded-md border border-neutral-100">
                        {exp.type}
                      </span>
                      <span className="text-neutral-400 text-xs">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-neutral-500 text-sm flex items-start gap-2">
                        <span className="text-neutral-300 mt-1.5 text-[6px]">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-neutral-50 text-neutral-500 text-xs font-medium rounded-md border border-neutral-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
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
                <Card className="p-6 h-auto">
                  <span className="text-neutral-400 text-xs font-medium">{edu.period}</span>
                  <h4 className="text-base font-semibold text-neutral-900 mt-2">{edu.title}</h4>
                  <p className="text-accent text-sm font-medium mt-1">{edu.school}</p>
                  {edu.desc && (
                    <p className="text-neutral-400 text-sm mt-3 leading-relaxed">{edu.desc}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Projects — Autodidact */}
        {t.experience.autodidact_projects && t.experience.autodidact_projects.length > 0 && (
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
