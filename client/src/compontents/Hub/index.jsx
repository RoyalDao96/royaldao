import React from 'react';
import './hub.css';
import img1 from '../../assets/webImages/ruby_necklace.jpg';

const Hub = () => {
  return (
    <div className='w-100 vh-100 parent-hub parent-hub1 d-flex align-items-center'>
        <div className='container'>
            <section className='about about1'>
                <div className="about-image">
                    <img src={img1} alt="Diamond Necklace" />
                </div>
                <div className="about-content">
                    <h2>What Is RubyDAO?</h2>
                    <p>RubyDAO Represents A Pioneering Base Chain Based Blockchain Endeavor Uniquely Substantiated By Tangible Treasure Assortments Encompassing Jade, Ruby, Sapphire, Diamond, Gold, Among Others. Each Assortment Is Characterized By Distinct Quality, Size, And Composition, Reflective Of Their Inherent Market Worth. The Authenticity And Valuation Of These Backing Assets Are Meticulously Verified By Accredited Professionals, With Complete Transparency Ensured Through Public Disclosure.</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Hub