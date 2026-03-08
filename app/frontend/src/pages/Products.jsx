import React, { useState } from 'react';

const Products = () => {
    const [clickedProduct, setClickedProduct] = useState(null);
    const products = [
        {
            id: 1,
            name: "Montanary Elevators",
            description: "A comprehensive company website platform designed specifically for the elevator industry, featuring dynamic service showcases and quick contact integrations.",
            image: "https://www.hybonelevators.com/blog/wp-content/uploads/2023/08/Modern-Elevator-740x576.jpg"
        },
        {
            id: 2,
            name: "ZenVault Workspace",
            description: "A centralized, highly secure platform for saving all your credentials, organizing daily tasks, tracking work hours, and managing upcoming enterprise events.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "ZenConnect HRMS",
            description: "An intuitive and modern human resources management system simplifying payroll, attendance tracking, and internal team communications.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div>
            <div className="page-header">
                <h1>Our Products</h1>
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                    Explore our suite of innovative software products designed to optimize performance and elevate your business.
                </p>
            </div>

            <section className="section bg-light">
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div style={{ marginTop: 'auto' }}>
                                    <button
                                        className="btn btn-primary"
                                        style={{ width: '100%', opacity: clickedProduct === product.id ? 0.7 : 1 }}
                                        onClick={() => setClickedProduct(product.id)}
                                    >
                                        {clickedProduct === product.id ? 'View Details (Coming Soon...)' : 'View Details'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
