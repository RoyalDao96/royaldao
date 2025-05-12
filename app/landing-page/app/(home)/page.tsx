import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Phrase1 from './components/Phrase1'
import Features from './components/Features'
import ValueProposition from './components/ValueProposition'
import Phrase2 from './components/Phrase2'
import Reserves from './components/Reserves'
import Footer from './components/Footer'
import KPIs from './components/KPIs'
import Roadmap from './components/Roadmap'
import Features2 from './components/Features2'

export default function page() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='mx-auto'>
        <Navbar />
        <Hero />
        <KPIs />
        <Phrase1 />
        <Features />
        <ValueProposition />
        <Phrase2 />
        <Features2 />
        <Reserves />
        <Roadmap />
        <Footer />
      </div>
    </div>
  )
}
