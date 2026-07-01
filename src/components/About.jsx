import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, personalInfo, skills } from '../data/portfolioData';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const allSkillTags = Object.values(skills).flat();

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        {/* Heading */}
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Who I <span className="text-gradient">Am</span>
          </h2>
          <p className="section-subtitle">
            A passionate software engineer with a knack for building scalable systems and clean code.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="about-bento">
          {/* Card 1 — Bio + Code editor */}
          <motion.div
            className="bento-card bento-bio glass-card"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="section-label">get_to_know_me.json</p>
            <div className="code-editor">
              <div className="code-editor-header">
                <span className="editor-dot editor-dot-red" />
                <span className="editor-dot editor-dot-yellow" />
                <span className="editor-dot editor-dot-green" />
                <span className="editor-filename">about.json</span>
              </div>
              <div className="code-editor-body">
                <p><span className="code-bracket">{'{'}</span></p>
                <p>&nbsp;&nbsp;<span className="code-key">"name"</span>: <span className="code-string">"Dharmik Suchak"</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-key">"role"</span>: <span className="code-string">"Software Engineer"</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-key">"education"</span>: <span className="code-string">"M.Tech, DA-IICT"</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-key">"cgpa"</span>: <span className="code-number">8.39</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-key">"location"</span>: <span className="code-string">"Gandhinagar, India"</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-key">"interests"</span>: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Backend Systems"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"AI/LLMs"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Competitive Programming"</span></p>
                <p>&nbsp;&nbsp;],</p>
                <p>&nbsp;&nbsp;<span className="code-key">"available"</span>: <span className="code-value">true</span></p>
                <p><span className="code-bracket">{'}'}</span></p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Education */}
          <motion.div
            className="bento-card bento-edu glass-card"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="section-label">Education</p>
            <div className="edu-list">
              {education.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-icon">{edu.icon}</div>
                  <div>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-school">{edu.shortName}</p>
                    <div className="edu-meta">
                      <span className="edu-period">{edu.period}</span>
                      <span className="edu-cgpa">CGPA {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
