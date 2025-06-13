import '../styles/HeroSection.css'
import linkedin from '../assets/images/linkedin.png'
import instagram from '../assets/images/instagram.png'
import github from '../assets/images/github.png'
import BlobImage from '../components/BlobImage'

export default function HeroSection() {
    return (
        <>
            <div className="hero-container">

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/m-zeeshan-haider-606bb3284/" target='blank'><img src={linkedin} alt='linkedin' title='linkedin profile' /></a>
                    <a href="https://github.com/zh012948/" target='blank'><img src={github} alt='github' title='github profile' /></a>
                    <a href="https://www.instagram.com/zh012948" target='blank'><img src={instagram} alt='instagram' title='instagram profile' /></a>

                </div>

                <div className="content-container">

                </div>

                <div className="blob-image">
                    <BlobImage />
                </div>
            </div>
        </>
    )
}