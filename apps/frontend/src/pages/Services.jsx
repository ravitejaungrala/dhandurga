import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Code, Bot, Layout, Cloud, Database, Cpu, SearchCode } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Full Stack Development",
            description: "End-to-end development of scalable, secure, and robust web applications tailored to your business operations.",
            icon: Code,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Gen AI Solutions & Chatbots",
            description: "Intelligent AI integrations and custom chatbots designed to automate tasks and significantly enhance customer experience.",
            icon: Bot,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Frontend Development",
            description: "Crafting beautiful, responsive, and highly interactive user interfaces that engage users across all devices.",
            icon: Layout,
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Backend & API Development",
            description: "Building powerful server-side architectures and seamless APIs to connect your digital ecosystem securely.",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Cloud Infrastructure",
            description: "Deploying and managing scalable cloud environments to ensure high availability and optimal performance.",
            icon: Cloud,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Database Management",
            description: "Designing efficient database schemas and optimizing complex data flows for data-intensive applications.",
            icon: Database,
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <div>
            <div className="page-header">
                <h1>Our Services</h1>
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                    Discover how our comprehensive suite of digital services can propel your business forward.
                </p>
            </div>

            <section className="section">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            image={service.image}
                        />
                    ))}
                </div>
            </section>
            <section className="section bg-light">
                <div className="page-header" style={{ padding: '3rem 5% 2rem', background: 'transparent', color: 'var(--text-dark)' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Technologies We Master</h2>
                    <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '700px', margin: '1rem auto' }}>
                        We leverage industry-leading tools and frameworks to build exceptional digital experiences.
                    </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                    {[
                        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
                        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
                    ].map((tech) => (
                        <div
                            key={tech.name}
                            style={{ width: '80px', height: '80px', padding: '1rem', background: 'var(--white)', borderRadius: '50%', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                            title={tech.name}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <img src={tech.icon} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ background: 'var(--gradient-main)', color: 'white', textAlign: 'center', padding: '5rem 5%', margin: '4rem 5% 2rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Ready to Start Your Project?</h2>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.9 }}>
                    If you want services or development for products, contact us directly through WhatsApp for immediate assistance! 🚀
                </p>
                <a
                    href="https://wa.me/917013666788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ color: 'white', borderColor: 'white', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2rem', fontSize: '1.1rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary-orange)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Contact via WhatsApp
                </a>
            </section>
        </div>
    );
};

export default Services;
