import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const, // ← aqui resolve o erro
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1] as const, // ← aqui também
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        // ease: "linear" // se quiser string, pode usar direto
        // ou cubic-bezier:
        // ease: [0.4, 0, 0.2, 1] as const
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1] as const, // ← mais um
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <div className="section-header">
          <motion.h2 variants={titleVariants}>
            {title}
            <motion.span
              className="title-decorator"
              variants={lineVariants}
              style={{ transformOrigin: 'left' }}
            />
          </motion.h2>

          {subtitle && (
            <motion.p className="section-subtitle" variants={subtitleVariants}>
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div variants={contentVariants}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;