import React, { useContext, useEffect } from 'react';
import './Jade.css';
import img1 from '../../../../images/img4.png';
import img2 from '../../../../images/burmese_jade_100M_1.jpg';
import img3 from '../../../../images/burmese_jade_100M_2.jpg';
import img4 from '../../../../images/burmese_jade_100M_3.jpg';
import { ActiveContext } from '../../../ActiveContext';

const Jade = () => {
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
                                <div>
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='product-div-right'>
                            <span className='product-name'>Burmese Jade</span>
                            <p className='product-desc'>
                            Introducing a gem of monumental significance: a Burmese jade stone valued at approximately 100 million USD. Weighing an astonishing 950 kg, this jade exemplifies the supreme quality and grandeur of stones sourced from Burma (Myanmar). Notably, the optic group and nature of this jade are anisotropic and aggregate, highlighting its unique internal structure and light-reflecting properties. This colossal stone's vibrant green hue and immense size make it a standout piece in the world of precious stones. Revered for its beauty and rarity, this Burmese jade is not only a symbol of natural splendor but also a coveted treasure among collectors and enthusiasts, representing the pinnacle of jade craftsmanship and gemological excellence.
                            </p>

                            <div className='value-div-parent' align='center'>
                                <div className='value-div'>
                                    <h1>Value - $100M USD</h1>
                                </div>
                                <div className='value-div'>
                                    <h1>Mintable SST - 50M SST</h1>
                                </div>
                            </div>

                            <div className='mintable-div-parent' align='center'>
                                <div className='mintable-div'>
                                    0 SST / 50,000,000 SST
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

export default Jade;
