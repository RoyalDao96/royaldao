import React, { useContext, useEffect } from 'react';
import './Jade.css';
import img1 from '../../../../images/img_pkg_1.png';
import img2 from '../../../../images/BJ_UniVault_10_1M_1.jpg';
import img3 from '../../../../images/BJ_UniVault_10_1M_2.jpg';
import img4 from '../../../../images/BJ_UniVault_10_1M_3.jpg';
import { ActiveContext } from '../../../ActiveContext';

const UnifiedVaultJade = () => {
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
                            Burmese natural jade, also known as jadeite, is esteemed worldwide for its vibrant green color and exceptional quality. Originating from Myanmar, this precious stone is highly sought after for crafting fine jewelry and intricate sculptures. Renowned for its rich, vivid hue and exquisite craftsmanship potential, Burmese jade stands as a symbol of elegance and luxury. Whether set in stunning jewelry pieces or carved into beautiful artworks, this jadeite remains a treasured choice for collectors and connoisseurs alike, embodying the unparalleled beauty and cultural significance of Myanmar's gemstone heritage.
                            </p>

                            <div className='value-div-parent' align='center'>
                                <div className='value-div'>
                                    <h1>Value - $10.1M USD</h1>
                                </div>
                                <div className='value-div'>
                                    <h1>Mintable SST - 5.05M SST</h1>
                                </div>
                            </div>

                            <div className='mintable-div-parent' align='center'>
                                <div className='mintable-div'>
                                    0 SST / 5,050,000 SST
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

export default UnifiedVaultJade;
