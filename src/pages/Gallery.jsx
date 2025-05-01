import React from 'react'
import Header from '../components/Header/Header'
import HomeFooter from '../components/Footer/HomeFooter'
import GalleryHeroSection from '../components/Gallery/GalleryHeroSection'
import GalleryContent from '../components/Gallery/GalleryContent'

export default function Gallery() {
    return (
        <div className='automotive-container'>
            <Header />
            <GalleryHeroSection/>
            <GalleryContent/>
            <HomeFooter />
        </div>
    )
}
