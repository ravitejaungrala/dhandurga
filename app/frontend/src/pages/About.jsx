import React from 'react';
import { Users, Target, Eye } from 'lucide-react';

const About = () => {
    return (
        <div>
            <div className="page-header">
                <h1>About Us</h1>
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                    Learn more about our company, our mission, and the dedicated team behind our success.
                </p>
            </div>

            <section className="section">
                <div className="about-grid">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Our Company" />
                    </div>
                    <div className="about-content">
                        <h2>Our Story</h2>
                        <p>We are passionate developers specializing in custom chatbot and website development, as well as GenAI solutions. With six months of dedicated GenAI experience and over 2 years of full-stack development expertise, we started as a startup with a clear goal.</p>
                        <p>Our aim is to provide an exceptional experience to our customers by delivering high-quality, cutting-edge solutions at an affordable, low cost. We believe that top-tier technology should be accessible to businesses of all sizes.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--white)' }}>
                <div className="features-grid" style={{ marginTop: 0 }}>
                    <div className="feature-card">
                        <div className="feature-icon" style={{ backgroundColor: 'rgba(10, 102, 194, 0.1)', color: 'var(--primary-blue)' }}>
                            <Target />
                        </div>
                        <h3>Our Mission</h3>
                        <p>To provide high-quality custom AI, chatbot, and web development solutions that enhance customer experiences while remaining accessible and low-cost for businesses of all sizes.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon" style={{ backgroundColor: 'rgba(200, 76, 255, 0.1)', color: 'var(--primary-violet)' }}>
                            <Eye />
                        </div>
                        <h3>Our Vision</h3>
                        <p>To be the go-to technology partner for startups and enterprises alike, known for our passion, cost-effectiveness, and cutting-edge GenAI implementations.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Users />
                        </div>
                        <h3>Our Values</h3>
                        <p>Integrity, Innovation, Collaboration, and placing our clients at the center of everything we do.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
