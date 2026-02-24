import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-visible');

                    // Specific logic for timeline tracks in Scene 5
                    if (entry.target.classList.contains('timeline')) {
                        entry.target.classList.add('tracks-active');
                    }
                }
            });
        }, observerOptions);

        const anims = document.querySelectorAll('.anim-hidden, .anim-hidden-left, .anim-hidden-fade, .anim-hidden-scale, .timeline');
        anims.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

export default useScrollReveal;
