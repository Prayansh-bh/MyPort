import { useState, useEffect } from 'react';
import './styles/Loader.css';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [count, setCount] = useState(5);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsLaunching(true);
      const launchTimer = setTimeout(() => {
        onLoadingComplete();
      }, 1500); // Slightly faster launch transition
      return () => clearTimeout(launchTimer);
    }
  }, [count, onLoadingComplete]);

  return (
    <div className={`loader-overlay ${isLaunching ? 'launching' : ''}`}>
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      
      <div className="loader-content">
        <div className="rocket-container">
          <svg className="rocket-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 7 6 7 12C7 15.3137 9.68629 18 13 18C16.3137 18 19 15.3137 19 12C19 6 14 2 12 2Z" fill="var(--cyan)" />
            <path d="M12 18V22M9 20H15" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 12H5M19 12H21" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="10" r="2" fill="var(--bg-card)" />
          </svg>
          <div className="thruster-glow"></div>
          {count === 0 && <div className="exhaust-flame"></div>}
        </div>

        <div className="countdown-display">
          <div className="count-number hero-gradient">{count}</div>
          <p className="status-text">{count > 0 ? 'SYSTEM INITIALIZING...' : 'IGNITION SEQUENCE START'}</p>
        </div>
      </div>

      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${(5 - count) * 20}%` }}></div>
      </div>
    </div>
  );
};

export default Loader;
