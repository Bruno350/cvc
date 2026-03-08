import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub',   url: 'https://github.com/Bruno350',                          icon: FaGithub   },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bruno-thomsen-sobrinho',   icon: FaLinkedin },
    { name: 'Email',    url: 'mailto:brunodevthomsen@gmail.com',                     icon: FaEnvelope },
  ];

  const navLinks = [
    { href: '#hero',       label: t('footer.links.home') },
    { href: '#about',      label: t('footer.links.about') },
    { href: '#experience', label: t('footer.links.experience') },
    { href: '#contact',    label: t('footer.links.contact') },
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('footer.name')}
            </motion.h3>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="footer-tagline"
            >
              {t('footer.tagline')}
            </motion.p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('footer.navigation')}
            </motion.h4>
            <motion.ul
              className="footer-links"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('footer.connect')}
            </motion.h4>
            <motion.div
              className="footer-socials"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                    className="footer-social-link"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                    <span className="social-tooltip">{social.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="footer-copyright">
            © {currentYear} Bruno Thomsen Sobrinho. {t('footer.copyright')}{' '}
            <motion.span
              className="footer-icon"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart />
            </motion.span>{' '}
            {t('footer.and')}{' '}
            <motion.span
              className="footer-icon"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaCode />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;