import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const bgColor = darkMode ? '#191627' : '#ffffff';
        const textColor = darkMode ? '#ffffff' : '#6E57E0';

        document.documentElement.style.backgroundColor = bgColor; // html
        document.body.style.backgroundColor = bgColor; // body
        document.body.style.color = textColor;

        // Optional: smooth transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        document.documentElement.style.transition = 'background-color 0.3s ease';
    }, [darkMode]);

    // Background colors for navbar and navlinks based on theme
    const navbarBg = darkMode ? '#191627' : '#ffffff';
    const navlinksBg = darkMode ? '#2c2a48' : '#f0f0f0';

    return (
        <div className="navbar" style={{ backgroundColor: navbarBg, transition: 'background-color 0.3s ease' }}>
            <div className="logo">Zeeshan</div>

            <div
                className={`navlinks ${menuOpen ? 'active' : ''}`}
                style={{ backgroundColor: navlinksBg, transition: 'background-color 0.3s ease' }}
            >
                <ul>
                    <li><a href="#"><i className='bx bx-home-circle'></i><br />Home</a></li>
                    <li><a href="#"><i className='bx bx-user-circle'></i><br />About</a></li>
                    <li><a href="#"><i className='bx bx-file'></i><br />Skills</a></li>
                    <li><a href="#"><i className='bx bx-briefcase-alt-2'></i><br />Services</a></li>
                    <li><a href="#"><i className='bx bx-image'></i><br />Portfolio</a></li>
                    <li><a href="#"><i className='bx bx-send'></i><br />Contact Me</a></li>
                </ul>
            </div>

            <div className="icons">
                <div className="display-mode" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <i className='bx bx-moon' style={{ color: '#ffffff' }}></i>
                    ) : (
                        <i className='bx bxs-sun' style={{ color: '#6E57E0' }}></i>
                    )}
                </div>

                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`bx ${menuOpen ? 'bx-x' : 'bx-grid'}`}></i>
                </div>
            </div>
        </div>
    );
}
