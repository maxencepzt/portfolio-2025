import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { useI18n } from '../i18n';
import posthog from 'posthog-js';

const projectsMeta = [
  {
    technologies: [
      'React 19',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'PWA',
      'Vite',
    ],
    github: 'https://github.com/maxencepzt/treasurely-front',
    size: 'large',
  },
  {
    technologies: ['Web', 'Design UI/UX'],
    link: 'https://ruskrecords.fr',
    size: 'medium',
  },
  {
    technologies: [
      'React',
      'TypeScript',
      'Canvas API',
      'Framer Motion',
      'Tailwind CSS',
    ],
    github: 'https://github.com/maxencepzt/portfolio-2025',
    size: 'medium',
  },
  {
    technologies: ['Python', 'Jupyter Notebook', 'Algorithms'],
    github: 'https://github.com/maxencepzt/S2-SAE-Labyrinthe',
    size: 'small',
  },
  {
    technologies: ['Python', 'AI'],
    github: 'https://github.com/maxencepzt/S1-SAE-ConnectFour',
    size: 'small',
  },
];

const ProjectsSection = () => {
  const { t } = useI18n();

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...projectsMeta[i],
  }));

  return (
    <section id="projects" className="py-24 px-4">
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
            {t.projects.title}
          </h2>
          <div className="w-12 h-1 bg-neutral-900 rounded-full" />
        </motion.div>

        {/* Bento Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={
                project.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
              }
            >
              <Card className="p-6 h-full flex flex-col group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={() => posthog.capture('project_link_clicked', { project: project.title, type: 'github' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:border-neutral-200 transition-all"
                        title="GitHub"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        onClick={() => posthog.capture('project_link_clicked', { project: project.title, type: 'website' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:border-neutral-200 transition-all"
                        title={t.projects.visit_site}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
      </div>
    </section>
  );
};

export default ProjectsSection;
