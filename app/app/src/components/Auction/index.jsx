import React, { useContext, useEffect, useState } from 'react';
import './Auction.css';
import { ActiveContext } from '../ActiveContext';
import { Link } from 'react-router-dom';
import img0 from '../../images/img2.png';
import img1 from '../../images/cv_4.webp';
import img2 from '../../images/cv_5.webp';
import img3 from '../../images/cv_6.webp';
import img4 from '../../images/img_pkg_2.png';
import img5 from '../../images/t2_j1.webp';
import img6 from '../../images/t2_j2.webp';
import img7 from '../../images/t3_r1.webp';
import img8 from '../../images/t3_r2.webp';
import img9 from '../../images/t3_r3.webp';
import img10 from '../../images/uv_4.webp';
import img11 from '../../images/uv_5.webp';
import img12 from '../../images/t4_r3.webp';
import img13 from '../../images/t5_r1.webp';
import img14 from '../../images/t5_r3.webp';

const Auction = () => {

    const { isActive, walletAddress } = useContext(ActiveContext);
    const [activeTab, setActiveTab] = useState('Tier 1');

    // Update the z-index based on the isOpen state
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    const tabs = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'];

    return (
        <div className='auction-parent1' style={parentVaultDetailStyle}>
            <div className='tradeBox'>
                <div className="tabs">
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

                {activeTab === 'Tier 1' && (
                    <div className='lot-parent test'>
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img4} alt="Burmese Jade Ring" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Jade Ring</p>
                                <p className="item-price">Floor Price - $10M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img5} alt="Burmese Jade" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Jade</p>
                                <p className="item-price">Floor Price - $1.2M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img6} alt="Burmese Jade" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Jade</p>
                                <p className="item-price">Floor Price - $1.2M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>
                    </div>
                )}
                
                {activeTab === 'Tier 2' && (
                    <div className='lot-parent test'>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img1} alt="Burmese Ruby Ring" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Ring</p>
                                <p className="item-price">Floor Price - $41.2M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img2} alt="Burmese Jade Ring" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Jade Ring</p>
                                <p className="item-price">Floor Price - $22.7M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img3} alt="Burmese Jade Ring" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Ring</p>
                                <p className="item-price">Floor Price - $35.12M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Tier 3' && (
                    <div className='lot-parent test'>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img7} alt="Burmese Ruby" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby</p>
                                <p className="item-price">Floor Price - $105M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img8} alt="Burmese Ruby" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby</p>
                                <p className="item-price">Floor Price - $85M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img9} alt="Burmese Ruby Bracelet" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Bracelet</p>
                                <p className="item-price">Floor Price - $92M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Tier 4' && (
                    <div className='lot-parent test'>
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img10} alt="Burmese Jade Necklace" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Jade Necklace</p>
                                <p className="item-price">Floor Price - $123M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img11} alt="Burmese Ruby Necklace" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Necklace</p>
                                <p className="item-price">Floor Price - $193M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img12} alt="Burmese Ruby Bracelet" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Bracelet</p>
                                <p className="item-price">Floor Price - $144M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Tier 5' && (
                    <div className='lot-parent test'>
                        <div className="card">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Live <span class="green-dot"></span></span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img0} alt="Burmese Star Ruby" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Star Ruby</p>
                                <p className="item-price">Floor Price - $250M USD</p>
                                <Link to='/auction-star-ruby' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img13} alt="Burmese Star Ruby" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Necklace</p>
                                <p className="item-price">Floor Price - $250M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>

                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>On Going</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img14} alt="Burmese Star Ruby" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">Burmese Ruby Necklace</p>
                                <p className="item-price">Floor Price - $250M USD</p>
                                <Link to='/auction' className='edit-bid-button'>Auction</Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Auction