import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="glass-nav">
      <div className="nav-container">
        <a href="/" className="logo neon-text">PRAYANSH.</a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
