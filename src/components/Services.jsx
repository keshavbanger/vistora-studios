import React from 'react';

const Services = () => {
    const services = [
        "Brand Identity",
        "Cinematic Motion",
        "Digital Strategy",
        "AI Integration"
    ];

    return (
        <section className="section" id="s3">
            <h2 className="services-heading anim-hidden">Core<br />Services</h2>
            <div className="services-list">
                {services.map((svc, i) => (
                    <div key={i} className="svc-item anim-hidden-left" style={{ transitionDelay: `${i * 0.15}s` }}>
                        <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                        <div className="svc-content">
                            <h3 className={`svc-name ${i === 1 ? 'highlight' : ''}`}>{svc}</h3>
                            <div className="svc-line"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
