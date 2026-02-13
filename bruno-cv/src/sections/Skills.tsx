import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTasks,
  FaMicrosoft
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiVite,
  SiMongodb,
  SiSass,
  SiC
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Front-End',
      color: '#61DAFB',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'SCSS', icon: <SiSass />, level: 85 }
      ]
    },
    {
      category: 'Back-End & Database',
      color: '#68A063',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
        { name: 'SQL', icon: <FaDatabase />, level: 70 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 65 },
        { name: 'C', icon: <SiC />, level: 60 }
      ]
    },
    {
      category: 'Ferramentas & Metodologias',
      color: '#F05032',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
        { name: 'Vite', icon: <SiVite />, level: 85 },
        { name: 'Azure DevOps', icon: <FaMicrosoft />, level: 70 },
        { name: 'Scrum', icon: <FaTasks />, level: 75 }
      ]
    }
  ];

  return (
    <div className="skills-content">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="category-title"
            style={{ color: category.color }}
            whileHover={{ x: 10 }}
          >
            {category.category}
          </motion.h3>

          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  borderColor: category.color
                }}
              >
                <motion.div
                  className="skill-icon"
                  style={{ color: category.color }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>

                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>

                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{ backgroundColor: category.color }}
                    />
                  </div>

                  <span className="skill-level">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="skills-summary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Aprendizado Contínuo</h3>
        <p>
          A tecnologia está sempre evoluindo, e eu também. Estou constantemente
          estudando novas ferramentas, frameworks e melhores práticas para entregar
          soluções cada vez melhores.
        </p>

        <div className="learning-tags">
          {['Next.js', 'React Native', 'Docker', 'AWS', 'GraphQL'].map((tech, index) => (
            <motion.span
              key={tech}
              className="learning-tag"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-color)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;