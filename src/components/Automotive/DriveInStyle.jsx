import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DriveInStyle = forwardRef(({ title, description }, ref) => {
    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error('GSAP or ScrollTrigger is not loaded');
            return;
        }

        // Split the title text into individual spans for letter-by-letter animation
        const titleElement = titleRef.current;
        const text = titleElement.textContent;
        titleElement.innerHTML = text
            .split('')
            .map((char) => `<span class="letter">${char}</span>`)
            .join('');

        const letters = titleElement.querySelectorAll('.letter');

        const ctx = gsap.context(() => {
            // Title letter-by-letter animation
            gsap.from(letters, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Title glow pulse effect
            gsap.to(letters, {
                // textShadow: '0 0 8px rgba(255, 255, 255, 0.7), 0 0 16px rgba(255, 255, 255, 0.5)',
                duration: 0.6,
                stagger: 0.05,
                ease: 'sine.inOut',
                delay: 0.4,
                yoyo: true,
                repeat: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Description fade-in and slide-up
            gsap.from(descRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.6,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="row" ref={ref}>
            <div className="col-lg-6 mt-md-5 mt-3">
                <div className="tint-fx-title">
                    <h2 ref={titleRef}>{title}</h2>
                </div>
            </div>
            <div className="col-lg-6 mt-md-5 mt-2">
                <p className="tintFxDesc" ref={descRef}>
                    {description}
                </p>
            </div>
        </div>
    );
});

export default DriveInStyle;