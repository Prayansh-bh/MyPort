import { AI_CONFIG } from '../data/aiConfig';
import './styles/ProjectGrid.css';
import { FiExternalLink } from 'react-icons/fi';

const ProjectGrid = () => {
  return (
    <section className="projects-section" id="work">
      <div className="section-header">
        <h2 className="hero-gradient">Selected Works</h2>
        <p>A collection of some of my finest digital creations.</p>
      </div>

      <div className="projects-grid">
        {AI_CONFIG.userData.projects.map((project, i) => (
          <div key={i} className="project-card glass-card">
            <div className="project-content">
              <span className="project-category neon-text">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tools">
                {project.tools.split(', ').map((tool, index) => (
                  <span key={index} className="tool-tag">{tool}</span>
                ))}
              </div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className={`project-link ${project.status === 'COMING_SOON' ? 'coming-soon' : ''}`}>
                  {project.status === 'COMING_SOON' ? 'Coming Soon' : 'View Project'} <FiExternalLink />
                </a>
              ) : (
                <span className="project-link disabled">
                  Coming Soon <FiExternalLink />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
