import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FooterLogo from '../../assets/images/footer-logo.svg';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoGlobe } from "react-icons/go";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const logoRef = useRef(null);
    const socialIconsRef = useRef(null);
    const buttonRef = useRef(null);
    // const navRef = useRef(null);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error('GSAP or ScrollTrigger is not loaded');
            return;
        }

        // Animate Footer Logo Section
        gsap.fromTo(
            logoRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
        // Animate Get Started Button
        gsap.fromTo(
            buttonRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.4,
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className='home-footer footerSection'>
            <div className="manage-container">
                <div className="footer-content">
                    <div className="footer-logo" ref={logoRef}>
                        <img src={FooterLogo} alt="TintFx Logo" />
                        <p>
                            TintFX delivers premium window tinting, vehicle wrapping, and branding solutions for cars, vans, and buildings. With a focus on style, protection, and precision, we transform everyday surfaces into sleek, high-performance finishes.
                        </p>
                    </div>
                    <a 
  href="#" 
  className="secBtn" 
  ref={buttonRef}
  onClick={(e) => e.preventDefault()}
>
  Get Started
</a>

                </div>
                <div className="footerNav">
                    <div className="footerNavItem">
                        <Link to="/">Home</Link>
                        <Link to="/automotive">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="#">How to Find Us</Link>
                        <Link to="#">Contact</Link>
                    </div>
                    <div className="footerNavItem">
                        <Link to="#">Support</Link>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Cookies</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}