import '../styles/ProjectBox.css';

export default function ProjectBox(props) {
    return (
        <>
            <div className="container">
                <div className="upper">
                    <img src={props.image} alt="project" className="project-img" />

                    <div className="skill-list">
                        {props.skills && props.skills.map((skill, index) => (
                            <div className="lang" key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lower">
                    <div className="project-title">
                        {props.title}
                    </div>

                    <div className="project-description">
                        {props.description}
                    </div>

                    {props.link && (
                        <div className="btnLive">
                            <a href={props.link} target="_blank" rel="noopener noreferrer">
                                <button>View Live</button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
