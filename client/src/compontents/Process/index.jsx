import React, { useState, useEffect } from 'react';
import './process.css';
import imgProcessLarge from '../../assets/webImages/story.jpg';  // Image for screens >= 768px
import imgProcessSmall from '../../assets/webImages/story2.jpg';  // Image for screens < 768px

const Process = () => {
  const [imageSrc, setImageSrc] = useState(window.innerWidth >= 768 ? imgProcessLarge : imgProcessSmall);

  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on the window width
      if (window.innerWidth >= 768) {
        setImageSrc(imgProcessLarge);
      } else {
        setImageSrc(imgProcessSmall);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='process_parent bg-white d-flex justify-content-center align-items-center'>
      <div className="col-12 col-md-8 text-center">
        <img src={imageSrc} alt='Roadmap' className="img-fluid"/>
      </div>
    </div>
  );
}

export default Process;
