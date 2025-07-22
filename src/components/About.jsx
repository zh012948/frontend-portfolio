import '../styles/About.css'
import AboutBox from './AboutBox'
import html from '../assets/images/html.webp'
import briefcase from '../assets/images/briefcase.webp'
import user from '../assets/images/user.webp'


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
                            I'm a fast-learning MERN stack developer with a strong focus on front-end development using React. I thrive in collaborative environments and love solving real-world problems through clean, efficient, and scalable code.

                            I aim to build user-friendly, performance-optimized web applications that balance great UI/UX with modern development best practices.

                            Whether it’s enhancing user interfaces, integrating backends, or improving performance, I’m committed to delivering high-quality results that make a difference. I'm always learning, adapting, and pushing myself to grow.
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