import React, { useEffect, useState } from 'react';
import './pillar.css';

const Pillar = () => {
    const [content, setContent] = useState('The Value Must Be Constant');
    const [animationClass, setAnimationClass] = useState('');
    const [activeButton, setActiveButton] = useState('Trade');
  
    const handleContentChange = (newContent, buttonName) => {
      setAnimationClass('fade-out');
      setActiveButton(buttonName);
      setTimeout(() => {
        setContent(newContent);
        setAnimationClass('fade-in');
      }, 350);
    };
  
    useEffect(() => {
      if (animationClass === 'fade-in') {
        const timer = setTimeout(() => {
          setAnimationClass('');
        }, 350);
        return () => clearTimeout(timer);
      }
    }, [animationClass]);
  
    return (
      <div className="about-app mb-5">
        <header className="about-app-header container">
          <h1 className="text-center pillar-title">The 4 Pillars of RoyalDAO</h1>
          <p className="text-center">The whole ecosystem of RoyalDAO will be based on the following four pillars of strategic value propositions without fail:</p>
          <div className="d-flex justify-content-center flex-wrap">
            <button className={`btn m-2 ${activeButton === 'Trade' ? 'btn-warning' : 'btn-dark'}`} onClick={() => handleContentChange('The Value Must Be Constant', 'Trade')}>The Value</button>
            <button className={`btn m-2 ${activeButton === 'Liquidity Pools' ? 'btn-warning' : 'btn-dark'}`} onClick={() => handleContentChange('The Investors Must Be Protected', 'Liquidity Pools')}>The Investor</button>
            <button className={`btn m-2 ${activeButton === 'Launch' ? 'btn-warning' : 'btn-dark'}`} onClick={() => handleContentChange('The Redemption Must Be Solvent', 'Launch')}>The Redemption</button>
            <button className={`btn m-2 ${activeButton === 'Transparency' ? 'btn-warning' : 'btn-dark'}`} onClick={() => handleContentChange('The Regulations Must Be Concerned', 'Transparency')}>The Regulation</button>
          </div>
          <div className="content-box mt-4">
            <p className={animationClass} data-text={content}>{content}</p>
          </div>
        </header>
      </div>
    );
}

export default Pillar;
