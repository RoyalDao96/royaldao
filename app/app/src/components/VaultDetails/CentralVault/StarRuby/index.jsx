import React, { useContext, useEffect } from 'react';
import './starRuby.css';
import img1 from '../../../../images/img2.png';
import img2 from '../../../../images/star_ruby250M_1.jpg';
import img3 from '../../../../images/star_ruby250M_2.jpg';
import { ActiveContext } from '../../../ActiveContext';

const StarRuby = () => {
    const { isActive } = useContext(ActiveContext);

    useEffect(() => {
        const allHoverImages = document.querySelectorAll('.hover-container div img');
        const imgContainer = document.querySelector('.img-container');

        if (allHoverImages.length > 0 && imgContainer) {
            allHoverImages[0].parentElement.classList.add('active');

            allHoverImages.forEach((image) => {
                image.addEventListener('mouseover', () => {
                    imgContainer.querySelector('img').src = image.src;
                    resetActiveImg();
                    image.parentElement.classList.add('active');
                });
            });
        }

        function resetActiveImg() {
            allHoverImages.forEach((img) => {
                img.parentElement.classList.remove('active');
            });
        }

        return () => {
            allHoverImages.forEach((image) => {
                image.removeEventListener('mouseover', () => {});
            });
        };
    }, []);

    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 'auto',
    };

    return (
        <div className='parent-vault-detail' style={parentVaultDetailStyle}>
            <div className='main-wrapper'>
                <div className='container'>
                    <div className='product-div'>
                        <div className='product-left'>
                            <div className='img-container'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='hover-container'>
                                <div>
                                    <img src={img1} alt="" />
                                </div>
                                <div>
                                    <img src={img2} alt="" />
                                </div>
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='product-div-right'>
                            <span className='product-name'>Burmese Star Ruby</span>
                            <p className='product-desc'>
                            Introducing an extraordinary gem of unparalleled value: a Burmese natural star ruby valued at approximately 150 million USD. Weighing an impressive 179.56 carats, this magnificent stone showcases the captivating beauty and rarity that Burmese rubies are renowned for. The star ruby's rich, vivid hue is enhanced by the unique asterism—a mesmerizing star-shaped pattern that dances across its surface when illuminated. Originating from the famed ruby mines of Burma (Myanmar), this gem is a true marvel of nature, combining exceptional size, striking color, and rare optical phenomena. Its remarkable characteristics make it a coveted treasure among gem collectors and connoisseurs, epitomizing the pinnacle of natural beauty and gemological wonder.
                            </p>

                            <div className='value-div-parent' align='center'>
                                <div className='value-div'>
                                    <h1>Value - $150M USD</h1>
                                </div>
                                <div className='value-div'>
                                    <h1>Mintable SST - 75M SST</h1>
                                </div>
                            </div>

                            <div className='mintable-div-parent' align='center'>
                                <div className='mintable-div'>
                                    0 SST / 75,000,000 SST
                                </div>
                            </div>

                            <div className='mint-div-parent' align='center'>
                                <button className='mint-btn'>Mint SST</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bottom-text-div' align='center'>
                <h1>*Only after reaching 80% of the asset value will the asset be transferred to the [Trust].</h1>
                <h1>*If the asset cannot be transferred or fulfilled within the predetermined timeframe, the backers will receive a refund accordingly.</h1>
            </div>
        </div>
    );
};

export default StarRuby;
