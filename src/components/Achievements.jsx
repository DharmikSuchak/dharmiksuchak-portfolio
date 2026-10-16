import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight, FiAward, FiCloud, FiCode, FiFileText, FiUsers } from 'react-icons/fi';
import { achievements, leadership } from '../data/portfolioData';
import './Achievements.css';

const icons = {
  award: FiAward,
  cloud: FiCloud,
  code: FiCode,
  file: FiFileText,
  users: FiUsers,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
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
          <p className="section-label">Recognition and impact</p>
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Selected results, community reach, and the programs I helped lead.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const Icon = icons[achievement.icon];

            return (
              <motion.article
                key={achievement.id}
                className="achievement-card"
                custom={index}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="achievement-topline">
                  <span className="achievement-category">{achievement.category}</span>
                  <span className="achievement-icon" aria-hidden="true"><Icon /></span>
                </div>
                <div className="achievement-metric">
                  <span className="achievement-metric-value">{achievement.metric}</span>
                  <span className="achievement-metric-label">{achievement.metricLabel}</span>
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.detail && <p className="achievement-detail">{achievement.detail}</p>}
                {achievement.links && (
                  <div className="achievement-links">
                    {achievement.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}<FiArrowUpRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="leadership-section"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="leadership-intro">
            <p className="section-label">Beyond the code</p>
            <h3>Leadership and mentoring</h3>
            <p>Workshops, events, and guidance for the student developer community.</p>
          </div>
          <div className="leadership-grid">
            {leadership.map((role, index) => {
              const Icon = icons[role.icon];

              return (
                <motion.article
                  key={role.id}
                  className="leadership-card"
                  custom={5 + index}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <span className="leadership-icon" aria-hidden="true"><Icon /></span>
                  <p className="leadership-role">{role.role}</p>
                  <h4 className="leadership-org">{role.org}</h4>
                  <p className="leadership-description">{role.description}</p>
                  <div className="leadership-meta">
                    <span>{role.period}</span>
                    <span>{role.location}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
