import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    { titleKey: 'education.highlights.web.title', descKey: 'education.highlights.web.description', icon: '💻' },
    { titleKey: 'education.highlights.database.title', descKey: 'education.highlights.database.description', icon: '🗄️' },
    { titleKey: 'education.highlights.agile.title', descKey: 'education.highlights.agile.description', icon: '⚡' },
    { titleKey: 'education.highlights.team.title', descKey: 'education.highlights.team.description', icon: '👥' },
  ];

  return (
    <div className="education-content">
      <motion.div
        className="education-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(59, 130, 246, 0.2)' }}
      >
        <motion.div
          className="education-icon"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaGraduationCap />
        </motion.div>

        <div className="education-info">
          <motion.h3
            className="education-degree"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('education.degree')}
          </motion.h3>

          <motion.div
            className="education-institution"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaUniversity />
            <span>{t('education.institution')}</span>
          </motion.div>

          <motion.div
            className="education-details"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="detail-item">
              <FaCalendarAlt />
              <span>{t('education.semester')}</span>
            </div>
            <div className="detail-item">
              <FaMapMarkerAlt />
              <span>{t('education.location')}</span>
            </div>
          </motion.div>

          <motion.div
            className="education-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>{t('education.description')}</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="education-highlights"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="highlights-title">{t('education.highlightsTitle')}</h3>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5, borderColor: 'var(--accent-color)' }}
            >
              <span className="highlight-icon">{highlight.icon}</span>
              <h4>{t(highlight.titleKey)}</h4>
              <p>{t(highlight.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;