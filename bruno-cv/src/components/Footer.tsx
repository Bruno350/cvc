import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Bruno350',
      icon: FaGithub,
      color: '#333',
      darkColor: '#f5f5f5'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bruno-thomsen-sobrinho',
      icon: FaLinkedin,
      color: '#0077B5',
      darkColor: '#0077B5'
    },
    {
      name: 'Email',
      url: 'mailto:brunodevthomsen@gmail.com',
      icon: FaEnvelope,
      color: '#3b82f6',
      darkColor: '#3b82f6'
    }
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
          <div className="footer-section">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Bruno Thomsen Sobrinho
            </motion.h3>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="footer-tagline"
            >
              Desenvolvedor Front-End apaixonado por criar experiências digitais incríveis
            </motion.p>
          </div>

          <div className="footer-section">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Navegação
            </motion.h4>
            <motion.ul
              className="footer-links"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#contact">Contato</a></li>
            </motion.ul>
          </div>

          <div className="footer-section">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Conecte-se
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
                    transition={{ 
                      delay: 0.4 + index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                      y: -5
                    }}
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
            © {currentYear} Bruno Thomsen Sobrinho. Desenvolvido com{' '}
            <motion.span
              className="footer-icon"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart />
            </motion.span>{' '}
            e{' '}
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