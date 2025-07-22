import '../styles/About.css'
import AboutBox from './AboutBox'
import html from '../assets/images/html.png'
import briefcase from '../assets/images/briefcase.png'
import user from '../assets/images/user.png'


export default function About() {
    return (
        <>
            <div className="about-section">

                <h1 className="heading">About Me</h1>

                <div className="about-container">


                    <div className="about-content">
                        <p className="role">
                            Passionate Web developer
                        </p>

                        <p className="content">
                            I am a passionate and fast-learning MERN stack developer with a strong focus on front-end development using React. I thrive in collaborative environments, enjoy solving real-world problems with clean, efficient code, and strive to build user-friendly, performance-optimized web applications.

                            My goal is to continuously grow as a developer by working with innovative teams and companies that value quality, creativity, and continuous improvement. I’m particularly driven by the opportunity to transform complex challenges into intuitive, scalable solutions through modern development practices and thoughtful design.

                            Whether it’s enhancing UI/UX, integrating robust backend systems, or optimizing application performance, I am committed to delivering high-quality results that contribute real value. I’m always eager to learn new technologies, adapt to evolving industry trends, and make a meaningful impact wherever I work.


                        </p>

                        <button className="btnGetInTouch">
                            Get in Touch
                        </button>

                        <a
                            className="btnResume"
                            href="/assets/Muhammad_Zeeshan_Haider_Resume.pdf"
                            download="Muhammad_Zeeshan_Haider_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Resume
                        </a>

                    </div>

                    <div className="about-boxes">
                        <AboutBox
                            image={html}
                            title="Web Developement"
                            description="Developing modern, full-stack web applications with a focus on performance, scalability, and user accessibility."
                        />

                        <AboutBox
                            image={briefcase}
                            title="UI/UX Design"
                            description="Crafting clean, user-centered interfaces that balance aesthetics with usability to deliver smooth user experiences."
                        />

                        <AboutBox
                            image={user}
                            title="Project Management"
                            description="Managing and delivering end-to-end solutions using agile workflows, from ideation and design to deployment and iteration."
                        />
                    </div>
                </div>
            </div>
        </>

    )
}