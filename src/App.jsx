import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';

const GlobalParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const count = window.innerWidth < 768 ? 50 : 150;
        const newParticles = [];
        for (let i = 0; i < count; i++) {
            newParticles.push({
                id: i,
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 8 + 's',
                animationDuration: (Math.random() * 4 + 6) + 's',
                isBlack: Math.random() > 0.5
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="page-animations">
            {particles.map(p => (
                <div 
                    key={p.id} 
                    className={`global-particle ${p.isBlack ? 'particle-black' : 'particle-white'}`}
                    style={{
                        left: p.left,
                        animationDelay: p.animationDelay,
                        animationDuration: p.animationDuration
                    }}
                ></div>
            ))}
        </div>
    );
};

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <WishlistProvider>
                    <Router>
                        {/* Global Background Animations */}
                        <GlobalParticles />
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/store" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Router>
                </WishlistProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
