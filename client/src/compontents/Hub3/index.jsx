import React from 'react';
import './hub3.css';
import img1 from '../../assets/webImages/emerald.jpg';

const Hub3 = () => {
  return (
    <div className='w-100 vh-100 parent-hub parent-hub3 d-flex align-items-center'>
        <div className='container'>
            <section className='about about1'>
                <div className="about-image">
                    <img src={img1} alt="Diamond Necklace" />
                </div>
                <div className="about-content">
                    <h2>Media Illumination & Our Mission</h2>
                    <p>Through Garnering Substantial Media Attention, This Project Endeavors To Elucidate The Viability Of Secure And Profitable Engagement Within Real World Asset (RWA)-Based Blockchain Initiatives, Thereby Fostering Broader Adoption And Liquidity Within The Network. Consequently, The Democratization Of Wealth Distribution, Even Within The Realm Of Traditional Assets, Becomes An Attainable Reality.</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Hub3