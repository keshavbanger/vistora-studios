import React from 'react';

const BrandStatement = () => {
    const cards = ["Aesthetic", "Precision", "Impact", "Future"];

    return (
        <section className="section" id="s2">
            <div className="eyebrow anim-hidden">The Vision</div>
            <h2 className="statement anim-hidden">
                We bridge the gap between <em>imagination</em> and <em>execution</em> through precision-engineered digital content.
            </h2>
            <div className="cards">
                {cards.map((text, i) => (
                    <div key={i} className="mini-card anim-hidden-scale" style={{ transitionDelay: `${i * 0.1}s` }}>
                        {text}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandStatement;
