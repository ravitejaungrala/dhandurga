import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Hexagon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="/icon1.png" alt="Dhana Durga Logo" style={{ height: '28px', width: 'auto' }} />
                        Dhana Durga
                    </h2>
                    <p>We provide innovative digital solutions and cutting-edge technologies to help your business grow and thrive in the modern competitive landscape.</p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Cloud Solutions</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Contact Us</h3>
                    <ul>
                        <li className="flex gap-2 items-center text-gray-400">
                            <MapPin size={18} /> Madhapur, Hyderabad
                        </li>
                        <li className="flex gap-2 items-center text-gray-400">
                            <Phone size={18} /> +91 7013666788
                        </li>
                        <li className="flex gap-2 items-center text-gray-400">
                            <Mail size={18} /> raviteja.ungarala2003@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dhana Durga Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
