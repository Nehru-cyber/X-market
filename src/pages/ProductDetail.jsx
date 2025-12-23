import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductById } from '../data/productsData';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    if (!product) {
        return (
            <div className="product-detail-page">
                <Header />
                <main className="product-not-found">
                    <h1>Product Not Found</h1>
                    <Link to="/products" className="btn btn-primary">Back to Products</Link>
                </main>
                <Footer />
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const generateStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        for (let i = 0; i < fullStars; i++) stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
        if (hasHalfStar) stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        for (let i = stars.length; i < 5; i++) stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        return stars;
    };

    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    return (
        <div className="product-detail-page">
            <Header />
            <main className="product-detail-main">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/store">Home</Link>
                        <i className="fas fa-chevron-right"></i>
                        <Link to="/products">Products</Link>
                        <i className="fas fa-chevron-right"></i>
                        <span>{product.name}</span>
                    </nav>

                    <div className="product-detail-content">
                        <div className="product-images">
                            <div className="main-image">
                                <img src={product.image} alt={product.name} />
                                {discount > 0 && <span className="discount-badge">-{discount}%</span>}
                            </div>
                        </div>

                        <div className="product-info">
                            <span className="product-brand">{product.brand}</span>
                            <h1 className="product-name">{product.name}</h1>

                            <div className="product-rating">
                                <div className="stars">{generateStars(product.rating)}</div>
                                <span className="rating-text">{product.rating}</span>
                                <span className="reviews">({product.reviews.toLocaleString()} reviews)</span>
                            </div>

                            <div className="product-price">
                                <span className="current-price">${product.price.toLocaleString()}</span>
                                {product.originalPrice && (
                                    <span className="original-price">${product.originalPrice.toLocaleString()}</span>
                                )}
                            </div>

                            <p className="product-description">{product.description}</p>

                            {product.colors && product.colors.length > 0 && (
                                <div className="product-colors">
                                    <h4>Colors</h4>
                                    <div className="color-options">
                                        {product.colors.map((color, i) => (
                                            <button key={i} className="color-btn" style={{ backgroundColor: color }}></button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {product.sizes && product.sizes.length > 0 && (
                                <div className="product-sizes">
                                    <h4>Size</h4>
                                    <div className="size-options">
                                        {product.sizes.map((size, i) => (
                                            <button key={i} className="size-btn">{size}</button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="product-quantity">
                                <h4>Quantity</h4>
                                <div className="quantity-selector">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                            </div>

                            <div className="product-actions">
                                <button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
                                    <i className="fas fa-shopping-cart"></i>
                                    Add to Cart
                                </button>
                                <button
                                    className={`btn btn-secondary wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                                    onClick={() => toggleWishlist(product)}
                                >
                                    <i className={isInWishlist(product.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                                </button>
                            </div>

                            <div className="product-meta">
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Availability:</strong> {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
