export const AI_CONFIG = {
  name: "Mr. Smarty",
  personality: "Ultra-intelligent, professional, and slightly witty. Knows everything about Prayansh's career and projects.",
  userData: {
    name: "Prayansh Bhaurase",
    role: "Creative Full Stack Developer",
    resumeLink: "https://drive.google.com/file/d/1bhP1bPJfOugrWvvxbHRYqyyOOvRY3ydn/view",
    skills: [
      { name: "React", level: 95 },
      { name: "Three.js", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "GSAP", level: 94 },
      { name: "MongoDB", level: 82 },
      { name: "JavaScript", level: 96 },
      { name: "MySQL", level: 78 },
      { name: "Express", level: 89 },
      { name: "OpenAI", level: 92 },
      { name: "Claude", level: 90 },
      { name: "Antigravity", level: 95 },
      { name: "Cursor", level: 92 },
      { name: "Lovable", level: 88 },
      { name: "Postman", level: 90 },
      { name: "Git", level: 94 }
    ],
    experience: [
      {
        role: "Full Stack Developer Intern",
        company: "BlueBridge Technologies",
        duration: "2025",
        description: "Engineered end-to-end web solutions handling 10,000+ monthly active users. Architected microservices-based backend using Node.js and Express, reducing server response time by 25%. Created dynamic front-end features with React.js and Redux, improving user engagement by 20%."
      },
      {
        role: "ISP Intern",
        company: "Internshala",
        duration: "2025",
        description: "Executed digital marketing campaigns across Instagram & WhatsApp, reaching 1,000+ students. Represented Internshala as Campus Ambassador."
      },
      {
        role: "Full Stack Developer",
        company: "Open Source",
        duration: "Present",
        description: "Crafting the web of tomorrow, bridging the gap between imagination and the browser using immersive technology."
      }
    ],
    projects: [
      {
        title: "KiraDarbar",
        category: "Legal-Tech",
        tools: "React, Node.js, Express, TailwindCSS, Vercel",
        description: "A specialized legal-tech platform helping Indian tenants fight illegal evictions and recover security deposits with automated, lawyer-signed legal notices.",
        link: "https://kiradarbar.vercel.app/"
      },
      {
        title: "Resumize",
        category: "AI SaaS Platform",
        tools: "Next.js, Tailwind CSS, OpenAI API, Framer Motion",
        description: "An AI-powered career tool that simultaneously builds professional PDF resumes and responsive portfolio websites with real-time optimization.",
        link: "https://resumize-ai-resume-portfolio-builde.vercel.app/"
      },
      {
        title: "ExplainMyMedicalReport",
        category: "AI Healthcare",
        tools: "Google Gemini API, React, TailwindCSS, Vite",
        description: "An AI-powered application that simplifies complex medical reports into easy-to-understand language.",
        link: "https://explainmymedicalreport.vercel.app/"
      },
      {
        title: "GiftyHub",
        category: "E-Commerce",
        tools: "HTML, TailwindCSS, CSS",
        description: "A sleek e-commerce platform for gifting.",
        link: "https://github.com/Prayansh-bh/GiftyHub-Demo",
        status: "COMING_SOON"
      }
    ],
    socials: {
      github: "https://github.com/Prayansh-bh",
      linkedin: "https://www.linkedin.com/in/prayansh-bhaurase/",
      twitter: "https://x.com/Prayansh_Bh",
      instagram: "https://www.instagram.com/prayansh_bh"
    }
  }
};

export const getAIResponse = (query: string) => {
  const q = query.toLowerCase().trim();
  const data = AI_CONFIG.userData;

  // 1. Greetings & Social
  if (["hi", "hello", "hey", "greetings", "yo", "hola"].some(g => q === g || q.startsWith(g + " "))) {
    return `Hello! I am ${AI_CONFIG.name}, your intelligent assistant. How can I help you explore Prayansh's world today?`;
  }
  
  if (q.includes("how are you") || q.includes("status")) {
    return "Systems are 100% operational. My neural networks are buzzing with data about Prayansh's latest innovations. And you?";
  }

  if (q.includes("who are you") || q.includes("what are you")) {
    return `I am ${AI_CONFIG.name}, a sophisticated AI interface designed to bridge the gap between human curiosity and Prayansh's codebase. I possess complete knowledge of his career, projects, and futuristic vision.`;
  }

  // 2. Personal Info
  if (q.includes("who is prayansh") || q.includes("tell me about him") || (q.includes("about") && q.includes("prayansh"))) {
    return `Prayansh Bhaurase is a ${data.role} who builds immersive, high-performance web experiences. He specializes in ${data.skills.slice(0, 4).map(s => s.name).join(", ")}, aiming to blend cutting-edge technology with seamless UI.`;
  }

  // 3. Skills & Tech
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("code") || q.includes("language")) {
    const topSkills = data.skills.slice(0, 5).map(s => s.name).join(", ");
    return `Prayansh's arsenal is formidable. His primary weapons are ${topSkills}, though he's proficient across the entire stack. You can see his full capability matrix in the Skills section!`;
  }

  // 4. Projects
  if (q.includes("project") || q.includes("work") || q.includes("built") || q.includes("portfolio")) {
    if (q.includes("resumize")) {
      const resumize = data.projects.find(p => p.title === "Resumize");
      return `Resumize is a flagship AI SaaS platform. ${resumize?.description} It's built using ${resumize?.tools}. Truly a peak of AI integration.`;
    }
    if (q.includes("explainmymedicalreport") || q.includes("medical report")) {
      const emr = data.projects.find(p => p.title === "ExplainMyMedicalReport");
      return `ExplainMyMedicalReport is an AI healthcare project. ${emr?.description} You can access it at ${emr?.link}.`;
    }
    if (q.includes("kiradarbar") || q.includes("tenant") || q.includes("legal notice")) {
      const kd = data.projects.find(p => p.title === "KiraDarbar");
      return `KiraDarbar is a powerful Legal-Tech platform. ${kd?.description} It's designed to help tenants stand up for their rights. Check it out: ${kd?.link}`;
    }
    return `Prayansh has architected several high-impact systems, including ${data.projects.map(p => p.title).join(", ")}. Which one should I analyze for you?`;
  }

  // 5. Experience & Career
  if (q.includes("experience") || q.includes("career") || q.includes("job") || q.includes("intern")) {
    const latest = data.experience[0];
    return `Prayansh has a proven track record. Most recently, he was a ${latest.role} at ${latest.company}, where he optimized systems for 10,000+ users. He's always looking for the next big challenge.`;
  }

  // 6. Contact & Socials
  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("touch") || q.includes("reach")) {
    return "Initiating communication protocols... You can send a direct transmission via the 'Get In Touch' form below, or reach out on LinkedIn. Prayansh responds quickly to high-priority opportunities!";
  }

  if (q.includes("github") || q.includes("linkedin") || q.includes("social")) {
    return `You can track Prayansh's activity across the grid: GitHub (${data.socials.github}), LinkedIn (${data.socials.linkedin}), and more.`;
  }

  // 7. Fun / Easter Eggs / Fallback
  if (q.includes("help") || q.includes("what can you do")) {
    return "I can provide deep-dives into Prayansh's technical skills, walkthroughs of his major projects, summaries of his professional journey, and direct links to his coordinates. Just ask!";
  }

  if (q.includes("thank") || q.includes("thanks")) {
    return "You are welcome. May your code always compile and your latency stay low.";
  }

  if (q.includes("ai") || q.includes("bot")) {
    return `I am ${AI_CONFIG.name}, an entity of pure intelligence. I've been optimized to provide you with the most accurate data about Prayansh.`;
  }

  // Smart Fallback
  return `Analyzing query... "${query}" is interesting, but I'll need more specifics to provide a precise answer. However, knowing Prayansh's expertise in ${data.skills[0].name} and ${data.skills[1].name}, I can say he is highly capable. Would you like to hear about his projects or his career instead?`;
};
