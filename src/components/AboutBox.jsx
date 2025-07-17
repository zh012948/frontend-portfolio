import '../styles/AboutBox.css'
import html from '../assets/images/html.png'


export default function AboutBox(props) {
    return (
        <>
            <div className="box-container">

                <div className="side-image">
                    <img src={props.image} />
                </div>

                <div className="box-content">

                    <div className="title">
                        Web Developement
                    </div>

                    <div className="content">
                        Developing modern, full-stack web applications with a focus on performance, scalability, and user accessibility.
                    </div>

                </div>
            </div>
        </>
    )

}