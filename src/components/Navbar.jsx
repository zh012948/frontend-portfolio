import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    Zeeshan
                </div>

                <div className="navlinks">
                    <ul>

                        <li>
                            <a href="#">< i class='bxr  bx-home-circle' style={{ color: '#ffffff' }}></i>
                                <br />Home</a>
                        </li>

                        <li>
                            <a href="#">
                                < i class='bxr  bx-user-circle' style={{ color: '#ffffff' }}></i><br />
                                About</a>
                        </li>

                        <li>
                            <a href="#">
                                < i class='bxr  bx-file-detail' style={{ color: '#ffffff' }}></i><br />
                                Skills</a>
                        </li>

                        <li>
                            <a href="#">
                                < i class='bxr  bx-briefcase-alt-2' style={{ color: '#ffffff' }}></i><br />
                                Services</a>
                        </li>

                        <li>
                            <a href="#">
                                < i class='bxr  bx-image' style={{ color: '#ffffff' }}></i><br />
                                Portfolio</a>
                        </li>

                        <li>
                            <a href="#">
                                < i className='bxr  bx-send-alt-2' style={{ color: '#ffffff' }}></i><br />
                                Contact Me</a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}