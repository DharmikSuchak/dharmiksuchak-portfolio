import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiExternalLink } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

function TypeWriter({ words }) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (typing) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 45);
      } else {
        setTyping(true);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, wordIdx, words]);

  return (
    <span className="typewriter-text">
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="hero section">
      {/* Decorative */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container hero-container">
        {/* Left — Text */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="badge badge-success">
              <span className="pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="hero-greeting font-mono">
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="hero-name">
            Dharmik{' '}
            <span className="text-gradient">Suchak</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="hero-role">
            <TypeWriter words={personalInfo.roles} />
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="hero-bio">
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <FiExternalLink size={16} />
            </a>
            <a
              href="/Dharmik_Suchak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="hero-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://leetcode.com/u/DharmikSuchak"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href={personalInfo.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Codolio"
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>Co</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Stats */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Avatar — static image, only the border ring spins via ::before pseudo-element */}
          <div className="avatar-wrapper">
            <img src="/pic3.png" alt="Dharmik Suchak" className="avatar-img" />
          </div>

          {/* Floating stat cards */}
          <div className="stats-grid">
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
