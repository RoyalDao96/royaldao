import React from 'react';
import './VP.css';
import Image from 'next/image';
import { FocusCards } from '../ui/focus-cards';

export default function ValueProposition() {

  const cards = [
    {
      title: "Value Must Be Constant",
      src: "/vp_2.webp",
    },
    
    {
      title: "Investors Must Be Protected",
      src: "/vp_4.webp",
    },

    {
      title: "Redemption Must Be Solvent",
      src: "/vp_3.webp",
    },

    {
      title: "Regulations Must Be Concerned",
      src: "/vp_1.webp",
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center w-full mt-40 parent-vp relative'>
      <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white'>
        Our Value Propositions
      </h4>
      <div className='parent-value relative z-10'>
        <FocusCards cards={cards} />
      </div>
      <div className='radiating-circle absolute'></div> {/* Add the radiating circle */}
    </div>
  )
}
