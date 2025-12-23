import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Create floating particles
        const container = document.getElementById('particles');
        if (container) {
            const count = window.innerWidth < 768 ? 15 : 25;
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                container.appendChild(particle);
            }
        }
    }, []);

    const enterSite = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            navigate('/store');
        }, 600);
    };

    return (
        <div className="landing-page">
            {/* Background */}
            <div className="landing-background">
                <div className="particles" id="particles"></div>
            </div>

            {/* Main Landing Content */}
            <div className="landing-container">
                {/* 3D X Logo */}
                <div className="x-logo-container">
                    <div className="x-logo">
                        <div className="x-bar x-bar-1"></div>
                        <div className="x-bar x-bar-2"></div>
                    </div>
                </div>

                {/* Brand Name */}
                <div className="brand-text">
                    <h1 className="brand-name">X-MARKET</h1>
                </div>

                {/* Tagline */}
                <p className="tagline">Where You Can Find <span>More Products</span></p>

                {/* Product showcase text */}
                <p className="product-text">
                    Discover a premium 3D shopping experience with thousands of products,
                    exclusive deals, and seamless checkout.
                </p>

                {/* Enter Button */}
                <button className="enter-btn" onClick={enterSite}>
                    Enter Store
                </button>
            </div>

            {/* Signature */}
            <div className="signature">
                Created by <span>NP</span>
            </div>

            {/* Page Transition */}
            <div className={`page-transition ${isTransitioning ? 'active' : ''}`}>
                <div className="transition-x">
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
