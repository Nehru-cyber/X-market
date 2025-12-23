import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
    };

    const generateStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
        }
        if (hasHalfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        }
        return stars;
    };

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    return (
        <div className="product-card card-3d">
            <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    {product.badges && product.badges.length > 0 && (
                        <div className="product-badges">
                            {product.badges.map(badge => (
                                <span key={badge} className={`badge badge-${badge}`}>
                                    {badge === 'new' ? 'New' :
                                        badge === 'hot' ? 'Hot' :
                                            badge === 'sale' ? `${discount}% OFF` :
                                                badge === 'bestseller' ? 'Best' : badge}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="product-actions">
                        <button
                            className={`action-btn wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                            onClick={handleToggleWishlist}
                            title={isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        >
                            <i className={isInWishlist(product.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                        </button>
                        <Link to={`/product/${product.id}`} className="action-btn quick-view-btn" title="Quick View">
                            <i className="fas fa-eye"></i>
                        </Link>
                    </div>
                </div>
                <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                        <div className="stars">{generateStars(product.rating)}</div>
                        <span className="reviews">({product.reviews.toLocaleString()})</span>
                    </div>
                    <div className="product-price">
                        <span className="current-price">${product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                            <span className="original-price">${product.originalPrice.toLocaleString()}</span>
                        )}
                    </div>
                </div>
            </Link>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default ProductCard;
