import React, { useContext, useEffect, useState } from 'react';
import './HugeRuby.css';
import img1 from '../../../../images/img3.png';
import img2 from '../../../../images/800M_Ruby_1.jpg';
import { ActiveContext } from '../../../ActiveContext';
import usdt_abi from './usdt_abi';
import buySST_ABI from './buySST_ABI';
import gr_ABI from './GR_ABI';
import Web3 from 'web3';

const HugeRuby = () => {

    // Sepolia
    const USDT_ADDRESS = "0x1AbE91cEBF88412319646080599fDa6BAe23F258";
    const USDT_ABI = usdt_abi;

    // Sepolia
    const BUY_SST_ADDRESS = "0x419022bE2872431D0B6d7573C8C88c9fDa1b8DEF";
    const BUY_SST_ABI = buySST_ABI;

    // Sepolia
    const GR_ADDRESS = "0xEc15c8062bCc166fCC4D044D23D5207871E9b919";
    const GR_ABI = gr_ABI;
    
    const { isActive, walletAddress } = useContext(ActiveContext);
    const [buySSTAmount, setBuySSTAmount] = useState(null);
    const [totalSoldSST, setTotalSoldSST] = useState(null);

    const handleAmountToBuySST = (e) => {
        const value = e.target.value;
        setBuySSTAmount(value);
    }

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

        async function getSoldSST() {
            try {
                const web3 = new Web3(window.ethereum);
                const gr_contract = new web3.eth.Contract(GR_ABI, GR_ADDRESS);
                const balance = await gr_contract.methods.balanceOf(BUY_SST_ADDRESS).call({ from: walletAddress });
                
                // Convert the balance from wei to ether (handles the 18 decimal places)
                const balanceInEther = web3.utils.fromWei(balance, 'ether');
    
                const totalSold = 400000000 - balanceInEther;
                setTotalSoldSST(totalSold);
            } catch (error) {
                console.error('Error during token swap:', error.message || error);
            }
        }

        getSoldSST();

        return () => {
            allHoverImages.forEach((image) => {
                image.removeEventListener('mouseover', () => {});
            });
        };
    }, []);

    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 'auto',
    };

    async function buySST() {
        try {
            // Initialize Web3 with the Ethereum provider
            const web3 = new Web3(window.ethereum);
    
            // Assuming buy3kIETHAmount is a state variable, ensure it's accessible
            const amountToBuy = buySSTAmount; // make sure this variable is defined and holds the amount you want to swap
    
            // Amount in token2 (e.g., 3k IETH), converted to a BigNumber
            const buySSTAmountBN = web3.utils.toBN(web3.utils.toWei(amountToBuy.toString(), 'ether'));
            
            // Calculate the required token1 amount (e.g., USDT) based on the swap ratio
            const token1AmountToApprove = buySSTAmountBN.mul(web3.utils.toBN(2));
    
            // Instantiate contract instances
            const swap_contract = new web3.eth.Contract(BUY_SST_ABI, BUY_SST_ADDRESS);
            const staked_greenrock_contract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
            
            // Approve the contract to spend token1 (e.g., USDT) on behalf of the connected user
            await staked_greenrock_contract.methods.approve(BUY_SST_ADDRESS, token1AmountToApprove).send({ from: walletAddress });
    
            // Call the swap function of the contract
            await swap_contract.methods.swapToken1ToToken2(buySSTAmountBN).send({ from: walletAddress });
    
            setBuySSTAmount(0);
    
        } catch (error) {
            console.error('Error during token swap:', error.message || error);
        }
    }

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
                            </div>
                        </div>
                        <div className='product-div-right'>
                            <span className='product-name'>Giant Burmese Ruby</span>
                            <p className='product-desc'>
                                Introducing one of the most extraordinary discoveries in the world of precious stones: a 3.14kg purplish-red Burmese rough ruby. This colossal gem, hailing from the legendary ruby mines of Burma (Myanmar), stands as one of the largest rubies ever unearthed. Its striking purplish-red hue, coupled with its impressive size, makes it a remarkable specimen that captures the awe and admiration of gemologists and collectors alike. This rare find showcases the exceptional natural beauty and grandeur that Burmese rubies are renowned for, solidifying its place as a true treasure in the realm of gemstones.
                            </p>

                            <div className='value-div-parent' align='center'>
                                <div className='value-div'>
                                    <h1>Value - $800M USD</h1>
                                </div>
                                <div className='value-div'>
                                    <h1>Mintable SST - 400M SST</h1>
                                </div>
                            </div>
                        
                            <div className='mintable-div-parent' align='center'>
                                <div className='mintable-div'>
                                    {totalSoldSST} SST / 400,000,000 SST
                                </div>
                            </div>

                            <div className='mintable-div-parent' align='center'>
                                <input type="number" className="custom-input" onChange={handleAmountToBuySST} placeholder="Enter $Greenrock amount to mint"style={{ width: "100%", border: "2px solid #d1a875" }} />
                            </div>

                            <div className='mint-div-parent' align='center'>
                                <button className='mint-btn' onClick={buySST}>Mint SST</button>
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

export default HugeRuby;
