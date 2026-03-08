import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div>
            <div className="page-header">
                <h1>Contact Us</h1>
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                    We'd love to hear from you. Get in touch with our team for inquiries, support, or partnership opportunities.
                </p>
            </div>

            <section className="section bg-light">
                <div className="contact-container">
                    <div className="contact-info-card">
                        <h3>Get in Touch</h3>
                        <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Our dedicated team is always ready to assist you. Drop us a message or visit our office.</p>

                        <div className="info-item">
                            <div className="info-icon"><MapPin /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Our Location</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Madhapur,<br />Hyderabad</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Phone /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Phone Number</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>+91 7013666788</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Mail /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email Address</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>raviteja.ungarala2003@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Clock /></div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Working Hours</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Monday - Friday: 9AM - 6PM<br />Weekend: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '2rem 1rem' }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Send Us A Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="How can we help you?" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
