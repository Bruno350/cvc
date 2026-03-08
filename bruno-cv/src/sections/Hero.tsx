import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.greeting')}
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Bruno Thomsen
            <br />
            <span className="hero-name-highlight">Sobrinho</span>
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className="typing-text">{t('hero.title')}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="stat-item">
              <span className="stat-value">{t('hero.stats.semester')}</span>
              <span className="stat-label">{t('hero.stats.semesterLabel')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">{t('hero.stats.experience')}</span>
              <span className="stat-label">{t('hero.stats.experienceLabel')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">{t('hero.stats.languages')}</span>
              <span className="stat-label">{t('hero.stats.languagesLabel')}</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 123, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              {t('hero.cta.contact')}
            </motion.button>
            <motion.a
              href="https://github.com/Bruno350"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              {t('hero.cta.projects')}
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <motion.a
              href="https://github.com/Bruno350"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: 'var(--accent-color)' }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bruno-thomsen-sobrinho"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: 'var(--accent-color)' }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">portfolio.tsx</span>
            </div>
            <div className="window-content">
              <pre className="code-block">
{`const developer = {
  name: "Bruno Thomsen",
  role: "Front-End Dev",
  stack: ["React", "TypeScript"],
  passion: "Build Amazing UIs",
  location: "Curitiba, PR 🇧🇷",
  
  getSkills() {
    return this.stack.map(
      skill => console.log(skill)
    );
  }
};`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;