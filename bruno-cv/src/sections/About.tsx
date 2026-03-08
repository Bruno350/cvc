import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCode, FaGlobeAmericas } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <FaReact />,
      titleKey: 'about.highlights.frontend.title',
      descriptionKey: 'about.highlights.frontend.description',
    },
    {
      icon: <FaNodeJs />,
      titleKey: 'about.highlights.fullstack.title',
      descriptionKey: 'about.highlights.fullstack.description',
    },
    {
      icon: <FaCode />,
      titleKey: 'about.highlights.cleancode.title',
      descriptionKey: 'about.highlights.cleancode.description',
    },
    {
      icon: <FaGlobeAmericas />,
      titleKey: 'about.highlights.multilingual.title',
      descriptionKey: 'about.highlights.multilingual.description',
    },
  ];

  const journeyItems = [
    { year: '2005', descriptionKey: 'about.journey.items.0.description' },
    { year: '2022', descriptionKey: 'about.journey.items.1.description' },
    { year: '2023', descriptionKey: 'about.journey.items.2.description' },
    { year: '2025', descriptionKey: 'about.journey.items.3.description' },
  ];

  return (
    <div className="about-content">
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="about-text">{t('about.intro1')}</p>
        <p className="about-text">{t('about.intro2')}</p>
        <p className="about-text">{t('about.intro3')}</p>
      </motion.div>

      <div className="about-highlights">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="highlight-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
          >
            <motion.div
              className="highlight-icon"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="highlight-title">{t(item.titleKey)}</h3>
            <p className="highlight-description">{t(item.descriptionKey)}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="about-journey"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="journey-title">{t('about.journey.title')}</h3>
        <div className="journey-timeline">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.year}
              className={`timeline-item${index === journeyItems.length - 1 ? ' active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <p>{t(item.descriptionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;