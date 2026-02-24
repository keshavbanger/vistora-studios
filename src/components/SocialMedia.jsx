import React, { useEffect, useState, useRef } from 'react';

const SocialMedia = () => {
    const [stats, setStats] = useState({ reach: 0, growth: 0 });
    const sectionRef = useRef(null);
    const triggered = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !triggered.current) {
                triggered.current = true;

                // Reach animation
                let reachVal = 0;
                const reachEnd = 240;
                const reachInt = setInterval(() => {
                    reachVal += 4;
                    if (reachVal >= reachEnd) {
                        reachVal = reachEnd;
                        clearInterval(reachInt);
                    }
                    setStats(prev => ({ ...prev, reach: reachVal }));
                }, 20);

                // Growth animation
                let growthVal = 0;
                const growthEnd = 18;
                const growthInt = setInterval(() => {
                    growthVal += 1;
                    if (growthVal >= growthEnd) {
                        growthVal = growthEnd;
                        clearInterval(growthInt);
                    }
                    setStats(prev => ({ ...prev, growth: growthVal }));
                }, 50);
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="s4" ref={sectionRef}>
            <div className="section-label anim-hidden">Marketing Ecosystem</div>
            <div className="s4-content">
                <div className="feed-grid anim-hidden-scale">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="feed-cell">
                            {i === 1 && <div className="notif" style={{ top: '10px', right: '10px' }}></div>}
                        </div>
                    ))}
                </div>
                <div className="analytics anim-hidden-left">
                    <h3 className="svc-name">Engagement<br />Architecture</h3>
                    <div className="analytics-row">
                        <div className="stat-box">
                            <div className="stat-val">{stats.reach}K</div>
                            <div className="stat-label">Reach</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-val">{stats.growth}%</div>
                            <div className="stat-label">Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
