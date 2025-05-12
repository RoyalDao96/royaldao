import React from 'react';
import img1 from '../images/star.png';
import img2 from '../images/ruby.png';
import './bottomComponent.css';

const BottomComponent = () => {
  return (
    <div className='parent-bottom'>
        <div className='bottom'>
            <img src={img1} className='star' alt='Burmese Star Ruby' />
            <div className='middle'>
                <h1>Stably Profitable at Scale</h1>
                <a href='https://manymarkup.com/' target='_blank'>manymarkup.com</a>
            </div>
            
            <img src={img2} className='ruby' alt='Burmese Ruby' />
        </div> 
    </div>
  )
}

export default BottomComponent