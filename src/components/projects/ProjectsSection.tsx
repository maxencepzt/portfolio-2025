import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import { useI18n } from '../../i18n';

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
        <SectionHeader title={t.projects.title} />

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
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
