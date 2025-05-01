import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DriveInStyle from '../Automotive/DriveInStyle';
gsap.registerPlugin(ScrollTrigger);

import TintCar1 from '../../assets/images/vehicle-wrap-image.jpg';
export default function WhyUseVehicleWraps() {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error('GSAP or ScrollTrigger is not loaded');
            return;
        }

        const ctx = gsap.context(() => {


            // Animate Heading (h2)
            gsap.from(headingRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Animate Paragraph (p)
            gsap.from(paragraphRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.4,
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Animate CarouselSlide
            gsap.from(carouselRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.6,
                scrollTrigger: {
                    trigger: carouselRef.current,
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
        <div className='manage-container'>
            <div className='top-main-image-section' ref={carouselRef}>
                <img src={TintCar1} alt="" className='img-fluid top-main-image' />
            </div>
            <div className='drive-in-style-container'>
                <DriveInStyle
                    title="Drive in Style. Ride in Comfort."
                    description="At TintFx, our Vehicle Wraps combine cutting-edge technology with creative design to transform your vehicle into a mobile masterpiece. Whether for personal expression or commercial branding, our high-quality wraps offer both aesthetic appeal and practical benefits."
                />
                <div className="tintyourCarContainer">
                    <h2 ref={headingRef}><span>Why</span> <span>Use</span> <span>Vehicle</span> <span>Wraps?</span></h2>
                    <p ref={paragraphRef}>Turn your vehicle into a moving billboard or a bold personal statement — wraps offer protection, custom design, and attention-grabbing impact, all in one seamless layer.</p>
                </div>
            </div>
        </div>
    );
}