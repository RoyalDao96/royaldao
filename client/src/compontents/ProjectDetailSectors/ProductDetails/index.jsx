import React, { useState } from 'react';
import './productDetails.css';
import img1 from '../../../assets/webImages/img_pkg_3.png';
import img2 from '../../../assets/webImages/img_pkg_2.png';
import img3 from '../../../assets/webImages/img_pkg_1.png';
import img4 from '../../../assets/webImages/img_pkg_4.png';

const ProductDetails = () => {
  const [activeImg, setActiveImg] = useState(img1); // Default active image
  const [showFullScreen, setShowFullScreen] = useState(false); // State to toggle full screen mode

  // Array of images for hover effect
  const images = [img1, img2, img4];

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
                Exquisite Burmese Jade Earrings and Rings
              </span>
              <span className='pd-product-price'>
                $7,000,000 (Sample Price)
              </span>
              <p className="pd-product-description">
                Discover the timeless elegance of our exclusive collection featuring Burmese jade earrings and rings. Each piece, sourced from the legendary jade mines of Burma, is meticulously crafted to showcase the unique beauty and deep, vibrant hues of this precious gemstone. Renowned for its durability and symbolic significance, Burmese jade is considered a treasure in gemology. Our collection offers a range of styles from classic to contemporary, designed to enchant those who appreciate luxury and sustainably sourced gems. Explore the allure of Burmese jade and invest in jewelry that grows more captivating with time.
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

export default ProductDetails;