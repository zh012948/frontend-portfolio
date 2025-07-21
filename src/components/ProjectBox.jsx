import '../styles/ProjectBox.css'
import project1 from '/projects/project1.PNG'

export default function ProjectBox() {
    return (
        <>
            <div className="container">
                <div className="upper">
                    <img src={project1} alt="project1" className="project-img" />

                    <div className="skill-list">

                        <div className="lang">
                            React Js
                        </div>

                        <div className="lang">
                            Node Js
                        </div>

                        <div className="lang">
                            CSS
                        </div>


                        <div className="lang">
                            Render
                        </div>

                        <div className="lang">
                            Sharp
                        </div>

                        <div className="lang">
                            Sharp
                        </div>

                        <div className="lang">
                            Sharp
                        </div>

                        <div className="lang">
                            Sharp
                        </div>

                    </div>
                </div>


                <div className="lower">

                    <div className="project-title">
                        Image Format Converter
                    </div>

                    <div className="project-description">
                        Built a web app for image format conversion with real-time processing, secure file upload, downloads, and error handling.
                    </div>

                    <div className="btnLive">
                        <button>View Live</button>
                    </div>
                </div>

            </div>
        </>
    )
}