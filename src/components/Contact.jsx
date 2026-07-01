import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to opportunities, collaborations, and interesting conversations. Reach out!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left — Info */}
          <motion.div
            className="contact-info"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="contact-info-card glass-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <FiMail />
                  </span>
                  <div>
                    <p className="contact-detail-label">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="contact-detail-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="contact-detail-label">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="contact-detail-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-icon">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="contact-socials">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiGithub />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiLinkedin />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-link">
                  <FiMail />
                </a>
              </div>
            </div>

            {/* Status */}
            <div className="availability-card glass-card">
              <div className="avail-left">
                <span className="pulse" />
                <div>
                  <p className="avail-title">Available for Opportunities</p>
                  <p className="avail-desc">Open to full-time roles, internships & freelance projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact-form-wrap"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3 className="contact-form-title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Dharmik Suchak"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hi Dharmik, I'd love to connect about..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                {sent ? '✅ Message Sent!' : (
                  <>
                    Send Message
                    <FiSend size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container footer-inner">
          <p className="footer-text font-mono">
            &lt;Dharmik Suchak /&gt; · Built with React + ❤️
          </p>
          <p className="footer-copy">© 2025 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
