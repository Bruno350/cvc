import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaFilePdf, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

interface CVFile {
  lang: string;
  label: string;
  flag: string;
  filename: string;
  accent: string;
  gradient: string;
  shadowColor: string;
}

const cvFiles: CVFile[] = [
  {
    lang: 'pt-BR',
    label: 'Português',
    flag: '🇧🇷',
    filename: 'cv_Bruno_Thomsen_PT.pdf',
    accent: '#22C55E',
    gradient: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
    shadowColor: 'rgba(34, 197, 94, 0.35)',
  },
  {
    lang: 'en',
    label: 'English',
    flag: '🇺🇸',
    filename: 'cv_Bruno_Thomsen_EN.pdf',
    accent: '#3B82F6',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    shadowColor: 'rgba(59, 130, 246, 0.35)',
  },
  {
    lang: 'es',
    label: 'Español',
    flag: '🇪🇸',
    filename: 'cv_Bruno_Thomsen_ES.pdf',
    accent: '#F59E0B',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
    shadowColor: 'rgba(245, 158, 11, 0.35)',
  },
];

const CVDownload: React.FC = () => {
  const { t } = useLanguage();
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (lang: string) => {
    setDownloaded(lang);
    setTimeout(() => setDownloaded(null), 2500);
  };

  return (
    <div className="cv-section">
      <div className="cv-bg-blob" aria-hidden="true" />

      <motion.p
        className="cv-description"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        {t('cv.description')}
      </motion.p>

      <div className="cv-cards">
        {cvFiles.map((cv, i) => {
          const isDone = downloaded === cv.lang;
          return (
            <motion.a
              key={cv.lang}
              href={`/cv/${cv.filename}`}
              download={cv.filename}
              className="cv-card"
              onClick={() => handleDownload(cv.lang)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.97 }}
              style={
                {
                  '--card-accent': cv.accent,
                  '--card-shadow': cv.shadowColor,
                } as React.CSSProperties
              }
            >
              <div className="cv-card__strip" style={{ background: cv.gradient }} />

              <motion.div
                className="cv-card__flag"
                animate={isDone ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {cv.flag}
              </motion.div>

              <h3 className="cv-card__lang">{cv.label}</h3>

              <div className="cv-card__meta">
                <FaFilePdf style={{ color: cv.accent }} />
                <span>PDF · A4</span>
              </div>

              <div
                className="cv-card__btn"
                style={{
                  background: cv.gradient,
                  boxShadow: `0 8px 24px ${cv.shadowColor}`,
                }}
              >
                <AnimatePresence mode="wait">
                  {isDone ? (
                    <motion.span
                      key="done"
                      className="cv-card__btn-inner"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaCheckCircle />
                      <span>Baixado!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="dl"
                      className="cv-card__btn-inner"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaDownload />
                      <span>{t('cv.downloadBtn')}</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="cv-card__glow" style={{ background: cv.gradient }} />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        className="cv-footer-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        3 idiomas · PDF · A4 · Atualizado 2025
      </motion.p>
    </div>
  );
};

export default CVDownload;