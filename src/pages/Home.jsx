import React from 'react'
import Header from '../components/Header/Header'
import HomeHeroSection from '../components/Home/HomeHeroSection'
import TintFX from '../components/Home/TintFX'
import HomeFooter from '../components/Footer/HomeFooter'

export default function Home() {
  return (
    <main className='main'>
      <Header/>
      <HomeHeroSection/>
      <TintFX/>
      <HomeFooter/>
    </main>
  )
}
