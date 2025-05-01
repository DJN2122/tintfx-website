import React from 'react'
import Header from '../components/Header/Header'
import TintYouCar from '../components/Automotive/TintYouCar'
import RequestAQuote from '../components/Automotive/RequestAQuote'
import AutomotiveHeroSection from '../components/Automotive/AutomotiveHeroSection'
import HomeFooter from '../components/Footer/HomeFooter'

export default function Automotive() {
    return (
        <div className='automotive-container'>
            <Header />
            <AutomotiveHeroSection/>
            <TintYouCar />
            <RequestAQuote />
            <HomeFooter/>
        </div>
    )
}
