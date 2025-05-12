import React from 'react';
import './FooterBanner.css';

import img2 from '../../assets/webImages/img8.png';
import img3 from '../../assets/webImages/img7.png';
import img4 from '../../assets/webImages/img2.png';
import img5 from '../../assets/webImages/img3.png';
import img6 from '../../assets/webImages/img4.png';
import img7 from '../../assets/webImages/img5.png';
import img8 from '../../assets/webImages/img6.png';

const FooterBanner = () => {
  return (
    <div className='container-fluid footerBanner'>
      <div className='imageContainer'>
        <img src={img2} alt='Royal DAO Footer' />
        <img src={img3} alt='Royal DAO Footer' />
        <img src={img4} alt='Royal DAO Footer' />
        <img src={img5} alt='Royal DAO Footer' />
        <img src={img6} alt='Royal DAO Footer' />
        <img src={img7} alt='Royal DAO Footer' />
        <img src={img8} alt='Royal DAO Footer' />
      </div>

      <h1 className='joinText'>Join Your Once In A Lifetime Opportunity</h1>

      <div className='btnContainer'>
        <a href="#" target='_blank'>
          <button className='joinBtn'>Join Us</button>
        </a>
      </div>
    </div>
  )
}

export default FooterBanner