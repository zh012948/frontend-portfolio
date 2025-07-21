import '../styles/Portfolio.css'
import ProjectBox from './ProjectBox'

import img1 from '/projects/project1.PNG'

export default function Portfolio() {

    return (
        <>
            <div className="project-section">
                <h1 className='heading'>Portfolio</h1>

                <div className="project-container">
                    <ProjectBox
                        image={img1}

                    />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />

                </div>
            </div>
        </>
    )
}