import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      titleKey: 'certifications.items.0.title',
      institutionKey: 'certifications.items.0.institution',
      yearKey: 'certifications.items.0.year',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
      icon: <FaCertificate />,
    },
    {
      titleKey: 'certifications.items.1.title',
      institutionKey: 'certifications.items.1.institution',
      yearKey: 'certifications.items.1.year',
      skills: ['React', 'TypeScript', 'Next.js', 'MongoDB', 'REST APIs'],
      icon: <FaAward />,
    },
  ];

  const stats = [
    { numberKey: 'certifications.commitment.stats.0.number', labelKey: 'certifications.commitment.stats.0.label' },
    { numberKey: 'certifications.commitment.stats.1.number', labelKey: 'certifications.commitment.stats.1.label' },
    { numberKey: 'certifications.commitment.stats.2.number', labelKey: 'certifications.commitment.stats.2.label' },
  ];

  return (
    <div className="certifications-content">
      <motion.div
        className="certifications-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>{t('certifications.intro')}</p>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 5, boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)' }}
          >
            <motion.div
              className="cert-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {cert.icon}
            </motion.div>

            <div className="cert-content">
              <h3 className="cert-title">{t(cert.titleKey)}</h3>
              <div className="cert-meta">
                <span className="cert-institution">{t(cert.institutionKey)}</span>
                <span className="cert-year">{t(cert.yearKey)}</span>
              </div>

              <div className="cert-skills">
                <h4>{t('certifications.skillsAcquired')}</h4>
                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)', color: '#fff' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="cert-badge"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="certifications-commitment"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="commitment-card">
          <h3>{t('certifications.commitment.title')}</h3>
          <p>{t('certifications.commitment.description')}</p>
          <div className="commitment-stats">
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat" whileHover={{ scale: 1.1 }}>
                <span className="stat-number">{t(stat.numberKey)}</span>
                <span className="stat-label">{t(stat.labelKey)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;