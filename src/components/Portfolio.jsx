import '../styles/Portfolio.css'
import ProjectBox from './ProjectBox'

export default function Portfolio() {

    return (
        <>
            <div className="project-section">
                <h1 className='heading'>Portfolio</h1>


                <div className="project-container">
                    <ProjectBox />

                </div>
            </div>
        </>
    )
}