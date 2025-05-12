import React, { useContext, useState } from 'react';
import './centralVault.css';
import img0 from '../../images/img3.png';
import img1 from '../../images/img2.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/cv_4.webp';
import img6 from '../../images/cv_5.webp';
import img7 from '../../images/cv_6.webp';
import { Link } from 'react-router-dom';
import { ActiveContext } from '../ActiveContext';

const CentralVault = () => {
    const { isActive } = useContext(ActiveContext);
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 'auto',
    };

    return (
        <>  
            <div className='vault-parent' style={parentVaultDetailStyle}>
                <div className='vault-container' align="center">
                    <Link 
                        to='/' 
                        className={`tabs ${hoveredLink === null || hoveredLink === 0 ? 'underline' : ''}`}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                    >
                    Central Vault
                    </Link>
                    <Link 
                        to='/unified-vault' 
                        className={`tabs ${hoveredLink === 1 ? 'underline' : ''}`}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                    Unified Vault
                    </Link>
                    <Link 
                        to='/private-vault' 
                        className={`tabs ${hoveredLink === 2 ? 'underline' : ''}`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                    Private Vault
                    </Link>
                </div>

                <div className='card-box test2'>
                    <div id="card-area">
                        <div className="card">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Live <span class="green-dot"></span></span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img0} alt="Burmese Ruby Bracelet" />
                            </div>
                            <div className="card-content">
                                <p className="item-name">15,800 Carats Ruby</p>
                                <p className="item-price">Price - $800M USD</p>
                                <Link to='/vault-details-ruby' className='edit-bid-button'>Research</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div id="card-area">
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img1} alt="Burmese Ruby Bracelet" />
                            </div>
                        </div>
                    </div>

                    <div id="card-area">
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img4} alt="Burmese Jade Stone" />
                            </div>
                        </div>
                    </div>

                    {/* <div id="card-area">
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img5} alt="Burmese Ruby Ring" />
                            </div>
                        </div>
                    </div>

                    <div id="card-area">
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img6} alt="Burmese Jade Ring" />
                            </div>
                        </div>
                    </div>

                    <div id="card-area">
                        <div className="card next-lot">
                            <div className="card-header">
                                <div className="time-icon">
                                    <span>Coming Soon</span>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={img7} alt="Burmese Pigeon Blood Ruby" />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
            
        </>
    )
}

export default CentralVault