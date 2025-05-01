import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quoteData = [
    {
        number: '01',
        title: 'Protect Your Car Upholstery',
        content:
            'The upholstery of your car can be damaged in a range of ways, and protecting it is vital. While things like tears and scuffs may happen occasionally, your upholstery can also fade over time. This process happens quite fast if the interior is exposed to a lot of sunlight.',
    },
    {
        number: '02',
        title: 'Block Harmful UV Rays',
        content:
            'While the sun can damage the interior of your car, that might not be your biggest concern. Overexposure to UV rays is harmful for your skin and can even lead to skin cancer.  Tinting your windows can help block these rays.',
    },
    {
        number: '03',
        title: 'Help With Solar Heat Rejection',
        content:
            'When sat in the sun, cars can get very hot. At the end of a day of work, getting into a car that feels more like an oven may be the last thing you want to do. Standard car windows allow a lot of heat in, but adding a tint will significantly improve heat rejection.',
    },
    {
        number: '04',
        title: 'Better Privacy and Security',
        content:
            "A lot of people value their privacy, and that's something that you don't often get while driving. Other drivers, as well as pedestrians, can see straight into your car — unless your windows are tinted.",
    },
    {
        number: '05',
        title: 'Makes Your Car Look Better',
        content:
            'While many of the benefits of window tinting are practical, plenty of people choose it simply because they like how it looks. It provides a sleek, sharp appearance to your vehicle that can make it stand out from the crown. You can choose from a range of tints so you can find something that suits you perfectly.',
    },
];

export default function RequestAQuote() {
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