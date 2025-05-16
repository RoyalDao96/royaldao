import React from 'react';
import './Phrase2.css'
import { TextGenerateEffect } from '../ui/text-generate-effect';

export default function Phrase2() {
    const words = `"The first-ever protocol that offers a non-zero guarantee with non-inflationary, ever appreciating asset."`;
  
    return (
      <div className='h-screen flex flex-col items-center justify-center w-full'>
        <div className='flex flex-col items-center justify-center parent-phrase2'>
          <div className='mt-3 phraseDesc w-full'><TextGenerateEffect words={words} /></div>
        </div>
      </div>
    );
}