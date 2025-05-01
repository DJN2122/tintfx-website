import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VanBrandingHeroSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

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
            .map((char) => `<span class="letter">${char}<span class="particle"></span></span>`)
            .join('');

        const letters = titleElement.querySelectorAll('.letter');
        const particles = titleElement.querySelectorAll('.particle');

        // Split subtitle for typewriter effect
        const subtitleText = subtitleRef.current.textContent;
        subtitleRef.current.innerHTML = '';
        const chars = subtitleText.split('');
        chars.forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            subtitleRef.current.appendChild(span);
        });

        // GSAP Context for animations
        const ctx = gsap.context(() => {
            // Background Fade-In
            gsap.fromTo(
                sectionRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 2, // Slower for a grand reveal
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Multi-stage Letter Animation (Slower)
            gsap.from(letters, {
                y: 50,
                opacity: 0,
                duration: .5, // Increased duration
                stagger: 0.15, // Slower stagger
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Glow Pulse Effect (Slower)
            // Glow Pulse Effect (Slower)
            gsap.to(letters, {
                textShadow: 'none', // Remove text shadow
                duration: 0.8, // Increased duration
                stagger: 0.15, // Slower stagger
                ease: 'sine.inOut',
                delay: 0.6, // Adjusted delay
                yoyo: true,
                repeat: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });


            // Bounce Settle Effect (Slower)
            gsap.to(letters, {
                scale: 1.1,
                duration: 0.5, // Increased duration
                stagger: 0.15, // Slower stagger
                ease: 'bounce.out',
                delay: 1.2, // Adjusted delay
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                onComplete: () => {
                    gsap.to(letters, { scale: 1, duration: 0.3 }); // Slightly slower settle
                },
            });

            // Particle Animation
            particles.forEach((particle, index) => {
                gsap.to(particle, {
                    x: () => gsap.utils.random(-50, 50),
                    y: () => gsap.utils.random(-50, 50),
                    opacity: 0,
                    scale: gsap.utils.random(0.5, 1.5),
                    duration: 1, // Slower duration
                    ease: 'power2.out',
                    delay: index * 0.15 + 1.2, // Sync with bounce
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            // Subtitle Typewriter Effect (Slower)
            gsap.to(subtitleRef.current.querySelectorAll('span'), {
                opacity: 1,
                duration: 0.1, // Slightly slower per character
                ease: 'none',
                stagger: 0.12, // Slower typing speed
                delay: 2, // Start after title animations
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => {
            ctx.revert(); // Clean up GSAP context
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="manage-container">
            <div className='services-hero-section' ref={sectionRef}>
                <h1 ref={titleRef}>Services</h1>
                <p ref={subtitleRef}>Van Branding & Signs </p>
            </div>
        </div>
    );
}