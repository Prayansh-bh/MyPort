import { AI_CONFIG } from '../data/aiConfig';
import './styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2 className="hero-gradient">Career Path</h2>
        <p>A journey through pixels, code, and innovation.</p>
      </div>

      <div className="timeline">
        {AI_CONFIG.userData.experience.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot neon-text"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-date">{exp.duration}</span>
              </div>
              <h4 className="neon-text">{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
