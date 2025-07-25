import '../styles/HeroSection.css'
import linkedin from '../assets/images/linkedin.webp'
import instagram from '../assets/images/instagram.webp'
import github from '../assets/images/github.webp'
// import BlobImage1 from '../components/BlobImage'
import BlogImage from '../assets/images/Blob-Image.webp'
import arrow from '../assets/images/arrow.webp'
import TypingAnimation from '../components/TypingAnimation'

export default function HeroSection() {
    return (
        <>

            <div className="hero-section">

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/m-zeeshan-haider-606bb3284/" target='blank'><img src={linkedin} alt='linkedin' title='linkedin profile' /></a>
                    <a href="https://github.com/zh012948/" target='blank'><img src={github} alt='github' title='github profile' /></a>
                    <a href="https://www.instagram.com/zh012948" target='blank'><img src={instagram} alt='instagram' title='instagram profile' /></a>
                </div>


                <div className="hero-container">


                    <div className="content-container">
                        <p className="hello-text">
                            Hello, I'm
                        </p>

                        <p className="name-animation">
                            M. Zeeshan Haider
                        </p>

                        <div className="job-title">
                            <TypingAnimation />
                        </div>

                        <p className="briefing">
                            Strong expertise in front-end development and web design. delivering  high-quality, responsive, and user-friendly digital experiences.
                        </p>


                        <div className="btnContact">
                            <a href='#contact'>Contact Me <img src={arrow} /></a>
                        </div>


                    </div>

                    <div className="blob-image">
                        <img src={BlogImage} alt="profile image" />
                    </div>

                </div>

            </div>
        </>
    )
}