import '../styles/About.css'

export default function About() {
    return (
        <>
            <div className="about-section">

                <h1 className="heading">About Me</h1>

                <div className="about-container">


                    <div className="about-content">
                        <p className="role">
                            Passionate Web devloper
                        </p>

                        <p className="content">
                            I am a passionate and fast-learning MERN stack developer with a strong focus on front-end development using React. I thrive in collaborative environments, enjoy solving real-world problems with clean, efficient code, and strive to build user-friendly, performance-optimized web applications.

                            My goal is to continuously grow as a developer by working with innovative teams and companies that value quality, creativity, and continuous improvement. I’m particularly driven by the opportunity to transform complex challenges into intuitive, scalable solutions through modern development practices and thoughtful design.

                            Whether it’s enhancing UI/UX, integrating robust backend systems, or optimizing application performance, I am committed to delivering high-quality results that contribute real value. I’m always eager to learn new technologies, adapt to evolving industry trends, and make a meaningful impact wherever I work.


                        </p>

                        <button className="btnGetInTouch">
                            Get in Touch
                        </button>

                        <button className="btnResume">
                            Check Resume
                        </button>
                    </div>

                    <div className="about-boxes">

                    </div>
                </div>
            </div>
        </>

    )
}