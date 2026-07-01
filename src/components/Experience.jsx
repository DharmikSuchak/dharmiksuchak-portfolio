import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';
import './Experience.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Work History</p>
          <h2 className="section-title">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Real-world production environments where I've shipped impactful features.
          </p>
        </motion.div>

        <div className="exp-timeline">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="exp-card glass-card"
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Accent top bar */}
              <div
                className="exp-accent-bar"
                style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
              />

              <div className="exp-header">
                <div className="exp-header-left">
                  <div className="exp-dot" style={{ background: exp.color }} />
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                </div>
                <div className="exp-header-right">
                  <span className="exp-period font-mono">{exp.period}</span>
                  {exp.note && (
                    <span className="exp-note">{exp.note}</span>
                  )}
                </div>
              </div>

              <p className="exp-type">{exp.type}</p>

              <ul className="exp-highlights">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="exp-highlight-item">
                    <span className="highlight-bullet" style={{ background: exp.color }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
