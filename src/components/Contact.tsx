import './styles/Contact.css';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResult("Sending....");

    const formData = new FormData(e.currentTarget);
    // Placeholder key - User should replace this with their actual key from web3forms.com
    formData.append("access_key", "08fb4cc5-00ac-4b24-aa9f-f19e6b4c4682");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="hero-gradient">Get In Touch</h2>
        <p>Currently open to new opportunities and collaborations.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info glass-card">
          <div className="info-item">
            <div className="info-icon neon-text"><FiMail /></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:prayanshbh@gmail.com" className="contact-link">
                prayanshbh@gmail.com
              </a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon neon-text"><FiMapPin /></div>
            <div>
              <h4>Location</h4>
              <p>Bhopal, India</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon neon-text"><FiPhone /></div>
            <div>
              <h4>Call</h4>
              <a href="tel:+919340423885" className="contact-link">
                +91-9340423885
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {result && (
            <div className={`form-status ${status}`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
