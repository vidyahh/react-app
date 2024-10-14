import React, { useEffect, useState } from "react";
import "./App.css";
import profile from './nan.jpg';

function App() {
  const [formFeedback, setFormFeedback] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => { observer.disconnect(); };
  }, []);

  const handleScroll = () => {
    const top = window.scrollY;
    setShowScrollTop(top > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setFormFeedback('All fields are required!');
    } else {
      setFormFeedback('Thank you for your message! I will get back to you soon.');
      e.target.reset();
    }
  };

  const smoothScroll = (targetId) => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="sticky-header">
        <nav>
          <ul>
            <li><a href="#home" onClick={() => smoothScroll('home')}>Home</a></li>
            <li><a href="#about" onClick={() => smoothScroll('about')}>About</a></li>
            <li><a href="#skills" onClick={() => smoothScroll('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => smoothScroll('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => smoothScroll('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

       {/* Home Section */}
       <section id="home" className="hero" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
        <div className="hero-content">
        <img src={profile} alt="Profile" className="profile-photo" />
          <h1>I'm Nandini!</h1>
          
          <div className="hero-buttons">
            <a href="#about" className="cta-button primary" onClick={() => smoothScroll('about')}>Learn More</a>
            <a href="#projects" className="cta-button secondary" onClick={() => smoothScroll('projects')}>View My Work</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>ABOUT ME</h2>
        <div className="about-content">
         
          <div className="about-text">
            <p>I am from Mulky, currently pursuing a final year diploma in Computer Science at Karnataka Polytechnic, Mangalore. Along with my studies, I am an NCC cadet (army), and I enjoy coding, learning about new technologies, and solving challenges through programming.</p>
            
            <p>From a young age, I’ve been fascinated by how technology can make life easier and create endless possibilities. During my diploma studies, I delved deeper into the world of programming, learning languages like Python, JavaScript, Java, and SQL. These skills opened up new ways for me to solve complex challenges, and I found immense satisfaction in building projects that not only functioned well but were also beautifully designed.</p>
            <p>In addition to my technical education, I am proud to be an NCC cadet (army), where I have developed strong leadership qualities, discipline, and the ability to work in a team. These skills have proven invaluable in my academic journey and have helped me manage my time effectively between studies, projects, and extracurricular activities.</p>
<p>My Motivation
What keeps me motivated is the belief that technology has the power to make the world a better place. I am always learning, whether it's a new programming language, a framework, or a design pattern, and I constantly seek ways to challenge myself. I have a keen interest in exploring emerging technologies like AI, Machine Learning, and Blockchain and how they can be applied to solve today’s problems.</p>
            <p>My skills include programming in languages such as Python, JavaScript, Java, and SQL, and I have experience in web development and full-stack projects. I am always motivated to keep learning and applying my knowledge in creative ways.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>MY SKILLS</h2>
        <ul className="skills-list">
          <li><i className="fas fa-code"></i><span>Python</span></li>
          <li><i className="fas fa-code"></i><span>JavaScript</span></li>
          <li><i className="fas fa-database"></i><span>SQL</span></li>
          <li><i className="fas fa-code"></i><span>REACT</span></li>
          <li><i className="fas fa-code"></i><span>HTML</span></li>
          <li><i className="fas fa-code"></i><span>CSS</span></li>
          <li><i className="fas fa-code"></i><span>COMPUTER NETWORK</span></li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>MY PROJECTS</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1: HTML & CSS </h3>
            <p>Drugaparmehwari kateel.</p>
            <a href="https://adii1010.github.io/KateelTemple/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>Project 2:Spring Board Project</h3>
            <p>Python Bootcmap</p>
            <p>Successfully completing course I have theCertificate</p>
          </div>
         
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>CONTACT ME</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:nandini@example.com">nandini@gmail.com</a></p>
          <p>Phone: 1233400890</p>
        </div>

        <h3>Send Me a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
        {formFeedback && <p className="form-feedback">{formFeedback}</p>}
      </section>

      {showScrollTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default App;