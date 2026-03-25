import { AI_CONFIG } from '../data/aiConfig';
import './styles/TechStack.css';

const TechStack = () => {
  return (
    <section className="tech-section" id="skills">
      <div className="section-header">
        <h2 className="hero-gradient">Capabilities</h2>
        <p>The weapons of choice for my digital adventures.</p>
      </div>

      <div className="tech-grid">
        {AI_CONFIG.userData.skills.map((skill, i) => (
          <div key={i} className="tech-item glass-card">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
