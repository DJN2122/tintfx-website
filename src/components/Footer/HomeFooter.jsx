import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowUp } from 'react-icons/go';
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function HomeFooter() {
    const logoRef = useRef(null);
    const navRef = useRef(null);

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error('GSAP or ScrollTrigger is not loaded');
            return;
        }

        const elements = [logoRef.current, navRef.current].filter(el => el);

        if (elements.length === 0) {
            console.warn('No valid refs found for GSAP animations');
            return;
        }

        gsap.set(elements, { opacity: 0, y: 30 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-footer',
                start: 'top 100%',
                toggleActions: 'play none none none',
            }
        });

        tl.fromTo(
            elements,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            0
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            tl.kill();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const callNow = () => {
        window.location.href = 'tel:+353858300202';
    };

    return (
        <div className='home-footer'>
            <div className="manage-container position-relative">

                {showScrollButton && (
                    <div className='scroll-buttons'>
                        <button type='button' className={`top-scroll-btn ${showScrollButton ? 'show' : ''}`} onClick={scrollToTop}>
                            <GoArrowUp />
                        </button>
                    </div>
                )}

                <div className="row">
                    <div className="col-md-9 col-sm-8 mt-sm-4 mt-2">
                        <div className="footer-logo" ref={logoRef}>
                            <h6><strong>Web:</strong> <Link to="/" onClick={scrollToTop}>TintFx.ie</Link></h6>

                            <h6><strong>Email Info:</strong> <a href="mailto:Info@TintFx.ie">Info@TintFx.ie</a></h6>

                            <h6><strong>Tel:</strong> <a href="tel:+353858300202" onClick={callNow}>
                                +353858300202
                            </a></h6>

                            <h6><strong>Address:</strong> <a href="https://maps.app.goo.gl/6FwNWeaiL15fvfEf8" target="_blank" rel="noopener noreferrer">
                                Near Sam's Garage, Mill Ln, Navan Rd, Northside, Dublin 15, D15 R793
                            </a></h6>


                            <h6 className='appointDesc'><strong>Please Note:</strong> <span>Visits by appointment only.</span></h6>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4 mt-sm-4 mt-3">
                        <div className='footer-social' ref={logoRef}>
                            <div className="socialIcons">
                                <Link to="https://www.instagram.com/tintfx.ireland?igsh=YXhoZ3B4OGMxM3pi" className="socialIcon">
                                    <FaInstagram />
                                </Link>
                                <Link to="https://www.tiktok.com/@tintfx_ie?_t=ZN-8vVizJuQVvy&_r=1" className="socialIcon">
                                    <FaTiktok />
                                </Link>
                                <Link to="https://www.facebook.com/share/1ZRaG9427s/?mibextid=wwXIfr" className="socialIcon">
                                    <FaFacebookF />
                                </Link>
                                <div className="socialIcon" onClick={callNow}>
                                    <FaWhatsapp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerNav" ref={navRef}>
                    <div className="footerNavItem">
                        <Link to="/automotive">Services</Link>
                        <Link to="/gallery">Gallery</Link>
                        <a href="https://maps.app.goo.gl/6FwNWeaiL15fvfEf8" target="_blank" rel="noopener noreferrer">How to Find Us</a>
                        <a href="tel:+353858300202" onClick={callNow}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
