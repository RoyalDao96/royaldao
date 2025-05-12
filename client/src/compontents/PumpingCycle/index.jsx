import React, { useEffect, useState } from 'react'
import './pumpingCycle.css';
import imgPumpLarge from '../../assets/webImages/pump.jpg';  // Image for screens >= 768px
import imgPumpSmall from '../../assets/webImages/pump2.jpg';  // Image for screens < 768px

const PumpingCycle = () => {

  const [imageSrc, setImageSrc] = useState(window.innerWidth >= 768 ? imgPumpLarge : imgPumpSmall);

  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on the window width
      if (window.innerWidth >= 768) {
        setImageSrc(imgPumpLarge);
      } else {
        setImageSrc(imgPumpSmall);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='pumpingCycle_parent bg-white d-flex justify-content-center align-items-center mt-5 vh-100'>
        <div className="col-12 col-md-8 text-center">
            <img src={imageSrc} alt='Pumping Cycle' className="img-fluid"/>
        </div>
    </div>
  )
}

export default PumpingCycle