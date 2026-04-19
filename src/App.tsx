import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AIAssistant from "./components/AIAssistant";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (showLoader) return;

    // Cinematic "Blasting" reveal animation
    const tl = gsap.timeline();
    
    tl.to(".app-container", {
      display: "block",
      duration: 0
    })
    .fromTo(".app-container", 
      { 
        opacity: 0, 
        scale: 0.8,
        filter: "brightness(5) blur(20px)"
      },
      { 
        opacity: 1, 
        scale: 1, 
        filter: "brightness(1) blur(0px)",
        duration: 2.5, 
        ease: "expo.out",
        clearProps: "all"
      }
    );
    // Smoother entry animations for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      // Immediate visibility for hero
      if (index === 0) {
        gsap.to(section, { opacity: 1, duration: 1 });
        return;
      }

      gsap.fromTo(section,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [showLoader]);

  return (
    <>
      {showLoader && <Loader onLoadingComplete={() => setShowLoader(false)} />}
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <ProjectGrid />
          <Experience />
          <Contact />
        </main>
        <AIAssistant />

        <footer className="glass-footer">
          <p>Designed & Developed by © 2026 Prayansh Bhaurase.</p>
          <div className="footer-links">
            <a href="https://github.com/Prayansh-bh" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/prayansh-bhaurase/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://youtube.com/@damn_acoustic?si=wZkku3hSHy-pV0v4" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://www.instagram.com/prayansh_bh?igsh=MWhuZGwwbTQxbjBvcw%3D%3D" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com/Prayansh_Bh" target="_blank" rel="noreferrer">X (Twitter)</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
