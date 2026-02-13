import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <div className="education-content">
      <motion.div
        className="education-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: '0 20px 50px rgba(59, 130, 246, 0.2)' 
        }}
      >
        <motion.div
          className="education-icon"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
            Análise e Desenvolvimento de Sistemas
          </motion.h3>

          <motion.div
            className="education-institution"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaUniversity />
            <span>Universidade Positivo (UP)</span>
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
              <span>3º Semestre (em andamento)</span>
            </div>
            <div className="detail-item">
              <FaMapMarkerAlt />
              <span>Curitiba, Paraná</span>
            </div>
          </motion.div>

          <motion.div
            className="education-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Curso tecnológico focado no desenvolvimento de software, abordando
              programação, banco de dados, engenharia de software, metodologias ágeis e
              gestão de projetos.
            </p>
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
        <h3 className="highlights-title">Destaques Acadêmicos</h3>
        <div className="highlights-grid">
          {[
            {
              title: 'Desenvolvimento Web',
              description: 'Projetos práticos com React, TypeScript e Node.js',
              icon: '💻'
            },
            {
              title: 'Banco de Dados',
              description: 'SQL, MongoDB e modelagem de dados',
              icon: '🗄️'
            },
            {
              title: 'Metodologias Ágeis',
              description: 'Scrum, Kanban e gestão de projetos',
              icon: '⚡'
            },
            {
              title: 'Projetos em Equipe',
              description: 'Desenvolvimento colaborativo e versionamento',
              icon: '👥'
            }
          ].map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                borderColor: 'var(--accent-color)'
              }}
            >
              <span className="highlight-icon">{highlight.icon}</span>
              <h4>{highlight.title}</h4>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;