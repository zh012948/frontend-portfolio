import { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hideNavbar, setHideNavbar] = useState(false);
    const canvasRef = useRef(null);
    const lastScrollY = useRef(0);

    const navbarHeight = 60; // adjust to match your CSS navbar height

    useEffect(() => {
        const canvas = canvasRef.current;
        let ctx;
        let stars = [];
        let animationFrameId;
        let gradient;

        function createGradient(width, height) {
            const g = ctx.createLinearGradient(0, 0, width, height);
            if (darkMode) {
                g.addColorStop(0, '#0a0c1f');
                g.addColorStop(0.5, '#191627');
                g.addColorStop(1, '#2c1a3d');
            } else {
                g.addColorStop(0, '#ffffff');
                g.addColorStop(1, '#f0f0f0');
            }
            return g;
        }

        function generateStars(num, width, height) {
            return Array.from({ length: num }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                alpha: Math.random() * 0.5 + 0.2,
            }));
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });
        }

        function twinkle() {
            stars.forEach((star) => {
                star.alpha = Math.random() * 0.5 + 0.2;
            });
        }

        function handleResize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight + navbarHeight;
            gradient = createGradient(canvas.width, canvas.height);
            stars = generateStars(200, canvas.width, canvas.height);
            drawStars();
        }

        function animateStars(timestamp) {
            if (!animateStars.lastTwinkleTime) animateStars.lastTwinkleTime = timestamp;
            const interval = 200;
            if (timestamp - animateStars.lastTwinkleTime > interval) {
                twinkle();
                animateStars.lastTwinkleTime = timestamp;
            }
            drawStars();
            animationFrameId = requestAnimationFrame(animateStars);
        }

        if (canvas) {
            ctx = canvas.getContext('2d');
            handleResize();
            window.addEventListener('resize', handleResize);
            animationFrameId = requestAnimationFrame(animateStars);
        }

        const textColor = darkMode ? '#ffffff' : '#000000';
        const bgColor = darkMode ? 'transparent' : '#ffffff';
        document.body.style.color = textColor;
        document.documentElement.style.backgroundColor = bgColor;
        document.body.style.backgroundColor = bgColor;
        document.body.classList.toggle('dark-mode', darkMode);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [darkMode]);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }
            lastScrollY.current = currentScrollY;
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarBg = darkMode ? 'rgba(25, 22, 39, 0.8)' : '#ffffff';
    const navlinksBg = darkMode ? 'rgba(25, 22, 39, 0.8)' : '#ffffff';
    const linkColor = darkMode ? '#ffffff' : '#191627';
    const hoverColor = '#6E57E0';

    const navItems = [
        { icon: 'bx-home-circle', label: 'Home', to: '#home' },
        { icon: 'bx-user-circle', label: 'About', to: '#about' },
        { icon: 'bx-file', label: 'Skills', to: '#skills' },
        { icon: 'bx-briefcase-alt-2', label: 'Services', to: '#services' },
        { icon: 'bx-image', label: 'Portfolio', to: '#portfolio' },
        { icon: 'bx-send', label: 'Contact Me', to: '#contact' },
    ];


    return (
        <>
            <canvas ref={canvasRef} className="star-canvas" />
            <div
                className={`navbar ${darkMode ? 'dark-mode' : ''} ${hideNavbar ? 'hidden' : ''}`}
                style={{
                    backgroundColor: navbarBg,
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    borderTop: darkMode ? '1px solid #444' : '1px solid #ccc',
                    height: `${navbarHeight}px`,
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
                        {navItems.map(({ icon, label, to }, index) => (
                            <li key={index}>
                                <a
                                    href={to}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => setMenuOpen(false)} // ✅ this closes the menu on click
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
