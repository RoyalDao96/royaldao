import React from 'react';
import './htr.css';
import imgHowToRedeem1 from '../../assets/webImages/HTR.png';
import imgHowToRedeem2 from '../../assets/webImages/redeem2.png';

const HowToRedeem = () => {
  return (
    <div className='HTR_parent d-flex justify-content-center align-items-center mt-5'>
        <div className="col-12 col-md-8 text-center">
            <img src={imgHowToRedeem1} alt='How To Redeem' className="img-fluid"/>
            <img src={imgHowToRedeem2} alt='How To Redeem' className="img-fluid mt-5"/>
        </div>
    </div>
  )
}

export default HowToRedeem