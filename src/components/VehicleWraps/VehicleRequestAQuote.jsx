import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quoteData = [
    {
        number: '01',
        title: 'Protect Your Vehicle\'s Original Paint',
        content:
            'Our wraps act as a protective barrier against scratches, dings, and environmental hazards, preserving the integrity of your vehicle\'s original paint.',
    },
    {
        number: '02',
        title: 'Cost-Effective Customization',
        content:
            'Compared to traditional paint jobs, vinyl wraps are a more affordable way to change your vehicle\'s appearance, offering a wide range of colors and finishes without the permanence of paint.',
    },
    {
        number: '03',
        title: 'Enhance Resale Value',
        content:
            'By protecting the original paint and allowing for easy removal, wraps help maintain your vehicle\'s resale value, appealing to potential buyers who prefer factory finishes.',
    },
    {
        number: '04',
        title: 'Efficient Installation and Removal',
        content:
            'Our professional installation process is quick and precise, and wraps can be removed without damaging the underlying paint, offering flexibility for future changes.',
    },
    {
        number: '05',
        title: 'Versatile Design Options',
        content:
            'Choose from a variety of textures and finishes, including matte, gloss, satin, and carbon fiber, to achieve the exact look you desire.',
    },
    {
        number: '06',
        title: 'Effective Advertising Medium',
        content:
            'For businesses, vehicle wraps turn your fleet into moving billboards, increasing brand visibility and reaching a wider audience wherever you go.',
    },
    {
        number: '07',
        title: 'Durable and Long-Lasting',
        content:
            'Our high-quality vinyl wraps are designed to withstand the elements, maintaining their appearance and protective qualities for years with proper care.',
    },
];

export default function VehicleRequestAQuote() {
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