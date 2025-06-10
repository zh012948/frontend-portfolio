import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const bgColor = darkMode ? '#191627' : '#ffffff';
        const textColor = darkMode ? '#ffffff' : '#6E57E0';

        document.documentElement.style.backgroundColor = bgColor;
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;

        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        document.documentElement.style.transition = 'background-color 0.3s ease';
    }, [darkMode]);

    const navbarBg = darkMode ? '#191627' : '#ffffff';
    const navlinksBg = darkMode ? '#2c2a48' : '#f0f0f0';
    const linkColor = darkMode ? '#ffffff' : '#191627';

    const navItems = [
        { icon: 'bx-home-circle', label: 'Home' },
        { icon: 'bx-user-circle', label: 'About' },
        { icon: 'bx-file', label: 'Skills' },
        { icon: 'bx-briefcase-alt-2', label: 'Services' },
        { icon: 'bx-image', label: 'Portfolio' },
        { icon: 'bx-send', label: 'Contact Me' }
    ];

    return (
        <div
            className="navbar"
            style={{ backgroundColor: navbarBg, transition: 'background-color 0.3s ease' }}
        >
            <div className="logo">Zeeshan</div>

            <div
                className={`navlinks ${menuOpen ? 'active' : ''}`}
                style={{
                    backgroundColor: navlinksBg,
                    transition: 'background-color 0.3s ease',
                }}
            >
                <ul>
                    {navItems.map(({ icon, label }, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                style={{
                                    color: linkColor,
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                <i className={`bx ${icon}`} style={{ fontSize: 24 }}></i><br />
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="icons">
                <div className="display-mode" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <i className="bx bx-moon" style={{ color: '#ffffff' }}></i>
                    ) : (
                        <i className="bx bxs-sun" style={{ color: '#6E57E0' }}></i>
                    )}
                </div>

                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`bx ${menuOpen ? 'bx-x' : 'bx-grid'}`}></i>
                </div>
            </div>
        </div>
    );
}
