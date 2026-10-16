import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

const categories = ['All', 'AI & Data', 'Backend Systems', 'Full Stack', 'Web & Mobile'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: Math.min(i, 5) * 0.07, ease: [0.22, 1, 0.36, 1] },
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
          <p className="section-label">Project Library · {projects.length} builds</p>
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A closer look at the products, experiments, and systems I have built.
          </p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          role="group"
          aria-label="Filter projects by category"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              aria-pressed={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}{cat === 'All' ? ` (${projects.length})` : ''}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.article
                key={project.title}
                className="project-card"
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
              >
                <div className="project-cover">
                  <img
                    src={project.image}
                    alt={project.imageAlt || `${project.title} project artwork`}
                    className="project-cover-img"
                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-body">
                  <span
                    className="project-category-badge"
                    style={{ borderColor: `${project.color}80` }}
                  >
                    {project.category}
                  </span>
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    {project.status && <span className="project-status">{project.status}</span>}
                  </div>
                  <p className="project-desc">{project.description}</p>

                  {project.guide && (
                    <p className="project-guide">
                      Guide: <span>{project.guide}</span>
                    </p>
                  )}

                  <div className="project-tech" aria-label="Technologies used">
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
                        View code
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
                        {project.demoLabel || 'Live demo'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
