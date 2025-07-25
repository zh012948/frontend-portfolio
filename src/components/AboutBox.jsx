import '../styles/AboutBox.css'


export default function AboutBox(props) {
    return (
        <>
            <div className="box-container">

                <div className="side-image">
                    <img src={props.image} />
                </div>

                <div className="box-content">

                    <div className="title">
                        {props.title}
                    </div>

                    <div className="content">
                        {props.description}
                    </div>

                </div>
            </div>
        </>
    )

}