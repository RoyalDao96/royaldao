import React, { useContext, useEffect, useState } from 'react';
import './AuctionDetails.css';
import { ActiveContext } from '../ActiveContext';
import Slider from "react-slick"; 
import img1 from '../../images/img2.png';
import img2 from '../../images/imgSR.JPG';
import img3 from '../../images/imgSR2.JPG';
import img4 from '../../images/img8.png';
import AGS_ABI from './AGS_ABI';
import AC_ABI from './AC_ABI';
import usdt_abi from './usdt_abi';
import Web3 from 'web3';

const AuctionDetails = () => {

    const AUCTION_GRIMSTONE_ADDRESS = "0x8Bd68B04974f9876504146F313d04908360DC389";
    const AUCTION_GRIMSTONE_ABI = AGS_ABI;

    const AUCTION_CONTRACT_ADDRESS = "0x3E090F25462D587776cc36F9eee74B781A2c3050";
    const AUCTION_CONTRACT_ABI = AC_ABI;

    const USDT_ADDRESS = "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06";
    const USDT_ABI = usdt_abi;

    const { isActive, walletAddress } = useContext(ActiveContext);

    const [timeLeft, setTimeLeft] = useState(0);
    const [isCountdownActive, setIsCountdownActive] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const [aGSBalance, setaGSBalance] = useState(0);
    const [activeTab, setActiveTab] = useState('Specs');
    const [highestBidder, setHighestBidder] = useState(null);

    const [highestBid, setHighestBid] = useState(0);
    const [userBidUSDT, setUserBidUSDT] = useState(0);

    const [ended, setEnded] = useState(false);
    const [bidInPercent, setBidInPercent] = useState(null);
    const [bidInNumber, setBidInNumber] = useState(null);

    const countdownDuration = 21 * 24 * 60 * 60 * 1000;

    useEffect(() => {
        // Check if there's already a countdown start time saved in localStorage
        const storedStartTime = localStorage.getItem("countdownStartTime");
        if (storedStartTime) {
          const remainingTime = calculateRemainingTime(storedStartTime);
          if (remainingTime > 0) {
            setTimeLeft(remainingTime);
            setIsCountdownActive(true);
          } else {
            localStorage.removeItem("countdownStartTime");
          }
        }
    }, []);
    
    useEffect(() => {
        let timer;
    
        if (isCountdownActive) {
          timer = setInterval(() => {
            const remainingTime = calculateRemainingTime(localStorage.getItem("countdownStartTime"));
            if (remainingTime <= 0) {
              clearInterval(timer);
              setTimeLeft(0);
              setIsCountdownActive(false);
              localStorage.removeItem("countdownStartTime");
            } else {
              setTimeLeft(remainingTime);
            }
          }, 1000);
        }
    
        return () => {
          clearInterval(timer);
        };
    }, [isCountdownActive]);
    
    const calculateRemainingTime = (startTime) => {
        const currentTime = Date.now();
        const targetTime = new Date(parseInt(startTime)).getTime() + countdownDuration;
        return targetTime - currentTime;
    };
    
    const startCountdown = () => {
        const startTime = Date.now();
        localStorage.setItem("countdownStartTime", startTime.toString());
        setIsCountdownActive(true);
        setTimeLeft(countdownDuration);
    };

    const resetCountdown = () => {
        setIsCountdownActive(false);
        setTimeLeft(0);
        localStorage.removeItem("countdownStartTime");
    };
    
    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
    
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    // Update the z-index based on the isOpen state
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    const images = [img1, img2, img3, img4];

    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const openModal = (image) => {
        console.log("Image clicked!", image); // Debugging with console
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    function unexpandSpecAndDesc() {
        setActiveTab('null');
    }

    const handleBidInPercent = (e) => {
        const value = e.target.value;
        setBidInPercent(value);
    }

    const handleBidInNumber = (e) => {
        const value = e.target.value;
        setBidInNumber(value);
    }

    async function isEndedOrNot() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(AUCTION_CONTRACT_ABI, AUCTION_CONTRACT_ADDRESS);
            const ended = await contract.methods.ended().call();
            setEnded(ended);
        } catch (error) {
            console.error(error);
        }
    }

    // Checking the balance of the connected. The connected wallet is coming from ActiveContext but connected
    // in navbar
    async function getAGSBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(AUCTION_GRIMSTONE_ABI, AUCTION_GRIMSTONE_ADDRESS);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setaGSBalance(web3.utils.fromWei(balance, 'ether'));
            
        } catch (error) {
            console.error(error);
        }
    }

    async function getHighestBidder() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(AUCTION_CONTRACT_ABI, AUCTION_CONTRACT_ADDRESS);
            const highestBidder = await contract.methods.viewHighestBidder().call();
            setHighestBidder(highestBidder);
        } catch (error) {
            console.error(error);
        }
    }

    async function getHighestBid() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(AUCTION_CONTRACT_ABI, AUCTION_CONTRACT_ADDRESS);
            const highestBid = await contract.methods.viewHighestBid().call();
            setHighestBid(highestBid);

        } catch (error) {
            console.error(error);
        }
    }

    async function getUserBidUSDT() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(AUCTION_CONTRACT_ABI, AUCTION_CONTRACT_ADDRESS);
            const userBid = await contract.methods.viewUserBidUSDT(walletAddress).call();
            setUserBidUSDT(userBid);
        } catch (error) {
            console.error(error);
        }
    }
    // Still need to getUserBidUSDC() function same as above function

    // async function bidUSDTInPercent() {
    //     try {
    //         const web3 = new Web3(window.ethereum);

    //         // Convert highestBid and bidInPercent to BigNumbers
    //         const highestBidBN = web3.utils.toBN(highestBid);
    //         const bidInPercentBN = web3.utils.toBN(bidInPercent);

    //         // Calculate the increment value as (highestBid * bidInPercent) / 100
    //         const incrementValue = highestBidBN.mul(bidInPercentBN).div(web3.utils.toBN(100));

    //         // Calculate the new amount
    //         const newAmount = highestBidBN.add(incrementValue);

    //         const contract = new web3.eth.Contract(AUCTION_CONTRACT_ABI, AUCTION_CONTRACT_ADDRESS);
    //         const usdt_contract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);

    //         // Approve the contract to spend USDT tokens on behalf of the connected user
    //         await usdt_contract.methods.approve(AUCTION_CONTRACT_ADDRESS, newAmount).send({ from: walletAddress });
    //         await contract.methods.bidUSDT(newAmount).send({ from: walletAddress });

    //         setBidInPercent(0);

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        getAGSBalance();
        getHighestBidder();
        getHighestBid();
        getUserBidUSDT();
        isEndedOrNot();
    });
    
    const tabs = ['Specs', 'Description', 'Live Bidding'];

    return (
        <div className='auction-parent' style={parentVaultDetailStyle}>
            <div className='tradeBox'>
                
                <div className='countdown-parent'>
                    <p className='cd-text'>{timeLeft > 0 ? formatTime(timeLeft) : "Countdown complete!"}</p>

                    <div className='bid-parent'>
                        <div className='bid-item'>
                            <h1>Highest Bidder</h1>
                            <p>{highestBidder}</p>
                        </div>
                        <div className='bid-item'>
                            <h1>Highest Bid</h1>
                            <p>{parseFloat(highestBid / 1e6).toLocaleString()} USDT</p>
                        </div>
                    </div>
                        
                    <div className='cd-gallery'>
                        <div className='parent-img-slider'>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index}>
                                     <img 
                                        src={image} 
                                        alt={`Slide ${index + 1}`} 
                                        onClick={() => openModal(image)} 
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            ))}
                        </Slider>
                        </div>
                        
                        <div className="tabs specs-desc-tab">
                            {tabs.map(tab => (
                                <button 
                                    key={tab} 
                                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'Specs' && (
                            <>
                                <p className='cd-title'>Burmese Star Ruby</p>
                                <ul className='specs-list'>
                                    <li>Weight: 179.88 carats</li>
                                    <li>Dimensions: 31.80 x 27.50 x 18.08 mm</li>
                                    <li>Cut: Cabochon</li>
                                    <li>Shape: Oval</li>
                                    <li>Color: Vivid purplish-red</li>
                                    <li>Transparency: Near transparent</li>
                                    <li>Inclusions: Rutile clouds (silk)</li>
                                    <li>Treatment: None (No indication of thermal treatment)</li>
                                    <li>Origin: Burmese mines</li>
                                    <li>Special Note: No artificial enhancements</li>
                                </ul>
                                <button onClick={unexpandSpecAndDesc} style={{ marginTop: '20px', fontWeight: 'bold' }}>Close Specs</button>
                            </>
                        )}
                        
                        {activeTab === 'Description' && (
                            <>
                                <p className='cd-title'>Burmese Star Ruby</p>
                                <p className='cd-desc'>
                                    The Natural Burmese Star Ruby is a remarkable gemstone, weighing an impressive 179.88 carats. This extraordinary gem measures 31.80 x 27.50 x 18.08 mm and is crafted in a cabochon cut, partially polished to showcase its natural beauty. Its oval shape perfectly complements the stone's captivating vivid purplish-red hue, a color that exudes both warmth and elegance.
                                    <br /><br />One of the most striking features of this ruby is its near transparency, a quality that enhances its overall allure. When examined under magnification, delicate rutile clouds can be seen, adding a unique texture to the gemstone. These inclusions are often referred to as "silk" and are indicative of the ruby's natural origin.
                                    <br /><br />Notably, this star ruby has no indication of thermal treatment, a significant factor that preserves its natural state and value. The absence of any artificial enhancements makes this gem even more precious and desirable. Originating from the famed Burmese mines, known for producing some of the world's finest rubies, this gem is a true masterpiece of nature, embodying the rare combination of size, color, and natural beauty.
                                    <br /><br /> 
                                    <button onClick={unexpandSpecAndDesc} style={{ fontWeight: 'bold' }}>Close Description</button>
                                </p>
                            </>
                        )}

                        {activeTab === 'Live Bidding' && (
                            <>
                                <div class="table-container">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Address</th>
                                            <th>Bids</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>295,000,000 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>294,100,000 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>293,500,000 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>285,000,000 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>282,800,000 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>281,000,000 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>0x00000000000000000000000000000000000000</td>
                                            <td>280,700,000 USDT</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>

                    <div className='bid-parent'>
                        {/* <div className='bid-item'>
                            <h1>Your Total USDC Bid</h1>
                            <p>0</p>
                        </div> */}
                        <div className='bid-item'>
                            <h1>Highest Bid</h1>
                            <p>{parseFloat(highestBid / 1e6).toLocaleString()}</p>
                        </div>
                        <div className='bid-item'>
                            <h1>Your Total USDT Bid</h1>
                            <p>{parseFloat(userBidUSDT / 1e6).toLocaleString()}</p>
                        </div>
                    </div>
                    
                    {
                        ended ? (
                            <button className="custom-button" style={{ width: '100%' }}>
                                Withdraw
                            </button>
                        ) : (
                            <div className="bid-input-parent">
                                <div className="input-button-wrapper">
                                    <button className="custom-button" disabled={aGSBalance < 5000}>Outbid in %</button>
                                    <input type="number" className="custom-input" disabled={aGSBalance < 5000} onChange={handleBidInPercent} placeholder="Enter 5 to outbid the highest bid by 5%" />
                                </div>
                                <div className="input-button-wrapper">
                                    <input type="number" className="custom-input" disabled={aGSBalance < 5000} onChange={handleBidInNumber} placeholder="Enter 1000 to outbid the highest by 1000" />
                                    <button className="custom-button" disabled={aGSBalance < 5000}>Outbid in USD</button>
                                </div>
                            </div>
                        )
                    }

                </div>

                {/* <div>
                    <button onClick={startCountdown} disabled={isCountdownActive}>Start Countdown</button>
                    <button onClick={resetCountdown} disabled={!isCountdownActive}>Reset Countdown</button>
                </div> */}
            </div>

            {/* Modal for zoomed image */}
            {modalImage && (
                <div className="modal active" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="Zoomed" />
                </div>
            )}
        </div>
    )
}

export default AuctionDetails