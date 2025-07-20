// Contact.jsx
import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="contact-heading">
                    <h2>Contact Me</h2>
                    <p>Get in touch</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Work Together</h3>
                        <p>Feel free to reach out. I’m always open to discussing new projects or opportunities.</p>

                        <div className="contact-details">
                            <div className="detail">
                                <FaEnvelope className="icon" />
                                <span>m.zeeshan.haider.dev@gmail.com</span>
                            </div>
                            <div className="detail">
                                <FaPhone className="icon" />
                                <span>+92 344 6864785</span>
                            </div>
                            <div className="detail">
                                <FaMapMarkerAlt className="icon" />
                                <span>Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea rows="5" placeholder="Your Message" required />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
