import React from 'react'
import Header from '../components/Header/Header'
import VanBrandingHeroSection from '../components/VanBranding/VanBrandingHeroSection'
import VanBrandingSignsVehicle from '../components/VanBranding/VanBrandingSignsVehicle'
import VanBrandRequestAQuote from '../components/VanBranding/VanBrandRequestAQuote'
import HomeFooter from '../components/Footer/HomeFooter'

export default function VanBrandingSigns() {
    return (
        <div className='automotive-container'>
            <Header />
            <VanBrandingHeroSection/>
            <VanBrandingSignsVehicle/>
            <VanBrandRequestAQuote/>
            <HomeFooter/>
        </div>
    )
}
