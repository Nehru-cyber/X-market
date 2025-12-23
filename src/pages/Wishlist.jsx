import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product, 1);
        removeFromWishlist(product.id);
    };

    if (wishlist.length === 0) {
        return (
            <div className="wishlist-page">
                <Header />
                <main className="wishlist-empty">
                    <div className="empty-content">
                        <i className="far fa-heart"></i>
                        <h2>Your Wishlist is Empty</h2>
                        <p>Save items you love to your wishlist to buy later</p>
                        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <Header />
            <main className="wishlist-main">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">My Wishlist ({wishlist.length})</h1>
                        <button className="clear-btn" onClick={clearWishlist}>Clear Wishlist</button>
                    </div>

                    <div className="wishlist-grid">
                        {wishlist.map(product => (
                            <div key={product.id} className="wishlist-item card-3d">
                                <Link to={`/product/${product.id}`} className="item-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.stock === 0 && <span className="out-of-stock">Out of Stock</span>}
                                </Link>
                                <div className="item-details">
                                    <Link to={`/product/${product.id}`} className="item-name">{product.name}</Link>
                                    <span className="item-price">${product.price.toLocaleString()}</span>
                                    <p className="item-stock">
                                        {product.stock > 0 ?
                                            <span className="in-stock"><i className="fas fa-check"></i> In Stock</span> :
                                            <span className="no-stock"><i className="fas fa-times"></i> Out of Stock</span>
                                        }
                                    </p>
                                </div>
                                <div className="item-actions">
                                    <button
                                        className="btn btn-primary add-btn"
                                        onClick={() => handleAddToCart(product)}
                                        disabled={product.stock === 0}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className="btn btn-secondary remove-btn"
                                        onClick={() => removeFromWishlist(product.id)}
                                        title="Remove from Wishlist"
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Wishlist;
