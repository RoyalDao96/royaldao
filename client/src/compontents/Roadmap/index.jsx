import React, { useState, useEffect } from 'react';
import './roadmap.css';
import imgRoadmapLarge from '../../assets/webImages/roadmap2.jpg';
import imgRoadmapSmall from '../../assets/webImages/roadmap2_small.jpg';

const Roadmap = () => {

  const [imageSrc, setImageSrc] = useState(window.innerWidth >= 768 ? imgRoadmapLarge : imgRoadmapSmall);

  useEffect(() => {
    const handleResize = () => {
      // Update the image source based on the window width
      if (window.innerWidth >= 768) {
        setImageSrc(imgRoadmapLarge);
      } else {
        setImageSrc(imgRoadmapSmall);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='roadmap_parent d-flex justify-content-center align-items-center'>
        <div className="col-12 col-md-8 text-center">
            <img src={imageSrc} alt='Roadmap' className="img-fluid w-100"/>
        </div>
    </div>
  )
}

export default Roadmap