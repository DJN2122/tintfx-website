import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/images/big-logo.svg';
import { TbMenu } from "react-icons/tb";
import { gsap } from 'gsap';
import { IoIosClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

    // Scroll to top & close sidebar on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsSidebarOpen(false);
    }, [location]);

    // Animate sidebar using GSAP
    useEffect(() => {
        if (!gsap) return;

        const sidebar = sidebarRef.current;
        if (isSidebarOpen) {
            gsap.to(sidebar, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
            });
        } else {
            gsap.to(sidebar, {
                x: '100%',
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
            });
        }
    }, [isSidebarOpen]);

    // Close sidebar on outside click
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isSidebarOpen]);

    // Detect scroll to apply background to header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className={`main-header-container ${isSidebarOpen ? 'sidebar-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className='header-section'>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <TbMenu className='menu-icon' onClick={toggleSidebar} />

                {/* Sidebar */}
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
                    <IoIosClose className="close-icon" onClick={toggleSidebar} />
                    <ul className="sidebar-menu">
                        <li className="menu-item">
                            <Link to="/">Home</Link>
                        </li>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button accordionButton collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Services
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body p-0 menuBody">
                                        <li className="menu-item"><Link to="/automotive">Automotive</Link></li>
                                        <li className="menu-item"><Link to="/architectural-service">Architectural</Link></li>
                                        <li className="menu-item"><Link to="/vehicle-wraps">Vehicle Wrap</Link></li>
                                        <li className="menu-item"><Link to="/van-branding-signs">Van Branding & Signs</Link></li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li className="menu-item">
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
