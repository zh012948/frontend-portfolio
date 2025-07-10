import { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        // Set body styles
        const textColor = darkMode ? '#ffffff' : '#000000';
        document.body.style.color = textColor;
        document.body.style.transition = 'color 0.3s ease';
        document.documentElement.style.backgroundColor = darkMode ? 'transparent' : '#ffffff';
        document.body.style.backgroundColor = darkMode ? 'transparent' : '#ffffff';

        // Toggle dark-mode class
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Canvas star effect for dark mode
        if (darkMode && canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.style.display = 'block';
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw gradient background on canvas
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0c1f');
            gradient.addColorStop(0.5, '#191627');
            gradient.addColorStop(1, '#2c1a3d');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Resize canvas on window resize
            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                drawStars();
            };
            window.addEventListener('resize', handleResize);

            // Generate stars
            const stars = [];
            const numStars = 200;
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random() * 0.5 + 0.2,
                });
            }

            // Twinkle animation
            function twinkle() {
                stars.forEach(star => {
                    star.alpha = Math.random() * 0.5 + 0.2;
                });
            }

            // Draw stars
            function drawStars() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                stars.forEach(star => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                    ctx.fill();
                });
            }

            // Animate stars
            let animationFrameId;
            function animateStars() {
                twinkle();
                drawStars();
                animationFrameId = requestAnimationFrame(animateStars);
            }
            animateStars();

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationFrameId);
            };
        } else if (canvasRef.current) {
            // Hide canvas in light mode
            canvasRef.current.style.display = 'none';
        }
    }, [darkMode]);

    const navbarBg = darkMode ? 'rgba(25, 22, 39, 0.8)' : '#ffffff';
    const navlinksBg = darkMode ? 'rgba(25, 22, 39, 0.8)' : '#ffffff';
    const linkColor = darkMode ? '#ffffff' : '#191627';
    const hoverColor = darkMode ? '#6E57E0' : '#6E57E0';

    const navItems = [
        { icon: 'bx-home-circle', label: 'Home' },
        { icon: 'bx-user-circle', label: 'About' },
        { icon: 'bx-file', label: 'Skills' },
        { icon: 'bx-briefcase-alt-2', label: 'Services' },
        { icon: 'bx-image', label: 'Portfolio' },
        { icon: 'bx-send', label: 'Contact Me' },
    ];

    return (
        <>
            <canvas ref={canvasRef} className="star-canvas" />
            <div
                className={`navbar ${darkMode ? 'dark-mode' : ''}`}
                style={{
                    backgroundColor: navbarBg,
                    transition: 'background-color 0.3s ease',
                    borderBottom: darkMode ? '1px solid #444' : '1px solid #ccc',
                }}
            >
                <div className="logo">Zeeshan</div>

                <div
                    className={`navlinks ${menuOpen ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}
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
                                        color: hoveredIndex === index ? hoverColor : linkColor,
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                >
                                    <i
                                        className={`bx ${icon}`}
                                        style={{
                                            fontSize: 24,
                                            color: hoveredIndex === index ? hoverColor : linkColor,
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
        </>
    );
}