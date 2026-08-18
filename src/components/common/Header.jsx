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
        <>
        <header className={`header-3d ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/store" className="logo">
                        <span className="logo-3d">Cat-z</span>
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
                                        <h4>Men's Wear</h4>
                                        <Link to="/products?category=Fashion&sub=T-Shirts" onClick={closeMobileMenu}>T-Shirts</Link>
                                        <Link to="/products?category=Fashion&sub=Pants" onClick={closeMobileMenu}>Pants</Link>
                                        <Link to="/products?category=Fashion&sub=Hoodies" onClick={closeMobileMenu}>Hoodies</Link>
                                        <Link to="/products?category=Fashion&sub=Sweatshirts" onClick={closeMobileMenu}>Sweatshirts</Link>
                                    </div>
                                    <div className="mega-column">
                                        <h4>Women's Wear</h4>
                                        <Link to="/products?category=Fashion&sub=Tights" onClick={closeMobileMenu}>Tights</Link>
                                        <Link to="/products?category=Fashion&sub=T-Shirts" onClick={closeMobileMenu}>T-Shirts</Link>
                                        <Link to="/products?category=Fashion&sub=Hoodies" onClick={closeMobileMenu}>Hoodies</Link>
                                        <Link to="/products?category=Fashion&sub=Pants" onClick={closeMobileMenu}>Pants</Link>
                                    </div>
                                    <div className="mega-column">
                                        <h4>Accessories</h4>
                                        <Link to="/products?category=Fashion&sub=Socks" onClick={closeMobileMenu}>Socks</Link>
                                        <Link to="/products?category=Fashion&sub=Caps" onClick={closeMobileMenu}>Caps</Link>
                                        <Link to="/products?category=Fashion&sub=Bags" onClick={closeMobileMenu}>Bags</Link>
                                    </div>
                                    <div className="mega-column">
                                        <h4>Collections</h4>
                                        <Link to="/products?filter=new" onClick={closeMobileMenu}>New Arrivals</Link>
                                        <Link to="/products?filter=bestseller" onClick={closeMobileMenu}>Best Sellers</Link>
                                        <Link to="/products?filter=sale" onClick={closeMobileMenu}>On Sale</Link>
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

        {/* Mobile Bottom Navigation */}
        <div className="mobile-bottom-nav">
            <Link to="/store" className={`mobile-nav-btn ${location.pathname === '/store' ? 'active' : ''}`} onClick={closeMobileMenu}>
                <i className="fas fa-home"></i>
                <span>Home</span>
            </Link>
            <Link to="/cart" className={`mobile-nav-btn ${location.pathname === '/cart' ? 'active' : ''}`} onClick={closeMobileMenu}>
                <div className="mobile-icon-wrapper">
                    <i className="fas fa-shopping-cart"></i>
                    {getCartCount() > 0 && <span className="mobile-badge">{getCartCount()}</span>}
                </div>
                <span>Cart</span>
            </Link>
            <Link to={isAuthenticated ? "/profile" : "/login"} className={`mobile-nav-btn ${location.pathname === '/profile' || location.pathname === '/login' ? 'active' : ''}`} onClick={closeMobileMenu}>
                <i className="fas fa-user"></i>
                <span>Profile</span>
            </Link>
            <button className={`mobile-nav-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                <span>Menu</span>
            </button>
        </div>
        </>
    );
};

export default Header;
