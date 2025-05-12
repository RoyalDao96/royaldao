import React from 'react';
import './hub2.css';
import img1 from '../../assets/webImages/ruby_ring.jpg';

const Hub2 = () => {
  return (
    <div className='w-100 vh-100 parent-hub parent-hub2 d-flex align-items-center'>
        <div className='container'>
            <section className='about about2'>
                <div className="about-content about-content2">
                    <h2>Why Are We Doing RubyDAO?</h2>
                    <p>The Core Objective Of This Initiative Is To Alleviate The Plight Of Impoverished Local Miners, Who Endure Lifelong Hardship And Peril In Pursuit Of Treasures Yet Are Often Deprived Of Fair Market Remuneration, Receiving Anywhere From 60% To Over 90% Below Prevailing Market Rates. Additionally, RubyDAO Endeavors To Showcase The Transformative Potential Of Blockchain Technology In Realizing Tangible Real-World Assets, Exemplifying A Commendable Vanguard Within The Field.</p>
                </div>
                <div className="about-image about-image2">
                    <img src={img1} alt="Diamond Necklace" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Hub2