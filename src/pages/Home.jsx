import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/products/ProductCard';
import { productsData, getFeaturedProducts } from '../data/productsData';
import './Home.css';

const Home = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        filterProducts(activeTab);
    }, [activeTab]);

    useEffect(() => {
        // Countdown timer
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);

        const timer = setInterval(() => {
            const now = new Date();
            const diff = endDate - now;

            if (diff > 0) {
                setCountdown({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const filterProducts = (filter) => {
        let filtered;
        switch (filter) {
            case 'new':
                filtered = productsData.filter(p => p.badges?.includes('new'));
                break;
            case 'bestseller':
                filtered = productsData.filter(p => p.bestseller);
                break;
            case 'sale':
                filtered = productsData.filter(p => p.originalPrice !== null);
                break;
            default:
                filtered = getFeaturedProducts();
        }
        setDisplayedProducts(filtered.slice(0, 8));
    };

    const categories = [
        { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400', count: '500+' },
        { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400', count: '1000+' },
        { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400', count: '800+' },
        { name: 'Sports', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', count: '400+' },
        { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', count: '600+' },
        { name: 'Books', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400', count: '2000+' }
    ];

    return (
        <div className="home-page">
            <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-3d-background">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                        <div className="shape shape-5"></div>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="title-line">Welcome to</span>
                            <span className="title-line highlight">X-Market</span>
                        </h1>
                        <p className="hero-subtitle">Discover Premium Products with Immersive 3D Shopping Experience</p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary btn-3d">
                                <span>Shop Now</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <Link to="/products?filter=sale" className="btn btn-secondary btn-3d">
                                <span>View Deals</span>
                                <i className="fas fa-tags"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-3d-showcase">
                        <div className="product-carousel-3d">
                            <div className="product-card-3d">
                                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" alt="Smartphone" />
                                <div className="product-info">
                                    <h3>Premium Smartphone</h3>
                                    <p className="price">$999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card feature-3d">
                            <div className="feature-icon"><i className="fas fa-shipping-fast"></i></div>
                            <h3>Free Shipping</h3>
                            <p>Free shipping on orders over $50</p>
                        </div>
                        <div className="feature-card feature-3d">
                            <div className="feature-icon"><i className="fas fa-undo"></i></div>
                            <h3>Easy Returns</h3>
                            <p>30-day return policy</p>
                        </div>
                        <div className="feature-card feature-3d">
                            <div className="feature-icon"><i className="fas fa-headset"></i></div>
                            <h3>24/7 Support</h3>
                            <p>Round the clock assistance</p>
                        </div>
                        <div className="feature-card feature-3d">
                            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                            <h3>Secure Payment</h3>
                            <p>100% secure transactions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Explore our wide range of premium products</p>
                    </div>
                    <div className="categories-grid">
                        {categories.map((cat, index) => (
                            <Link key={index} to={`/products?category=${cat.name}`} className="category-card card-3d">
                                <div className="category-image">
                                    <img src={cat.image} alt={cat.name} />
                                </div>
                                <div className="category-overlay">
                                    <h3>{cat.name}</h3>
                                    <span>{cat.count} Products</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="products-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Products</h2>
                        <div className="product-tabs">
                            {['all', 'new', 'bestseller', 'sale'].map(tab => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab === 'all' ? 'All' :
                                        tab === 'new' ? 'New Arrivals' :
                                            tab === 'bestseller' ? 'Best Sellers' : 'On Sale'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="products-grid">
                        {displayedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="load-more">
                        <Link to="/products" className="btn btn-primary btn-3d">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* Deals Section */}
            <section className="deals-section">
                <div className="container">
                    <div className="deals-banner">
                        <div className="deals-content">
                            <span className="deals-label">Limited Time Offer</span>
                            <h2>Super Sale</h2>
                            <p>Up to 70% Off on Selected Items</p>
                            <div className="countdown">
                                <div className="countdown-item">
                                    <span className="countdown-value">{String(countdown.days).padStart(2, '0')}</span>
                                    <span className="countdown-label">Days</span>
                                </div>
                                <div className="countdown-item">
                                    <span className="countdown-value">{String(countdown.hours).padStart(2, '0')}</span>
                                    <span className="countdown-label">Hours</span>
                                </div>
                                <div className="countdown-item">
                                    <span className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</span>
                                    <span className="countdown-label">Minutes</span>
                                </div>
                                <div className="countdown-item">
                                    <span className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</span>
                                    <span className="countdown-label">Seconds</span>
                                </div>
                            </div>
                            <Link to="/products?filter=sale" className="btn btn-primary btn-3d">Shop Deals</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section">
                <div className="container">
                    <div className="newsletter-content">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Get exclusive deals, new arrivals, and special offers delivered to your inbox</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit" className="btn btn-primary btn-3d">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
