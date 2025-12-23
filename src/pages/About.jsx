import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './About.css';
import nehruProfile from '../assets/nehru-profile.png';

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <main className="about-main">
                {/* About Hero */}
                <section className="about-hero">
                    <div className="container">
                        <div className="about-hero-content">
                            <h1>About X-Market</h1>
                            <p>Revolutionizing the online shopping experience with immersive technology and premium products.</p>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="about-content">
                    <div className="container">
                        <div className="story-grid">
                            <div className="story-image card-3d">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" alt="Our Team" />
                            </div>
                            <div className="story-text">
                                <h2>Our Story</h2>
                                <p>Founded in 2024, X-Market started with a simple vision: to bridge the gap between digital convenience and physical retail experience. We believe that shopping online shouldn't just be about utility—it should be an experience.</p>
                                <p>Our team of passionate developers, designers, and retail experts worked together to create a platform that uses modern web technologies to bring products to life right on your screen.</p>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <h3>10K+</h3>
                                        <p>Happy Customers</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>5K+</h3>
                                        <p>Premium Products</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>24/7</h3>
                                        <p>Expert Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="values-section">
                    <div className="container">
                        <h2 className="section-title text-center">Our Core Values</h2>
                        <div className="values-grid">
                            <div className="value-card card-3d">
                                <div className="value-icon"><i className="fas fa-gem"></i></div>
                                <h3>Quality First</h3>
                                <p>We curate only the finest products that meet our strict quality standards.</p>
                            </div>
                            <div className="value-card card-3d">
                                <div className="value-icon"><i className="fas fa-user-shield"></i></div>
                                <h3>Customer Trust</h3>
                                <p>Your security and satisfaction are paramount in everything we do.</p>
                            </div>
                            <div className="value-card card-3d">
                                <div className="value-icon"><i className="fas fa-rocket"></i></div>
                                <h3>Innovation</h3>
                                <p>Constantly pushing boundaries to provide the best shopping experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="team-section">
                    <div className="container">
                        <h2 className="section-title text-center">Meet the Team</h2>
                        <div className="team-grid">
                            <div className="team-card card-3d">
                                <div className="team-image">
                                    <img src={nehruProfile} alt="Nehru Prasad" />
                                </div>
                                <div className="team-info">
                                    <h3>Nehru Prasad</h3>
                                    <p>Co-Founder & CEO</p>
                                    <p className="team-bio">The visionary behind X-Market, dedicated to creating the ultimate shopping experience.</p>
                                    <div className="team-social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
