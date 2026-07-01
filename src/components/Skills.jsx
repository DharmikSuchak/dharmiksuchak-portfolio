import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const categoryIcons = {
  Languages: '💻',
  'Backend & Frontend': '⚙️',
  Databases: '🗄️',
  'Cloud & DevOps': '☁️',
  'AI/ML': '🤖',
};

const skillColors = {
  Languages: '#6366f1',
  'Backend & Frontend': '#8b5cf6',
  Databases: '#06b6d4',
  'Cloud & DevOps': '#10b981',
  'AI/ML': '#f59e0b',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  const [active, setActive] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const categories = ['All', ...Object.keys(skills)];

  const filteredSkills =
    active === 'All'
      ? Object.entries(skills)
      : Object.entries(skills).filter(([cat]) => cat === active);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies I've used in production and side projects.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="filter-tabs"
          style={{ marginBottom: '40px' }}
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {categoryIcons[cat] && <span>{categoryIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills */}
        <div className="skills-sections">
          {filteredSkills.map(([category, items], catIdx) => (
            <motion.div
              key={category}
              className="skills-group"
              custom={catIdx}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="skills-group-header">
                <span className="skills-group-icon">{categoryIcons[category]}</span>
                <h3
                  className="skills-group-title"
                  style={{ color: skillColors[category] }}
                >
                  {category}
                </h3>
              </div>
              <div className="skills-grid">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + i * 0.05, duration: 0.4 }}
                    style={{
                      '--skill-color': skillColors[category],
                    }}
                  >
                    <span
                      className="skill-dot"
                      style={{ background: skillColors[category] }}
                    />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
