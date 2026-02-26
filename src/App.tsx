import Layout from './components/layout/Layout';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
