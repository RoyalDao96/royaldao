import React, { useState } from 'react';
import './rubyProductDetails.css';
import img1 from '../../../assets/webImages/img7.png';
import img2 from '../../../assets/webImages/img6.png';
import img3 from '../../../assets/webImages/img8.png';
import img4 from '../../../assets/webImages/img2.png';

const RubyProductDetails = () => {
  const [activeImg, setActiveImg] = useState(img1); // Default active image
  const [showFullScreen, setShowFullScreen] = useState(false); // State to toggle full screen mode

  // Array of images for hover effect
  const images = [img1, img2, img3, img4];

  // Handle mouse over to change active image
  const handleMouseOver = (imgSrc) => {
    setActiveImg(imgSrc);
  };

  // Toggle the full screen mode
  const toggleFullScreen = () => {
    setShowFullScreen(!showFullScreen);
  };

  return (
    <div className='pd-parent-wrapper'>
      <div className='pd-wrapper' onClick={showFullScreen ? toggleFullScreen : undefined}>
        <div className="pd-container">
          <div className="pd-product-div">
            <div className="pd-product-div-left">
              <div className="pd-img-container" onClick={toggleFullScreen}>
                <img src={activeImg} alt='Ruby Ring' />
              </div>
              <div className='pd-hover-container'>
                {images.map((img, index) => (
                  <div key={index} className={activeImg === img ? 'active' : ''}>
                    <img src={img} onMouseOver={() => handleMouseOver(img)} alt="Ruby Ring" />
                  </div>
                ))}
              </div>
            </div>

            <div className='pd-product-div-right'>
              <span className='pd-product-name'>
                Exquisite Burmese Star Ruby Ring
              </span>
              <span className='pd-product-price'>
                $32,000,000 (Sample Price)
              </span>
              <p className="pd-product-description">
                Discover the timeless elegance of our Burmese Star Ruby Ring, a masterpiece of fine jewelry craftsmanship. Sourced from the renowned mines of Burma, this ring features a captivating star ruby, celebrated for its rare and enchanting asterism. The star ruby's deep, velvety red hue is beautifully complemented by a meticulously designed setting, crafted to enhance its natural allure.
                <br /><br />
                Each Burmese Star Ruby Ring is a testament to superior quality and luxury, making it an ideal choice for connoisseurs and collectors. The ring's sophisticated design ensures it stands out, whether worn as a statement piece or cherished as part of a treasured jewelry collection. Perfect for special occasions or as a unique gift, this ring symbolizes both elegance and refinement. Indulge in the splendor of our Burmese Star Ruby Ring and elevate your jewelry collection with this exquisite gem.
              </p>
              <div className="pd-btn-groups">
                <button type='button' className='pd-add-cart-btn'>Redeem Package</button>
              </div>
            </div>
          </div>
        </div>
        {showFullScreen && (
          <div className="fullscreen-container" onClick={toggleFullScreen}>
            <img src={activeImg} alt="Full Screen Ruby Ring" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RubyProductDetails;