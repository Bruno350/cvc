import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaCheckCircle } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Curso de Desenvolvedor Full Stack',
      institution: 'Harve',
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
      icon: <FaCertificate />
    },
    {
      title: 'Curso de Desenvolvedor Full Stack',
      institution: 'DevSamurai',
      year: '2022-2023',
      skills: ['React', 'TypeScript', 'Next.js', 'MongoDB', 'REST APIs'],
      icon: <FaAward />
    }
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
        <p>
          Investi em cursos e certificações para aprofundar meus conhecimentos e
          desenvolver habilidades práticas em desenvolvimento full-stack.
        </p>
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
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)' 
            }}
          >
            <motion.div
              className="cert-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              {cert.icon}
            </motion.div>

            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-institution">{cert.institution}</span>
                <span className="cert-year">{cert.year}</span>
              </div>

              <div className="cert-skills">
                <h4>Habilidades Adquiridas:</h4>
                <div className="skills-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: 'var(--accent-color)',
                        color: '#fff'
                      }}
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
          <h3>Compromisso com o Aprendizado</h3>
          <p>
            Além dos cursos formais, estou constantemente estudando através de
            documentações oficiais, tutoriais, projetos pessoais e participação em
            comunidades de desenvolvedores. A tecnologia evolui rápido, e eu evoluo com ela.
          </p>
          <div className="commitment-stats">
            <motion.div
              className="stat"
              whileHover={{ scale: 1.1 }}
            >
              <span className="stat-number">2+</span>
              <span className="stat-label">Certificações</span>
            </motion.div>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.1 }}
            >
              <span className="stat-number">500+</span>
              <span className="stat-label">Horas de Estudo</span>
            </motion.div>
            <motion.div
              className="stat"
              whileHover={{ scale: 1.1 }}
            >
              <span className="stat-number">∞</span>
              <span className="stat-label">Vontade de Aprender</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
