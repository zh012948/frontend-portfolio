import '../styles/SkillCard1.css'
import dev from '../assets/icons/dev.png'
import react from '../assets/icons/react.svg'
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


                <div className="bottom">

                    <div className="skill-box">

                        <img src={react} className='box-img' />
                        <p className="box-title">React</p>

                    </div>
                </div>


            </div>
        </>
    )
}