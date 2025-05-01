import React from 'react'
import Header from '../components/Header/Header'
import ArchitecturalHeroSection from '../components/ArchitecturalService/ArchitecturalHeroSection'
import TintYourHome from '../components/ArchitecturalService/TintYourHome'
import ArchitectRequestAQuote from '../components/ArchitecturalService/ArchitectRequestAQuote'
import HomeFooter from '../components/Footer/HomeFooter'

export default function ArchitecturalService() {
    return (
        <div className='automotive-container'>
            <Header />
            <ArchitecturalHeroSection/>
            <TintYourHome/>
            <ArchitectRequestAQuote/>
            <HomeFooter/>
        </div>
    )
}
