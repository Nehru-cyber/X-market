import { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        // Simulate sending email
        setTimeout(() => setSent(false), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            <Header />
            <main className="contact-main">
                <section className="contact-hero">
                    <div className="container">
                        <h1>Get in Touch</h1>
                        <p>Have questions? We'd love to hear from you.</p>
                    </div>
                </section>

                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info-card card-3d">
                            <h2>Contact Information</h2>
                            <p>Fill up the form and our team will get back to you within 24 hours.</p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                    <div className="text">
                                        <h3>Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon"><i className="fas fa-envelope"></i></div>
                                    <div className="text">
                                        <h3>Email</h3>
                                        <p>support@x-market.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                    <div className="text">
                                        <h3>Address</h3>
                                        <p>123 Market Street, New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-connect">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <form className="contact-form card-3d" onSubmit={handleSubmit}>
                            {sent && <div className="success-message"><i className="fas fa-check-circle"></i> Message Sent Successfully!</div>}

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text" name="name" value={formData.name}
                                        onChange={handleChange} placeholder="Your Name" required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email" name="email" value={formData.email}
                                        onChange={handleChange} placeholder="Your Email" required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text" name="subject" value={formData.subject}
                                    onChange={handleChange} placeholder="Message Subject" required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleChange}
                                    placeholder="Write your message here..." rows="5" required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary send-btn">
                                Send Message <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
