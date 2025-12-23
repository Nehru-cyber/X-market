import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { getCartCount } = useCart();
    const { getWishlistCount } = useWishlist();
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header-3d ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/store" className="logo">
                        <span className="logo-3d">X</span>-Market
                    </Link>

                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search products..." />
                        <button className="search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/store" className={`nav-link ${location.pathname === '/store' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>
                                Products <i className="fas fa-chevron-down"></i>
                            </Link>
                            <div className="dropdown-menu mega-menu">
                                <div className="mega-menu-content">
                                    <div className="mega-column">
                                        <h4>Electronics</h4>
                                        <Link to="/products?category=Electronics&sub=Smartphones" onClick={closeMobileMenu}>Smartphones</Link>
                                        <Link to="/products?category=Electronics&sub=Laptops" onClick={closeMobileMenu}>Laptops</Link>
                                        <Link to="/products?category=Electronics&sub=Audio" onClick={closeMobileMenu}>Audio</Link>
                                        <Link to="/products?category=Electronics&sub=Smartwatches" onClick={closeMobileMenu}>Smartwatches</Link>
                                    </div>
                                    <div className="mega-column">
                                        <h4>Fashion</h4>
                                        <Link to="/products?category=Fashion&sub=Men" onClick={closeMobileMenu}>Men's Wear</Link>
                                        <Link to="/products?category=Fashion&sub=Women" onClick={closeMobileMenu}>Women's Wear</Link>
                                        <Link to="/products?category=Fashion&sub=Footwear" onClick={closeMobileMenu}>Footwear</Link>
                                        <Link to="/products?category=Fashion&sub=Accessories" onClick={closeMobileMenu}>Accessories</Link>
                                    </div>
                                    <div className="mega-column">
                                        <h4>Home & Living</h4>
                                        <Link to="/products?category=Home" onClick={closeMobileMenu}>Furniture</Link>
                                        <Link to="/products?category=Home" onClick={closeMobileMenu}>Home Decor</Link>
                                        <Link to="/products?category=Home" onClick={closeMobileMenu}>Kitchen</Link>
                                        <Link to="/products?category=Home" onClick={closeMobileMenu}>Garden</Link>
                                    </div>
                                    <div className="mega-column">
                                        <h4>Sports & Outdoors</h4>
                                        <Link to="/products?category=Sports" onClick={closeMobileMenu}>Fitness</Link>
                                        <Link to="/products?category=Sports" onClick={closeMobileMenu}>Sports Equipment</Link>
                                        <Link to="/products?category=Sports" onClick={closeMobileMenu}>Outdoor Gear</Link>
                                        <Link to="/products?category=Sports" onClick={closeMobileMenu}>Cycling</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="nav-icons">
                        <Link to="/wishlist" className="icon-btn" title="Wishlist">
                            <i className="fas fa-heart"></i>
                            {getWishlistCount() > 0 && <span className="badge">{getWishlistCount()}</span>}
                        </Link>
                        <Link to="/cart" className="icon-btn" title="Cart">
                            <i className="fas fa-shopping-cart"></i>
                            {getCartCount() > 0 && <span className="badge cart-count">{getCartCount()}</span>}
                        </Link>
                        <div className="user-menu" onMouseEnter={() => setIsUserMenuOpen(true)} onMouseLeave={() => setIsUserMenuOpen(false)}>
                            <button className="icon-btn user-btn" title="Account">
                                <i className="fas fa-user"></i>
                            </button>
                            {isUserMenuOpen && (
                                <div className="user-dropdown">
                                    {isAuthenticated ? (
                                        <>
                                            <span className="user-greeting">Hello, {user?.name}</span>
                                            <Link to="/profile"><i className="fas fa-cog"></i> Settings</Link>
                                            <button onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                                            <Link to="/register"><i className="fas fa-user-plus"></i> Register</Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
