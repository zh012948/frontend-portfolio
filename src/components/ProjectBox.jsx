import '../styles/ProjectBox.css'
import project1 from '../assets/projects/project1.png'

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
                        Built an image format converter web app using React, Node.js, Express and Sharp, featuring real-time image conversion, file upload with Multer, secure downloads, CORS integration and deployed on Render.
                    </div>

                    <div className="btnLive">
                        <button>View Live</button>
                    </div>
                </div>

            </div>
        </>
    )
}