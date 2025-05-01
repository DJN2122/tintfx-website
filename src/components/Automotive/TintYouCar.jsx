import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DriveInStyle from './DriveInStyle';
import CarouselSlide from '../CarouselSlide';
import TintCar1 from '../../assets/images/window-tinting-img-2.jpg';

gsap.registerPlugin(ScrollTrigger);


export default function TintYouCar() {
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
                    description="At TintFX, our automotive window tinting service is designed to elevate both the style and function of your vehicle. From subtle to fully darkened finishes, we offer premium films that reduce glare, block harmful UV rays, and keep your car cool — while delivering a smooth, professional look that lasts."
                />
                <div className="tintyourCarContainer">
                    <h2 ref={headingRef}><span>Why</span> <span>Tint</span> <span>Your</span> <span>Car</span> <span>Windows?</span></h2>
                    <p ref={paragraphRef}>Discover the key reasons why automotive window tinting is more than just a style upgrade — it's protection, comfort, and peace of mind.</p>
                </div>
            </div>
        </div>
    );
}