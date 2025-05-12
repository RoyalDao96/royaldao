import React, { useState, useEffect } from 'react';
import './strategy.css';
import imgStrategyLarge from '../../assets/webImages/strategy.jpg';  // Image for screens >= 768px
import imgStrategySmall from '../../assets/webImages/strategy2.jpg';  // Image for screens < 768px

const Strategy = () => {

  const [imageSrc, setImageSrc] = useState(window.innerWidth >= 768 ? imgStrategyLarge : imgStrategySmall);

  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on the window width
      if (window.innerWidth >= 768) {
        setImageSrc(imgStrategyLarge);
      } else {
        setImageSrc(imgStrategySmall);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='strategy_parent bg-white d-flex justify-content-center align-items-center'>
        <div className="col-12 col-md-8 text-center">
            <img src={imageSrc} alt='Roadmap' className="img-fluid"/>
        </div>
    </div>
  )
}

export default Strategy