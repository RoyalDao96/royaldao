import React, { useEffect, useState } from 'react';
import './tokenomic.css';
import imgTokenomicLarge from '../../assets/webImages/tokenomic.jpg';  // Image for screens >= 768px
import imgTokenomicSmall from '../../assets/webImages/tokenomic2.jpg';  // Image for screens < 768px

const Tokenomic = () => {

  const [imageSrc, setImageSrc] = useState(window.innerWidth >= 768 ? imgTokenomicLarge : imgTokenomicSmall);

  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on the window width
      if (window.innerWidth >= 768) {
        setImageSrc(imgTokenomicLarge);
      } else {
        setImageSrc(imgTokenomicSmall);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='tokenomic_parent d-flex justify-content-center align-items-center mt-5 vh-100'>
        <div className="col-12 col-md-8 text-center">
            <img src={imageSrc} alt='Tokenomic' className="img-fluid"/>
        </div>
    </div>
  )
}

export default Tokenomic