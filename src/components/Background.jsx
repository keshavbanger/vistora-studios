import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);
    const glitchRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (glitchRef.current) {
                glitchRef.current.width = window.innerWidth;
                glitchRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        // Particles
        const particles = [];
        for (let i = 0; i < 120; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.5 + 0.3,
                a: Math.random() * 0.6 + 0.1
            });
        }

        // Background lines
        const bgLines = [];
        for (let i = 0; i < 18; i++) {
            bgLines.push({
                x1: Math.random() * canvas.width, y1: Math.random() * canvas.height,
                x2: Math.random() * canvas.width, y2: Math.random() * canvas.height,
                progress: 0, speed: Math.random() * 0.004 + 0.002,
                alpha: Math.random() * 0.2 + 0.05
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Lines
            bgLines.forEach(l => {
                l.progress = Math.min(1, l.progress + l.speed);
                const ex = l.x1 + (l.x2 - l.x1) * l.progress;
                const ey = l.y1 + (l.y2 - l.y1) * l.progress;
                ctx.beginPath();
                ctx.moveTo(l.x1, l.y1);
                ctx.lineTo(ex, ey);
                ctx.strokeStyle = `rgba(0,180,255,${l.alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
                if (l.progress >= 1) {
                    l.x1 = Math.random() * canvas.width; l.y1 = Math.random() * canvas.height;
                    l.x2 = Math.random() * canvas.width; l.y2 = Math.random() * canvas.height;
                    l.progress = 0;
                }
            });

            // Draw Particles
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,180,255,${p.a})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        canvas.style.opacity = '1';

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Glitch logic
    useEffect(() => {
        const glitchC = glitchRef.current;
        const glX = glitchC.getContext('2d');
        let glitchTimeout;

        const doGlitch = (duration = 300) => {
            const start = performance.now();
            glitchC.style.opacity = '1';
            const frame = (t) => {
                const elapsed = t - start;
                if (elapsed > duration) {
                    glitchC.style.opacity = '0';
                    glX.clearRect(0, 0, glitchC.width, glitchC.height);
                    return;
                }
                glX.clearRect(0, 0, glitchC.width, glitchC.height);
                for (let i = 0; i < 6; i++) {
                    const y = Math.random() * glitchC.height;
                    const h = Math.random() * 20 + 2;
                    const shift = (Math.random() - 0.5) * 30;
                    glX.fillStyle = `rgba(0,${Math.floor(Math.random() * 200)},255,0.08)`;
                    glX.fillRect(shift, y, glitchC.width, h);
                }
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        };

        // Glitch on scroll significantly
        const handleScroll = () => {
            if (Math.random() > 0.98) doGlitch(150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <canvas id="bg-canvas" ref={canvasRef} style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                opacity: 0,
                transition: 'opacity 1s',
                pointerEvents: 'none'
            }} />
            <canvas id="glitch-overlay" ref={glitchRef} style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2000,
                opacity: 0,
                pointerEvents: 'none',
                transition: 'opacity 0.1s'
            }} />
            <div className="scanlines"></div>
            <div className="vignette"></div>
        </>
    );
};

export default Background;
