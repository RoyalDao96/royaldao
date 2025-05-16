"use client"

import React from 'react';
import './Features2.css';
import { GlareCard } from '../ui/glare-card';

export default function Features2() {

  return (
    <div className='flex justify-center w-full mb-40 parent-ft2 relative'>
      <div className='flex flex-wrap items-center justify-center w-[90%]'>
          <div className='w-full sm:w-1/5 flex justify-center'>
              <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6">
                  <img
                      className="h-full w-full absolute inset-0 object-cover z-0"
                      src="./Logo3.jpg"
                  />
              </GlareCard>
          </div>

          <div className='w-full sm:w-1/5 flex justify-center ft-card'>
              <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6">
                  <p className="font-bold text-white text-lg" style={{ fontSize: "16px" }}>+12% APR Staking Reward</p>
                  <p className="font-normal text-base text-neutral-200 mt-4" style={{ fontSize: "12px" }}>
                    Non-inflationary rewards that come from the price appreciation of underlying RWAs and principal inflation protection.
                  </p>
              </GlareCard>
          </div>

          <div className='w-full sm:w-1/5 flex justify-center ft-card'>
              <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6">
                  <p className="font-bold text-white text-lg" style={{ fontSize: "16px" }}>Backing Index Fund (BIF)</p>
                  <p className="font-normal text-base text-neutral-200 mt-4" style={{ fontSize: "12px" }}>
                    The safest place to start your crypto investment journey with 100% principal protection and tokenize value appreciating asset.
                  </p>
              </GlareCard>
          </div>

          <div className='w-full sm:w-1/5 flex justify-center ft-card'>
              <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6">
                  <p className="font-bold text-white text-lg" style={{ fontSize: "16px" }}>Exclusive Rubies & Jades Auctions</p>
                  <p className="font-normal text-base text-neutral-200 mt-4" style={{ fontSize: "12px" }}>
                    Exclusive investment-grade Burmese rubies and jades auction for those holding a certain amount of $Grimstone The DAO tokens.
                  </p>
              </GlareCard>
          </div>

          <div className='w-full sm:w-1/5 flex justify-center ft-card'>
              <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6">
                  <p className="font-bold text-white text-lg" style={{ fontSize: "16px" }}>Instant Liquid Solution</p>
                  <p className="font-normal text-base text-neutral-200 mt-4" style={{ fontSize: "12px" }}>
                    A one-stop streamlined process to make any relevant RWA holders & properties to liquid with self-custodial service.
                  </p>
              </GlareCard>
          </div>
      </div>
    </div>
  )
}
