import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DriveInStyle from '../Automotive/DriveInStyle';
import TintCar1 from '../../assets/images/architecture-img.jpg';

gsap.registerPlugin(ScrollTrigger);


export default function TintYourHome() {
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
                    title="Live in comfort and privacy."
                    description="At TintFx Hi-Tech Architecture Films are the epitome of innovation and technological excellence, leading the industry in creating sustainable solutions for both residential and commercial spaces. The films provide superior UV protection, enhancing comfort and ambience while significantly reducing energy consumption. Designed with a commitment to a greener planet, architectural films offer unparalleled performance, making every space not just more efficient but also more inspiring. Choose TintFx and experience the future of sustainable living, where cutting-edge technology meets the highest standards of protection and energy savings."
                />
                <div className="tintyourCarContainer">
                    <h2 ref={headingRef}><span>Why</span> <span>Tint</span> <span>Your</span> <span>Home</span> <span>or</span> <span>Office</span> <span>Windows?</span></h2>
                    <p ref={paragraphRef}>Discover how architectural window films improve your environment — from energy savings to privacy and protection.</p>
                </div>
            </div>

        </div>
    );
}