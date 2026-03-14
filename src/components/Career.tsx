import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>BlueBridge Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered end-to-end web solutions handling 10,000+ monthly active users.
              Architected microservices-based backend using Node.js and Express, reducing
              server response time by 25%. Created dynamic front-end features with React.js 
              and Redux, improving user engagement by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ISP Intern</h4>
                <h5>Internshala</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Executed digital marketing campaigns across Instagram & WhatsApp, reaching
              1,000+ students. Represented Internshala as Campus Ambassador. Generated 100+
              student sign-ups through targeted promotions and peer engagement strategies,
              contributing to campus-level growth targets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Open Source</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Crafting the web of tomorrow, one open-source interaction at a time.
              I bridge the gap between imagination and the browser, using immersive
              technology to build tools that empower users and elevate digital storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
