import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quoteData = [
    {
        number: '01',
        title: 'Protect Your Interiors from UV Damage',
        content:
            'Prolonged exposure to sunlight can cause fading and deterioration of furniture, flooring, and artwork. TintFx window films block over 99% of harmful UV rays, preserving the beauty and longevity of your interior furnishings.',
    },
    {
        number: '02',
        title: 'Enhance Energy Efficiency',
        content:
            'Our window films reduce solar heat gain, helping to maintain consistent indoor temperatures. This leads to decreased reliance on air conditioning systems, resulting in significant energy savings.',
    },
    {
        number: '03',
        title: 'Improve Privacy Without Sacrificing Natural Light',
        content:
            'Achieving the perfect balance between openness and privacy. TintFx films allow natural light to enter while obscuring the view from outside, ensuring your privacy is maintained without darkening your space.',
    },
    {
        number: '04',
        title: 'Reduce Glare for Better Comfort',
        content:
            'Glare from the sun can be disruptive, especially when working on screens or watching television. Our films minimize glare, creating a more comfortable and productive environment.',
    },
    {
        number: '05',
        title: 'Elevate Aesthetic Appeal',
        content:
            'With a variety of finishes and shades available, TintFx window films can enhance the visual appeal of your property, giving it a sleek and modern look.',
    },
    {
        number: '06',
        title: 'Easy Installation with Minimal Disruption',
        content:
            'Our professional installation process is quick and non-intrusive, allowing you to enjoy the benefits of window tinting without significant downtime or inconvenience.',
    },
];

export default function ArchitectRequestAQuote() {
    const cardRefs = useRef([]);
    const numberRefs = useRef([]);
    const titleRefs = useRef([]);
    const contentRefs = useRef([]);
    const buttonRefs = useRef([]);
    const callNow = () => {
        window.location.href = 'tel:+353858300202';
    };
    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error('GSAP or ScrollTrigger is not loaded');
            return;
        }

        const ctx = gsap.context(() => {
            cardRefs.current.forEach((card, index) => {
                // Animate card container
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });

                // Animate number (h1)
                gsap.from(numberRefs.current[index], {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });

                // Animate title (h6)
                gsap.from(titleRefs.current[index], {
                    opacity: 0,
                    x: -30,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });

                // Animate content (p)
                gsap.from(contentRefs.current[index], {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });

                // Animate button
                gsap.from(buttonRefs.current[index], {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.75)',
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        });

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="request-a-quote-container">
            <div className="manage-container">
                <div className="row justify-content-center">
                    {quoteData.map((quote, index) => (
                        <div className="col-lg-6 mt-sm-5 mt-4" key={index}>
                            <div
                                className="request-a-quote-card"
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                <h1 ref={(el) => (numberRefs.current[index] = el)}>
                                    {quote.number}
                                </h1>
                                <h6 ref={(el) => (titleRefs.current[index] = el)}>
                                    {quote.title.split('').map((char, i) => (
                                        <span key={i} className="char-span">
                                            {char}
                                        </span>
                                    ))}
                                </h6>
                                <p ref={(el) => (contentRefs.current[index] = el)}>
                                    {quote.content.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <div className="mt-sm-5 mt-4">
                                    <a
                                        href="tel:+353858300202" onClick={callNow} 
                                        className="request-a-quote-btn"
                                    >
                                        Request a Quote
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}