import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Car1 from '../../assets/images/car1.svg';
import Car2 from '../../assets/images/car2.svg';
import Car3 from '../../assets/images/car3.svg';
import Car4 from '../../assets/images/car4.jpg';
import Icon1 from '../../assets/images/icon1.svg';
import Icon2 from '../../assets/images/icon2.svg';
import Icon3 from '../../assets/images/icon3.svg';
import Icon4 from '../../assets/images/icon4.svg';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
import { FaArrowRight } from "react-icons/fa6";

export default function TintFX() {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const servicesHeadingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) {
            console.error('GSAP or ScrollTrigger is not loaded');
            return;
        }

        // Animate Title
        gsap.fromTo(
            titleRef.current,
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
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animate Description
        gsap.fromTo(
            descRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2, // Slight delay after title
                scrollTrigger: {
                    trigger: descRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animate Services Heading
        gsap.fromTo(
            servicesHeadingRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.4, // Slight delay after description
                scrollTrigger: {
                    trigger: servicesHeadingRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animate Cards
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className='tint-fx-section'>
            <div className="manage-container">
                <div className="row">
                    <div className="col-lg-6 mt-md-3">
                        <div className="tint-fx-title">
                            <h2 ref={titleRef}><span>Welcome</span> <span>to</span> <span className='sp-1'>TintF<span className='sp-2'>X</span> </span></h2>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-md-3 mt-2">
                        <p className='tintFxDesc' ref={descRef}>
                            TintFX offers premium tinting and branding solutions for vehicles and properties. With a focus on sleek aesthetics, cutting-edge technology, and high-quality craftsmanship, we help you transform and protect your car, van, or building.
                        </p>
                    </div>
                </div>
                <h1 ref={servicesHeadingRef} className="main-title"> <span>Services</span> <span>we</span> <span>provide</span></h1>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-xl-4 mt-sm-5 mt-2">
                        <Link to="/automotive"
                            className="tint-fx-card"
                        >
                            <img src={Car1} alt="" className="img-fluid carImage" />
                            <h3> <span>Automotive</span> <span>Window</span>  <span>Tinting</span></h3>
                            <button className="learn-more-btn">More Info <FaArrowRight /></button>

                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-xl-4 mt-sm-5 mt-2">
                        <Link to="/vehicle-wraps"
                            className="tint-fx-card"
                        >
                            <img src={Car2} alt="" className="img-fluid carImage" />
                            <h3> <span>Full</span> <span>Wrap</span>  <span>and</span> <span>Detailing</span></h3>
                            <button className="learn-more-btn">More Info <FaArrowRight /></button>

                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-xl-4 mt-sm-5 mt-2">
                        <Link to="/architectural-service"
                            className="tint-fx-card"
                        >
                            <img src={Car3} alt="" className="img-fluid carImage" />
                            <h3> <span>Architectu-ral</span></h3>
                            <button className="learn-more-btn">More Info <FaArrowRight /></button>

                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-xl-4 mt-sm-5 mt-2">
                        <Link to="/van-branding-signs"
                            className="tint-fx-card"
                        >
                            <img src={Car4} alt="" className="img-fluid carImage" />
                            <h3> <span>Van</span> <span>Branding</span></h3>
                            <button className="learn-more-btn">More Info <FaArrowRight /></button>

                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}