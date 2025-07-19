import '../styles/SkillCard1.css'
import dev from '../assets/icons/dev.png'

export default function SkillCard1() {
    return (
        <>
            <div className="skill-card-container">

                <div className="top">

                    <div className='skill-icon-background'>
                        <img src={dev} />
                    </div>

                    <p className="title">
                        Frontend Development
                    </p>

                </div>


            </div>
        </>
    )
}