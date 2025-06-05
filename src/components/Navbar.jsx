import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">Zeeshan</div>

            {/* Nav Links Section */}
            <div className={`navlinks ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#"><i className='bx bx-home-circle'></i><br />Home</a></li>
                    <li><a href="#"><i className='bx bx-user-circle'></i><br />About</a></li>
                    <li><a href="#"><i className='bx bx-file'></i><br />Skills</a></li>
                    <li><a href="#"><i className='bx bx-briefcase-alt-2'></i><br />Services</a></li>
                    <li><a href="#"><i className='bx bx-image'></i><br />Portfolio</a></li>
                    <li><a href="#"><i className='bx bx-send'></i><br />Contact Me</a></li>
                </ul>


            </div>

            {/* Top Right Icons */}
            <div className="icons">
                <div className="display-mode">
                    <i className='bx bx-moon'></i>
                </div>

                {/* Menu Icon Toggle */}
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`bx ${menuOpen ? 'bx-x' : 'bx-grid'}`}></i>
                </div>
            </div>
        </div>
    );
}
