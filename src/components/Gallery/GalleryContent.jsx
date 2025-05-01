import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery1 from '../../assets/images/gallery/gallery1.jpg';
import Gallery2 from '../../assets/images/gallery/gallery2.jpg';
import Gallery3 from '../../assets/images/gallery/gallery3.jpg';
import Gallery4 from '../../assets/images/gallery/gallery4.jpg';
import Gallery5 from '../../assets/images/gallery/gallery5.jpg';
import Gallery6 from '../../assets/images/gallery/gallery6.jpg';
import Gallery7 from '../../assets/images/gallery/gallery7.jpg';
import Gallery8 from '../../assets/images/gallery/gallery8.jpg';
import Gallery9 from '../../assets/images/gallery/gallery9.jpg';
import Gallery10 from '../../assets/images/gallery/gallery10.jpg';
import Gallery11 from '../../assets/images/gallery/gallery11.jpg';
import Gallery12 from '../../assets/images/gallery/gallery12.jpg';
import Gallery13 from '../../assets/images/gallery/gallery13.jpg';
import Gallery14 from '../../assets/images/gallery/gallery14.jpg';
import Gallery15 from '../../assets/images/gallery/gallery15.jpg';
import Gallery16 from '../../assets/images/gallery/gallery16.jpg';
// import Gallery17 from '../../assets/images/gallery/gallery17.jpeg';
import Gallery18 from '../../assets/images/gallery/gallery18.jpeg';
import Gallery19 from '../../assets/images/gallery/gallery19.jpeg';
import Gallery20 from '../../assets/images/gallery/gallery20.jpeg';
import Gallery21 from '../../assets/images/gallery/gallery21.jpeg';
import Gallery22 from '../../assets/images/gallery/gallery22.jpeg';
import Gallery23 from '../../assets/images/gallery/gallery23.jpeg';
import Gallery24 from '../../assets/images/gallery/gallery24.jpeg';
import Gallery25 from '../../assets/images/gallery/gallery25.jpeg';
import Gallery26 from '../../assets/images/gallery/gallery26.jpeg';
import Gallery27 from '../../assets/images/gallery/gallery27.jpeg';
import Gallery28 from '../../assets/images/gallery/gallery28.jpeg';
import Gallery29 from '../../assets/images/gallery/gallery29.jpeg';
import Gallery30 from '../../assets/images/gallery/gallery30.jpeg';
import Gallery31 from '../../assets/images/gallery/gallery31.jpeg';
import Gallery32 from '../../assets/images/gallery/gallery32.jpeg';
import Gallery33 from '../../assets/images/gallery/gallery33.jpeg';
import Gallery34 from '../../assets/images/gallery/gallery34.jpg';

import { IoClose } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  Gallery33, Gallery1, Gallery2, Gallery29, Gallery3, Gallery4, Gallery5, Gallery6,
  Gallery7, Gallery8, Gallery31, Gallery9, Gallery10, Gallery11, Gallery12,
  Gallery13, Gallery14, Gallery15, Gallery16, Gallery18, Gallery19, Gallery20, Gallery21, Gallery22,
  Gallery23, Gallery24, Gallery25, Gallery26,Gallery27, Gallery28, Gallery30, Gallery32, Gallery34,
];

export default function GalleryContent() {
  const [showAll, setShowAll] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
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
  }, [showAll]);

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalImage]);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  return (
    <div className="gallery-section">
      <div className="manage-container">
        <h1 className="main-title" ref={titleRef}><span>gallery</span></h1>
        <p className="sub-title" ref={subtitleRef}>
          Monochrome Mastery — A Showcase of Precision, Style, and Craftsmanship.
        </p>

        <div className="row mt-lg-5 mt-4 pb-4">
          {visibleImages.map((imgSrc, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mt-4">
              <div
                className="gallery-card"
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => setModalImage(imgSrc)}
              >
                <img src={imgSrc} alt={`Gallery ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-sm-5 mt-4 text-center" ref={buttonRef}>
            <button className="secBtn" onClick={() => setShowAll(true)}>
              View Gallery
            </button>
          </div>
        )}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setModalImage(null)}>
              <IoClose />
            </button>
            <img src={modalImage} alt="Full View" />
          </div>
        </div>
      )}
    </div>
  );
}
