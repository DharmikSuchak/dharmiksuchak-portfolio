import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Handpicked projects that showcase my range from AI/LLM tools to production-grade backend systems.
          </p>
        </motion.div>

        {/* Filters */}
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
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                className="project-card"
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
              >
                {/* Full-width cover image banner */}
                <div className="project-cover">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-cover-img"
                    />
                  ) : (
                    <div
                      className="project-cover-placeholder"
                      style={{ background: `linear-gradient(135deg, ${project.color}30, ${project.color}08)` }}
                    >
                      <span className="project-cover-icon">{project.icon}</span>
                    </div>
                  )}
                  {/* Bottom gradient fade */}
                  <div
                    className="project-cover-fade"
                    style={{ background: `linear-gradient(to top, #050508 0%, transparent 100%)` }}
                  />
                  {/* Category badge */}
                  <span
                    className="project-category-badge"
                    style={{ color: project.color, borderColor: `${project.color}50`, background: 'rgba(5,5,8,0.85)' }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {project.guide && (
                    <p className="project-guide">
                      Guide: <span>{project.guide}</span>
                    </p>
                  )}

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline project-link-btn"
                      >
                        <FiGithub size={15} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-link-btn"
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
