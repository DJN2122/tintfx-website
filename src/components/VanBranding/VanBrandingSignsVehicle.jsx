import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DriveInStyle from '../Automotive/DriveInStyle';
import TintCar1 from '../../assets/images/van-branding-img.jpg';


gsap.registerPlugin(ScrollTrigger);


export default function VanBrandingSignsVehicle() {
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
                    title="Make your self noticed!"
                    description="At TintFx, our Van Branding and Signage solutions are designed to transform your commercial vehicles into powerful marketing tools. By combining innovative design with high-quality materials, we ensure your brand stands out on the road, leaving a lasting impression wherever your vans go."
                />
                <div className="tintyourCarContainer">
                    <h2 ref={headingRef}><span>Why</span> <span>Use</span> <span>Vehicle</span> <span>Wraps?</span></h2>
                    <p ref={paragraphRef}>Your van is more than transport — it’s a mobile marketing tool. Van branding boosts visibility, builds trust, and ensures your business stands out wherever the road takes you.</p>
                </div>
            </div>
            
        </div>
    );
}