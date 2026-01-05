'use client'

import '../styles/About.css'
import AboutBox from './AboutBox'
import Image from 'next/image'

export default function About() {
  // Use public folder paths as strings
  const htmlIcon = '/assets/images/html.webp'
  const briefcaseIcon = '/assets/images/briefcase.webp'
  const userIcon = '/assets/images/user.webp'
  const resumePath = '/resume/Muhammad_Zeeshan_Haider_Resume.pdf'

  return (
    <section className="about-section" id="about">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">
        {/* Text Content */}
        <div className="about-content">
          <p className="role">Passionate Web Developer</p>

          <p className="content">
            I’m a fast-learning MERN stack developer with expertise in both
            front-end development using React and back-end services with
            Node.js, Express, and MongoDB. I thrive in collaborative
            environments and enjoy solving real-world challenges with clean,
            efficient, and scalable solutions.
            <br />
            <br />
            My goal is to build user-friendly, performance-optimized web
            applications that combine seamless UI/UX with modern development
            best practices.
            <br />
            <br />
            Whether it’s designing intuitive interfaces, building robust APIs,
            or optimizing performance, I’m dedicated to delivering
            high-quality results while continuously learning, adapting, and
            improving my craft.
          </p>

          <div className="about-buttons">
            <button className="btnGetInTouch">Get in Touch</button>

            <a
              className="btnResume"
              href={resumePath}
              download="Muhammad_Zeeshan_Haider_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Resume
            </a>
          </div>
        </div>

        {/* About Boxes */}
        <div className="about-boxes">
          <AboutBox
            image={htmlIcon}
            title="Web Development"
            description="Developing modern, full-stack web applications with a focus on performance, scalability, and user accessibility."
          />
          <AboutBox
            image={briefcaseIcon}
            title="UI/UX Design"
            description="Crafting clean, user-centered interfaces that balance aesthetics with usability to deliver smooth user experiences."
          />
          <AboutBox
            image={userIcon}
            title="Project Management"
            description="Managing and delivering end-to-end solutions using agile workflows, from ideation and design to deployment and iteration."
          />
        </div>
      </div>
    </section>
  )
}
