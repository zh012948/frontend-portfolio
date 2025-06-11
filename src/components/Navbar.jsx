import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hover

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
    const navlinksBg = darkMode ? '#191627' : '#ffffff';
    const linkColor = darkMode ? '#ffffff' : '#191627';
    const hoverColor = darkMode ? '#6E57E0' : '#6E57E0';

    const navItems = [
        { icon: 'bx-home-circle', label: 'Home' },
        { icon: 'bx-user-circle', label: 'About' },
        { icon: 'bx-file', label: 'Skills' },
        { icon: 'bx-briefcase-alt-2', label: 'Services' },
        { icon: 'bx-image', label: 'Portfolio' },
        { icon: 'bx-send', label: 'Contact Me' }
    ];

    return (
        <div className="navbar" style={{
            backgroundColor: navbarBg, transition: 'background-color 0.3s ease', borderBottom: darkMode ? '1px solid #444' : '1px solid #ccc'
        }}>

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
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    color:
                                        hoveredIndex === index
                                            ? hoverColor
                                            : linkColor,
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                <i
                                    className={`bx ${icon}`}
                                    style={{
                                        fontSize: 24,
                                        color:
                                            hoveredIndex === index
                                                ? hoverColor
                                                : linkColor,
                                        transition: 'color 0.2s ease',
                                    }}
                                ></i>
                                <br />
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
