import '../styles/Skills.css'
import SkillCard1 from './SkillCard1'

export default function Skills() {
    return (
        <>
            <div className="skill-section">
                <h1 className="heading">My Skills</h1>

                <div className="skill-container">
                    <SkillCard1 />
                </div>
            </div>
        </>
    )
}