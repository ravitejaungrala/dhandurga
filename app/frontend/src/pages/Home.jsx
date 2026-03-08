import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Target, Zap, Shield, Smartphone, Code, Bot, Layout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Hero />

            {/* About Us Section */}
            <section className="section bg-light" id="about">
                <div className="about-grid">
                    <div className="about-content">
                        <h2>Who We Are</h2>
                        <p>Dhana Durga is a forward-thinking technology company specializing in innovative solutions for modern businesses. We combine creativity, strategic thinking, and technical expertise to deliver outstanding digital experiences.</p>
                        <p>With a user-centric approach, we help brands scale up and achieve their goals through powerful web and mobile applications.</p>
                        <button className="btn btn-primary mt-4" onClick={() => navigate('/about')}>Read More About Us</button>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Zap />
                        </div>
                        <h3>Fast Performance</h3>
                        <p>Optimized code and architectures to ensure lightning-fast load times and smooth interactions.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Shield />
                        </div>
                        <h3>Highly Secure</h3>
                        <p>We implement industry-standard security protocols to keep your data safe and protected.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Target />
                        </div>
                        <h3>Result Oriented</h3>
                        <p>Our strategies are designed to deliver measurable results and maximize your ROI.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Smartphone />
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Flawless experiences across all devices, from mobile phones to ultra-wide desktop monitors.</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" style={{ background: 'var(--white)' }}>
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    <ServiceCard
                        title="Full Stack Development"
                        description="End-to-end development of scalable, secure, and robust web applications."
                        icon={Code}
                    />
                    <ServiceCard
                        title="Gen AI Solutions"
                        description="Intelligent custom chatbots and AI tools to automate and enhance customer experiences."
                        icon={Bot}
                    />
                    <ServiceCard
                        title="Frontend Development"
                        description="Crafting beautiful, responsive, and highly interactive user interfaces."
                        icon={Layout}
                    />
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button className="btn btn-outline" onClick={() => navigate('/services')}>View All Services</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
