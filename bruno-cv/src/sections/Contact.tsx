import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="contact-content">
      <motion.div
        className="contact-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="intro-icon"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaRocket />
        </motion.div>
        <h3>{t('contact.subtitle')}</h3>
        <p>{t('contact.description')}</p>
      </motion.div>

      <motion.div
        className="contact-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
          href="mailto:brunodevthomsen@gmail.com"
          className="contact-card email-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="card-icon"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaEnvelope />
          </motion.div>
          <div className="card-content">
            <h4>{t('contact.email.title')}</h4>
            <p>{t('contact.email.value')}</p>
            <span className="card-action">{t('contact.email.action')}</span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/Bruno350"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card github-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(51, 51, 51, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="card-icon"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaGithub />
          </motion.div>
          <div className="card-content">
            <h4>{t('contact.github.title')}</h4>
            <p>{t('contact.github.value')}</p>
            <span className="card-action">{t('contact.github.action')}</span>
          </div>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/bruno-thomsen-sobrinho"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card linkedin-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(0, 119, 181, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="card-icon"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaLinkedin />
          </motion.div>
          <div className="card-content">
            <h4>{t('contact.linkedin.title')}</h4>
            <p>{t('contact.linkedin.value')}</p>
            <span className="card-action">{t('contact.linkedin.action')}</span>
          </div>
        </motion.a>
      </motion.div>

      <motion.div
        className="contact-location"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div className="location-badge" whileHover={{ scale: 1.05 }}>
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaMapMarkerAlt />
          </motion.div>
          <span>{t('contact.location')}</span>
        </motion.div>

        <motion.div
          className="availability-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="status-dot"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>{t('contact.availability')}</span>
          <FaCode />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;