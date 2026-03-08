import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Code, Bot, Layout, Cpu, Globe, Database } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-grid">
                <div className="hero-content">
                    <h1>Building the Future of Digital Innovation</h1>
                    <p>We deliver cutting-edge solutions to empower your business. Experience seamless integration and elegant design with our custom services.</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => navigate('/services')}>Get Started</button>
                        <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }} onClick={() => navigate('/contact')}>Contact Us</button>
                    </div>
                </div>

                <div className="hero-animation-container">
                    <div className="floating-icons">
                        <div className="float-icon icon-1"><Bot size={32} /></div>
                        <div className="float-icon icon-2"><Code size={32} /></div>
                        <div className="float-icon icon-3"><Layout size={32} /></div>
                        <div className="float-icon icon-4"><Cpu size={32} /></div>
                        <div className="float-icon icon-5"><Database size={32} /></div>
                        <div className="float-icon icon-6"><Globe size={32} /></div>

                        <div className="center-orb">
                            <div className="orb-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
