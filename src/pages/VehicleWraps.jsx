import React from 'react'
import Header from '../components/Header/Header'
import VehicleHeroSection from '../components/VehicleWraps/VehicleHeroSection'
import WhyUseVehicleWraps from '../components/VehicleWraps/WhyUseVehicleWraps'
import VehicleRequestAQuote from '../components/VehicleWraps/VehicleRequestAQuote'
import HomeFooter from '../components/Footer/HomeFooter'

export default function VehicleWraps() {
    return (
        <div className='automotive-container'>
            <Header />
            <VehicleHeroSection/>
            <WhyUseVehicleWraps/>
            <VehicleRequestAQuote/>
            <HomeFooter/>
        </div>
    )
}
