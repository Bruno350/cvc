import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt, FaCode, FaUsers } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'CodeByte',
      period: '2023 - 2024',
      location: 'Curitiba, PR',
      description:
        'Contribuí no desenvolvimento de aplicações web full-stack, trabalhando com React, TypeScript e Node.js. Participei de projetos colaborativos usando metodologias ágeis.',
      link: 'https://www.linkedin.com/company/codebyte/?originalSubdomain=br',
      technologies: ['React', 'TypeScript', 'Node.js', 'Scrum', 'Azure DevOps'],
      icon: <FaCode />
    },
    {
      title: 'Desenvolvedor Web',
      company: 'Projeto AED Alimentos',
      period: '2023',
      location: 'Curitiba, PR',
      description:
        'Desenvolvimento de aplicações web para gerenciamento de alimentos, focando em interface intuitiva e experiência do usuário. Implementação de funcionalidades de CRUD e integração com banco de dados.',
      technologies: ['React', 'JavaScript', 'MongoDB', 'CSS'],
      icon: <FaBriefcase />
    }
  ];

  return (
    <div className="experience-content">
      <motion.div
        className="experience-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          Minha experiência profissional inclui trabalhos em equipe, desenvolvimento de
          projetos reais e colaboração com empresas da região de Curitiba.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="experience-icon"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {exp.icon}
            </motion.div>

            <motion.div
              className="experience-card"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' 
              }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">
                    {exp.company}
                    {exp.link && (
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                  </h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'var(--accent-color)',
                      color: '#fff'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="experience-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="cta-card">
          <motion.div
            className="cta-icon"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaUsers />
          </motion.div>
          <h3>Vamos trabalhar juntos?</h3>
          <p>
            Estou sempre aberto a novos desafios e oportunidades de colaboração em
            projetos interessantes.
          </p>
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
