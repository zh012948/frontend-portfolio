import '../styles/SkillCard2.css'


export default function SkillCard2(props) {
    return (
        <>
            <div className="skill-card-container">

                <div className="top">

                    <div className='skill-icon-background'>
                        <img src={props.leftIcon} />
                    </div>

                    <p className="title">
                        {props.role}
                    </p>

                </div>


                <div className="bottom2">

                    <div className="skill-box">
                        <img src={props.skill1Icon} className='box-img' />
                        <p className="box-title">{props.skill1Text}</p>
                    </div>

                    <div className="skill-box ">
                        <img src={props.skill2Icon} className='box-img ' id='next-icon' />
                        <p className="box-title">{props.skill2Text}</p>
                    </div>

                    <div className="skill-box">
                        <img src={props.skill3Icon} className='box-img' />
                        <p className="box-title">{props.skill3Text}</p>
                    </div>


                    <div className="skill-box">
                        <img src={props.skill4Icon} className='box-img' />
                        <p className="box-title">{props.skill4Text}</p>
                    </div>


                </div>


            </div>
        </>
    )
}