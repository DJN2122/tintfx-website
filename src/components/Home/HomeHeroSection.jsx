import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
import { FaWhatsapp } from "react-icons/fa6";
import CarImage from '../../assets/images/bg3.png'
export default function HomeHeroSection() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const socialIconsRef = useRef([]);
    const listItemsRef = useRef([]);
    const contactBtnRef = useRef(null);
    const callNow = () => {
        window.location.href = 'tel:+353858300202';
    };
    useEffect(() => {
        // Debug: Verify GSAP is loaded
        if (!gsap) {
            console.error('GSAP is not loaded');
            return;
        }
        const ctx = gsap.context(() => {
            // Animate social icons with stagger
            gsap.from(socialIconsRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)',
                delay: 0.5,
                scrollTrigger: {
                    trigger: socialIconsRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            // Animate contact button
            gsap.from(contactBtnRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.75)',
                delay: 0.5,
                scrollTrigger: {
                    trigger: contactBtnRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        }, heroRef);

        return () => {
            ctx.revert(); // Cleanup animations
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="home-hero-section" ref={heroRef}>
            <div className="hero_bg">
                {/* <div className='text-end'>
                    <img src={CarImage} alt="" />
                </div> */}
                <div className="manage-container">
                    <div className="premiumCont">
                        <div className="socialIcons">
                            <Link to="https://www.instagram.com/tintfx.ireland?igsh=YXhoZ3B4OGMxM3pi" className="socialIcon" ref={(el) => (socialIconsRef.current[0] = el)}>
                                <FaInstagram />
                            </Link>
                            <Link to="https://www.tiktok.com/@tintfx_ie?_t=ZN-8vVizJuQVvy&_r=1" className="socialIcon" ref={(el) => (socialIconsRef.current[1] = el)}>
                                <FaTiktok />
                            </Link>
                            <Link to="https://www.facebook.com/share/1ZRaG9427s/?mibextid=wwXIfr" className="socialIcon" ref={(el) => (socialIconsRef.current[2] = el)}>
                                <FaFacebookF />
                            </Link>
                            <Link to='tel:+353858300202'
                                className="socialIcon"
                                ref={(el) => (socialIconsRef.current[3] = el)}>
                                <FaWhatsapp />
                            </Link>
                        </div>
                        <div className="premimumContent">
                            <ul>

                            </ul>


                        </div>
                    </div>
                    <div className="hero_btn">
                        <a href="tel:+353858300202" onClick={callNow} className="secBtn" ref={contactBtnRef}>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}