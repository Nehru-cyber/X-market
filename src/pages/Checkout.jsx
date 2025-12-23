import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
        clearCart();
        setTimeout(() => navigate('/store'), 3000);
    };

    if (orderPlaced) {
        return (
            <div className="checkout-page">
                <Header />
                <main className="order-success">
                    <div className="success-content">
                        <i className="fas fa-check-circle"></i>
                        <h2>Order Placed Successfully!</h2>
                        <p>Thank you for your purchase. Redirecting to home...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="checkout-page">
                <Header />
                <main className="cart-empty"><div className="empty-cart-content">
                    <h2>Your cart is empty</h2>
                    <Link to="/products" className="btn btn-primary">Shop Now</Link>
                </div></main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <Header />
            <main className="checkout-main">
                <div className="container">
                    <h1 className="page-title">Checkout</h1>
                    <div className="checkout-steps">
                        <div className={`step ${step >= 1 ? 'active' : ''}`}><span>1</span> Shipping</div>
                        <div className={`step ${step >= 2 ? 'active' : ''}`}><span>2</span> Payment</div>
                        <div className={`step ${step >= 3 ? 'active' : ''}`}><span>3</span> Review</div>
                    </div>
                    <div className="checkout-layout">
                        <form className="checkout-form" onSubmit={handleSubmit}>
                            {step === 1 && (
                                <div className="form-section">
                                    <h2>Shipping Address</h2>
                                    <div className="form-row">
                                        <input type="text" placeholder="First Name" required />
                                        <input type="text" placeholder="Last Name" required />
                                    </div>
                                    <input type="email" placeholder="Email" required />
                                    <input type="tel" placeholder="Phone" required />
                                    <input type="text" placeholder="Address" required />
                                    <div className="form-row">
                                        <input type="text" placeholder="City" required />
                                        <input type="text" placeholder="State" required />
                                        <input type="text" placeholder="ZIP Code" required />
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>Continue to Payment</button>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="form-section">
                                    <h2>Payment Method</h2>
                                    <div className="payment-methods">
                                        <label className="payment-option"><input type="radio" name="payment" defaultChecked /><span><i className="fas fa-credit-card"></i> Credit Card</span></label>
                                        <label className="payment-option"><input type="radio" name="payment" /><span><i className="fab fa-paypal"></i> PayPal</span></label>
                                    </div>
                                    <input type="text" placeholder="Card Number" />
                                    <div className="form-row">
                                        <input type="text" placeholder="MM/YY" />
                                        <input type="text" placeholder="CVV" />
                                    </div>
                                    <input type="text" placeholder="Cardholder Name" />
                                    <div className="form-buttons">
                                        <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
                                        <button type="button" className="btn btn-primary" onClick={() => setStep(3)}>Review Order</button>
                                    </div>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="form-section">
                                    <h2>Review Your Order</h2>
                                    <div className="review-items">
                                        {cart.map(item => (
                                            <div key={item.id} className="review-item">
                                                <img src={item.image} alt={item.name} />
                                                <div><h4>{item.name}</h4><p>Qty: {item.quantity}</p></div>
                                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="form-buttons">
                                        <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>Back</button>
                                        <button type="submit" className="btn btn-primary">Place Order</button>
                                    </div>
                                </div>
                            )}
                        </form>
                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                            <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                            <div className="summary-row"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                            <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Checkout;
