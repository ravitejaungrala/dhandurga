import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="/icon1.png" alt="Dhana Durga Logo" style={{ height: '32px', width: 'auto' }} />
                    Dhana Durga
                </NavLink>
            </div>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
                <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
                <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </nav>
    );
};

export default Navbar;
