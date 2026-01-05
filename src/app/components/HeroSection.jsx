'use client'

import '../styles/HeroSection.css'
import TypingAnimation from '../components/TypingAnimation'
import Image from 'next/image'

export default function HeroSection() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/m-zeeshan-haider-606bb3284/",
      img: "/assets/images/linkedin.webp",
      alt: "LinkedIn",
      title: "LinkedIn profile",
    },
    {
      href: "https://github.com/mzeeshanh-dev/",
      img: "/assets/images/github.webp",
      alt: "GitHub",
      title: "GitHub profile",
    },
    {
      href: "https://www.instagram.com/zh012948",
      img: "/assets/images/instagram.webp",
      alt: "Instagram",
      title: "Instagram profile",
    },
    {
      href: "https://www.fiverr.com/s/1qpNyak",
      img: "/assets/images/fiverr.webp",
      alt: "Fiverr",
      title: "Fiverr profile",
    },
  ]

  const BlogImage = "/assets/images/Blob-Image.webp"
  const arrow = "/assets/images/arrow.webp"

  return (
    <section className="hero-section">
      {/* Social Icons */}
      <div className="social-icons">
        {socialLinks.map(({ href, img, alt, title }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
          >
            <Image src={img} alt={alt} title={title} width={25} height={25} />
          </a>
        ))}
      </div>

      {/* Hero Container */}
      <div className="hero-container">
        {/* Text Content */}
        <div className="content-container">
          <p className="hello-text">Hello, I'm</p>
          <p className="name-animation">M. Zeeshan Haider</p>
          <div className="job-title">
            <TypingAnimation />
          </div>
          <p className="briefing">
            Strong expertise in full-stack MERN dev. Building scalable,
            responsive, and user-friendly web applications from frontend to backend.
          </p>
          <div className="btnContact">
            <a href="#contact">
              Contact Me{' '}
              <Image src={arrow} alt="arrow icon" width={10} height={10} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="blob-image">
          <Image src={BlogImage} alt="Profile" width={400} height={400} priority />
        </div>
      </div>
    </section>
  )
}
