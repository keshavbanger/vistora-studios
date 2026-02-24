import React from 'react';

const BrandIntro = () => {
    return (
        <section className="section" id="s1">
            <div className="flare anim-hidden-fade"></div>

            <div className="intro-badge anim-hidden">INTRODUCING</div>

            <h1 className="main-title anim-hidden">
                <span className="text-vistora">VISTORA</span>
                <span className="text-studios">STUDIOS</span>
            </h1>

            <div className="tagline-row anim-hidden">
                <span>Design</span>
                <span className="dot">·</span>
                <span>Motion</span>
                <span className="dot">·</span>
                <span>Intelligence</span>
            </div>

            <p className="value-statement anim-hidden">
                We help brands scale with strategy-driven design and intelligent digital experiences.
            </p>

            <div className="hero-ctas anim-hidden">
                <button className="cta-primary">View Our Work</button>
                <button className="cta-secondary">Start Your Project</button>
            </div>

            <div className="scroll-indicator">
                <span>Navigate</span>
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default BrandIntro;
