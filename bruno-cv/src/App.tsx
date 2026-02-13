import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Section from './components/Section';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <Section id="about" title="Sobre Mim">
          <About />
        </Section>

        <Section id="education" title="Formação Acadêmica">
          <Education />
        </Section>

        <Section id="experience" title="Experiência e Projetos">
          <Experience />
        </Section>

        <Section id="skills" title="Habilidades Técnicas">
          <Skills />
        </Section>

        <Section id="certifications" title="Cursos e Certificações">
          <Certifications />
        </Section>

        <Section id="contact" title="Entre em Contato">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;