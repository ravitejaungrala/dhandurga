import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, image }) => {
    return (
        <div className="service-card">
            <div
                className="service-img-container"
                style={image ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                } : {}}
            >
                {image && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}></div>}
                <div style={{ position: 'relative', zIndex: 2, background: image ? 'rgba(255,255,255,0.9)' : 'transparent', padding: image ? '1rem' : '0', borderRadius: image ? '50%' : '0', display: 'flex' }}>
                    {Icon ? <Icon size={image ? 48 : 64} color="var(--primary-blue)" /> : <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Service Image</div>}
                </div>
            </div>
            <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#" className="flex gap-2 items-center font-medium" style={{ color: 'var(--primary-violet)' }}>
                    Learn More <ArrowRight size={18} />
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
