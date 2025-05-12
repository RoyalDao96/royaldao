import React from 'react';
import { FlipWordsHero } from './heroText';
import './Hero.css';
import { BackgroundBeams } from '../ui/background-beams';
import Image from 'next/image';
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center w-full hero-parent" id='home'>
        <h1 className="text-6xl font-bold text-center title" style={{ zIndex: "9999" }}>A Token 100% Backed by Rubies and Jades</h1>
        <FlipWordsHero />

        <aside className="flex items-center gap-4" style={{ zIndex: "9999" }}>
          <Link
            href="#" 
            target="_blank"
            >
            <button className="p-[3px] relative w-60">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Get Started
              </div>
            </button>
          </Link>
        </aside>

        {/* <div className='hero-child'>
          <div className='grid-item image-container'>
            <Image
              src='/heroImg.png'
              width={500}
              height={500}
            />
          </div>

          <div className='grid-item content-container'>
            <h1 className="text-6xl font-bold text-left title">A Token 100% Backed by Rubies and Jades</h1>
            <FlipWordsHero />
          </div>
        </div> */}

        <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
          <img 
            src='/heroBG.png' 
            width={500} 
            height={500} 
            className="blur-sm imgHero" 
            style={{ zIndex: "999" }}
            alt='hero image' />
        </div>
      </div>
      <BackgroundBeams />
  </>
  )
}
