import React, { useEffect, useRef } from 'react';

const AISection = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const dots = [];
        for (let i = 0; i < 40; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(0, 180, 255, 0.2)';
            ctx.lineWidth = 0.5;

            dots.forEach((d, i) => {
                d.x += d.vx;
                d.y += d.vy;

                if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
                if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

                dots.slice(i + 1).forEach(d2 => {
                    const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(d.x, d.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const chips = ["Neural Grading", "LLM Strategy", "Auto-Flow", "Sync-Net"];

    return (
        <section className="section" id="s6">
            <canvas ref={canvasRef} id="ai-canvas"></canvas>
            <div className="ai-label anim-hidden">
                The Future is <span className="line2">Intelligent</span>
            </div>
            <div className="ai-chips">
                {chips.map((chip, i) => (
                    <div key={i} className="chip anim-hidden-scale" style={{ transitionDelay: `${i * 0.1}s` }}>
                        {chip}
                    </div>
                ))}
            </div>
            <div className="ai-sub anim-hidden">Custom AI Pipelines</div>
        </section>
    );
};

export default AISection;
