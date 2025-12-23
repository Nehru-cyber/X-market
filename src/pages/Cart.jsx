import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <Header />
                <main className="cart-empty">
                    <div className="empty-cart-content">
                        <i className="fas fa-shopping-cart"></i>
                        <h2>Your Cart is Empty</h2>
                        <p>Looks like you haven't added anything to your cart yet</p>
                        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="cart-page">
            <Header />
            <main className="cart-main">
                <div className="container">
                    <h1 className="page-title">Shopping Cart</h1>
                    <div className="cart-layout">
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="item-details">
                                        <Link to={`/product/${item.id}`} className="item-name">{item.name}</Link>
                                        <span className="item-brand">{item.brand}</span>
                                        <span className="item-price">${item.price.toLocaleString()}</span>
                                    </div>
                                    <div className="item-quantity">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div className="item-total">${(item.price * item.quantity).toLocaleString()}</div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            ))}
                            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
                        </div>
                        <div className="cart-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                            <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                            <div className="summary-row"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
                            <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                            <Link to="/checkout" className="btn btn-primary checkout-btn">Proceed to Checkout</Link>
                            <Link to="/products" className="continue-shopping">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
