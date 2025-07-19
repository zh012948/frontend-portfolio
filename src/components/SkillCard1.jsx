import '../styles/SkillCard1.css'
import dev from '../assets/icons/dev.png'
import react from '../assets/icons/react.svg'
import next from '../assets/icons/next.png'
import ts from '../assets/icons/typescript.png'
import tailwind from '../assets/icons/tailwind.png'
import html from '../assets/icons/html-5.png'
import css from '../assets/icons/css-3.png'

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

                    <div className="skill-box ">
                        <img src={next} className='box-img ' id='next-icon' />
                        <p className="box-title">Next.js</p>
                    </div>

                    <div className="skill-box">
                        <img src={ts} className='box-img' />
                        <p className="box-title">TypeScript</p>
                    </div>


                    <div className="skill-box">
                        <img src={tailwind} className='box-img' />
                        <p className="box-title">Tailwind CSS</p>
                    </div>


                    <div className="skill-box">
                        <img src={html} className='box-img' />
                        <p className="box-title">HTML 5</p>
                    </div>

                    <div className="skill-box">
                        <img src={css} className='box-img' />
                        <p className="box-title">CSS 3</p>
                    </div>

                </div>


            </div>
        </>
    )
}