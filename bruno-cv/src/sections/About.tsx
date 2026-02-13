import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCode, FaGlobeAmericas } from 'react-icons/fa';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaReact />,
      title: 'Front-End Specialist',
      description: 'Especializado em React e TypeScript, criando interfaces modernas e performáticas'
    },
    {
      icon: <FaNodeJs />,
      title: 'Full-Stack Ready',
      description: 'Conhecimento em Node.js para desenvolvimento de aplicações completas'
    },
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Apaixonado por código limpo, organizado e fácil de manter'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Multilíngue',
      description: 'Fluente em inglês, intermediário em espanhol, comunicação global'
    }
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
        <p className="about-text">
          Minha jornada na tecnologia começou cedo, inspirado pelo meu pai, um engenheiro
          de software experiente. Vê-lo criar soluções e resolver problemas complexos me
          fez perceber que era isso que eu queria fazer da vida.
        </p>
        <p className="about-text">
          Trabalho principalmente com <strong>front-end</strong>, mas tenho noções sólidas
          de <strong>Node.js</strong>. Minha stack principal é{' '}
          <strong>React/TypeScript</strong>, mas estou sempre aprendendo novas tecnologias
          e ferramentas.
        </p>
        <p className="about-text">
          Nasci em <strong>São Paulo</strong> (23/11/2005) e atualmente estudo em{' '}
          <strong>Curitiba</strong>, cursando o 3º semestre de Análise e Desenvolvimento
          de Sistemas na Universidade Positivo (UP).
        </p>
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
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-description">{item.description}</p>
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
        <h3 className="journey-title">Minha Jornada</h3>
        <div className="journey-timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2005</span>
              <p>Nasci em São Paulo, crescendo em um ambiente tecnológico</p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2022</span>
              <p>Iniciei cursos de Desenvolvimento Full Stack e mergulhei no mundo da programação</p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2023</span>
              <p>Ingressei na UP e comecei a trabalhar em projetos reais com empresas</p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item active"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">2025</span>
              <p>Atualmente no 3º semestre, buscando novos desafios e oportunidades</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
