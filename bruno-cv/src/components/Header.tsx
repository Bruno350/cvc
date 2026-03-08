import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useLanguage();

  const sections = [
    { id: 'hero',          label: t('header.home') },
    { id: 'about',         label: t('header.about') },
    { id: 'education',     label: t('header.education') },
    { id: 'experience',    label: t('header.experience') },
    { id: 'skills',        label: t('header.skills') },
    { id: 'certifications',label: t('header.certifications') },
    { id: 'contact',       label: t('header.contact') },
    { id: 'cv',            label: t('header.cv') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('section[id], .hero-section').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">BTS</span>
          <span className="logo-bracket">{'/>'}</span>
        </motion.div>

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

          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;