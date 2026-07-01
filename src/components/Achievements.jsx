import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, leadership } from '../data/portfolioData';
import './Achievements.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Recognition & Leadership</p>
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones, recognitions, and leadership roles that define my journey.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              className="achievement-card"
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="ach-icon-wrap" style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}>
                <span className="ach-icon">{ach.icon}</span>
              </div>
              <h3 className="ach-title" style={{ color: ach.color }}>{ach.title}</h3>
              <p className="ach-desc">{ach.description}</p>
              <p className="ach-detail font-mono">{ach.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership */}
        <motion.div
          className="leadership-section"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="leadership-heading">
            <span className="section-label" style={{ margin: 0 }}>Positions of Responsibility</span>
          </h3>
          <div className="leadership-grid">
            {leadership.map((role, idx) => (
              <motion.div
                key={role.org}
                className="leadership-card glass-card"
                custom={5 + idx}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="leadership-header">
                  <span className="leadership-icon">{role.icon}</span>
                  <div>
                    <p className="leadership-org">{role.org}</p>
                    <p className="leadership-role">{role.role}</p>
                  </div>
                </div>
                <div className="leadership-meta">
                  <span className="exp-period font-mono">{role.period}</span>
                  <span className="exp-period font-mono">{role.location}</span>
                </div>
                <ul className="leadership-highlights">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="exp-highlight-item">
                      <span className="highlight-bullet" style={{ background: '#6366f1' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
