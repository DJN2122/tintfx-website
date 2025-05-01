import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quoteData = [
    {
        number: '01',
        title: 'Maximize Brand Visibility',
        content:
            'Turn every journey into a marketing opportunity. Our eye-catching van graphics ensure your brand is seen by thousands daily, increasing recognition and recall among potential customers.',
    },
    {
        number: '02',
        title: 'Cost-Effective Advertising',
        content:
            'Unlike recurring costs of traditional advertising, van signage is a one-time investment that provides continuous exposure, delivering a high return on investment over time.',
    },
    {
        number: '03',
        title: 'Professional and Consistent Image',
        content:
            'A fleet of branded vans conveys professionalism and consistency, building trust with clients and reinforcing your brand\'s credibility in the marketplace.',
    },
    {
        number: '04',
        title: 'Customizable Design Options',
        content:
            "From full wraps to partial graphics, our designs are tailored to reflect your brand's identity, ensuring a unique and cohesive look across all vehicles.",
    },
    {
        number: '05',
        title: 'Protect Your Vehicle\'s Exterior',
        content:
            'Our high-quality vinyl wraps not only enhance appearance but also protect your van\'s paintwork from scratches, UV rays, and general wear and tear.',
    },
    {
        number: '06',
        title: 'Easy Updates and Maintenance',
        content:
            'Need to update your branding or contact information? Our signage solutions are designed for easy removal and replacement, keeping your fleet current without hassle.',
    },
];

export default function VanBrandRequestAQuote() {
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