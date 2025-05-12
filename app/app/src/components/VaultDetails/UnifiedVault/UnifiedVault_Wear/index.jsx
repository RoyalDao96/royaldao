import React, { useContext, useEffect } from 'react';
import './JadeWear.css';
import img1 from '../../../../images/img_pkg_3.png';
import img2 from '../../../../images/BJ_UniVault_1M_Jewellery_1.jpg';
import img3 from '../../../../images/BJ_UniVault_1M_Jewellery_2.jpg';
import { ActiveContext } from '../../../ActiveContext';

const UnifiedVaultWearJade = () => {
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
                            <span className='product-name'>Exquisite Burmese Jade Jewellery</span>
                            <p className='product-desc'>
                                Burmese jade, renowned for its vibrant green hue and exquisite craftsmanship, stands as a symbol of elegance and prosperity. Originating from the rich jade mines of Myanmar, this precious stone has captivated gem enthusiasts and collectors worldwide. Its alluring color and exceptional quality make it highly sought after, particularly in the creation of fine jewelry. Each piece of Burmese jade jewelry not only showcases the stone's natural beauty but also embodies a timeless elegance and cultural significance. Whether set in intricate carvings or stunning jewelry designs, Burmese jade remains a treasured and luxurious choice, celebrated for its ability to convey purity, prosperity, and artistic excellence.
                            </p>

                            <div className='value-div-parent' align='center'>
                                <div className='value-div'>
                                    <h1>Value - 1M USD</h1>
                                </div>
                                <div className='value-div'>
                                    <h1>Mintable SST - 500K SST</h1>
                                </div>
                            </div>

                            <div className='mintable-div-parent' align='center'>
                                <div className='mintable-div'>
                                    0 SST / 500,000 SST
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

export default UnifiedVaultWearJade;
