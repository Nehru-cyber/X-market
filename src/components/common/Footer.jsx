import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3 className="footer-logo"><span>X</span>-Market</h3>
                            <p>Your premium destination for quality products with an immersive shopping experience.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/store">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Customer Service</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping Info</a></li>
                                <li><a href="#">Returns & Exchanges</a></li>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>My Account</h4>
                            <ul>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/cart">My Cart</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Info</h4>
                            <ul className="contact-info">
                                <li><i className="fas fa-map-marker-alt"></i> 123 Market Street, NY 10001</li>
                                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                                <li><i className="fas fa-envelope"></i> support@x-market.com</li>
                                <li><i className="fas fa-clock"></i> Mon-Fri: 9AM - 6PM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 X-Market. All Rights Reserved.</p>
                        <div className="payment-methods">
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-amex"></i>
                            <i className="fab fa-cc-paypal"></i>
                        </div>
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
