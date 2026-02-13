import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/main.scss'; // ou o caminho correto para seu SCSS global

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useLanguage();

  // Lista de seções com traduções dinâmicas
  const sections = [
    { id: 'hero', label: t('header.home') },
    { id: 'about', label: t('header.about') },
    { id: 'education', label: t('header.education') },
    { id: 'experience', label: t('header.experience') },
    { id: 'skills', label: t('header.skills') },
    { id: 'certifications', label: t('header.certifications') },
    { id: 'contact', label: t('header.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Atualiza estado de scroll (para header fixo/fundo)
      setScrolled(window.scrollY > 50);

      // Detecta seção ativa com IntersectionObserver (mais eficiente que querySelectorAll + loop)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-80px 0px -60% 0px', // ajusta para header fixo + trigger mais cedo
          threshold: 0.1,
        }
      );

      // Observa todas as seções
      document.querySelectorAll('section[id], .hero-section').forEach((section) => {
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // chama uma vez no mount para definir inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // altura aproximada do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Atualiza activeSection imediatamente (melhora UX)
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container header-content">
        {/* Logo */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">BTS</span>
          <span className="logo-bracket">{'/>'}</span>
        </motion.div>

        {/* Navegação */}
        <nav className="nav">
          <ul className="nav-list">
            {sections.map((sec, index) => (
              <motion.li
                key={sec.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection(sec.id)}
                  className={`nav-link ${activeSection === sec.id ? 'active' : ''}`}
                  aria-current={activeSection === sec.id ? 'page' : undefined}
                  aria-label={`Ir para seção ${sec.label}`}
                >
                  {sec.label}
                  {activeSection === sec.id && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Ações à direita */}
        <div className="header-actions">
          <motion.a
            href="https://github.com/Bruno350"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/bruno-thomsen-sobrinho"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </motion.a>

          {/* Seletor de idioma (bem visível) */}
          <LanguageSelector />

          {/* Toggle de tema */}
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;