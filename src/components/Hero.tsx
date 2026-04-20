import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AI_CONFIG } from '../data/aiConfig';
import './styles/Hero.css';

/**
 * Hero Component
 * --------------
 * The entry point of the portfolio. Features a cinematic entry animation 
 * using GSAP and a dynamic background glow effect that follows the mouse.
 */
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Background glow mouse-follow effect
      // This creates a subtle parallax-like movement for the background elements
      const xTo = gsap.quickTo('.hero-bg-glow', 'x', { duration: 1.5, ease: 'power2.out' });
      const yTo = gsap.quickTo('.hero-bg-glow', 'y', { duration: 1.5, ease: 'power2.out' });

      const moveBg = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        xTo(xPos);
        yTo(yPos);
      };

      window.addEventListener('mousemove', moveBg);
      return () => window.removeEventListener('mousemove', moveBg);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={containerRef}>
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <div className="hero-badge neon-text">
          Available for new opportunities 2026
        </div>
        <h1 className="hero-gradient">Design. Code. <br />Innovate.</h1>
        <p>
          I'm <strong>Prayansh Bhaurase</strong>, a creative full-stack developer 
          crafting high-performance, immersive digital experiences where 
          imagination meets the browser.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">View Projects</a>
          <a href={AI_CONFIG.userData.resumeLink} target="_blank" rel="noreferrer" className="btn-outline">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
