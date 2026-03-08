import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import CVDownload from './sections/CVDownload';
import Footer from './components/Footer';
import Section from './components/Section';
import { useLanguage } from './contexts/LanguageContext';
import './styles/main.scss';

const App: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <Section id="about" title={t('about.title')}>
          <About />
        </Section>

        <Section id="education" title={t('education.title')}>
          <Education />
        </Section>

        <Section id="experience" title={t('experience.title')}>
          <Experience />
        </Section>

        <Section id="skills" title={t('skills.title')}>
          <Skills />
        </Section>

        <Section id="certifications" title={t('certifications.title')}>
          <Certifications />
        </Section>

        <Section id="contact" title={t('contact.title')}>
          <Contact />
        </Section>

        <Section id="cv" title={t('cv.title')} subtitle={t('cv.subtitle')}>
          <CVDownload />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;