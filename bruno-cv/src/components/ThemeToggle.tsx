import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor: darkMode ? '#1f2937' : '#e5e7eb'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: darkMode ? 28 : 0,
            rotate: darkMode ? 180 : 0
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 20 
          }}
        >
          <motion.div
            className="toggle-icon"
            initial={false}
            animate={{
              scale: darkMode ? 0 : 1,
              opacity: darkMode ? 0 : 1,
              rotate: darkMode ? -180 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            <BsSun />
          </motion.div>
          
          <motion.div
            className="toggle-icon"
            initial={false}
            animate={{
              scale: darkMode ? 1 : 0,
              opacity: darkMode ? 1 : 0,
              rotate: darkMode ? 0 : 180
            }}
            transition={{ duration: 0.2 }}
          >
            <BsMoon />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;