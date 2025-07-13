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
                            I specialize in building responsive, accessible, and high-performance web applications using the MERN stack and modern development tools.
                            <br />
                            I’m passionate about transforming real-world challenges into practical, impactful solutions through clean code, intuitive design, and robust development practices.
                        </p>

                        <button className="btnGetInTouch">
                            Get in Touch
                        </button>

                        <button className="btnResume">
                            Download CV
                        </button>
                    </div>

                    <div className="about-boxes">

                    </div>
                </div>
            </div>
        </>

    )
}