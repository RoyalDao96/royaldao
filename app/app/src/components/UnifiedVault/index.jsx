import React, { useContext, useState } from 'react';
import './unifiedVault.css';
import img2 from '../../images/img_pkg_1.png';
import img3 from '../../images/img_pkg_4.png';
import img4 from '../../images/img_pkg_3.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img_pkg_2.png';
import img7 from '../../images/uv_6.webp';
import { Link } from 'react-router-dom';
import { ActiveContext } from '../ActiveContext';

const UnifiedVault = () => {
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
                  className={`tabs ${hoveredLink === 0 ? 'underline' : ''}`}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  Central Vault
                </Link>
                <Link 
                  to='/unified-vault' 
                  className={`tabs ${hoveredLink === null || hoveredLink === 1 ? 'underline' : ''}`}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  Unified Vault
                </Link>
                <Link 
                  to='/private-vault' 
                  className={`tabs ${hoveredLink === 3 ? 'underline' : ''}`}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  Private Vault
                </Link>
            </div>

            <div className='card-box2 test2'>

                <div id="card-area">
                    <div className="card">
                        <div className="card-header">
                            <div className="time-icon">
                                <span>Live <span class="green-dot"></span></span>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src={img2} alt="Burmese Ruby Bracelet" />
                        </div>
                        <div className="card-content">
                            <p className="item-name">Burmese Natural Jade</p>
                            <p className="item-price">Price - $10.1M USD</p>
                            <Link to='/unified-vault-jade' className='edit-bid-button'>Research</Link>
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
                            <img src={img3} alt="Burmese Jade" />
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
                            <img src={img4} alt="Burmese Earring" />
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
                            <img src={img5} alt="Burmese Earring" />
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
                            <img src={img6} alt="Burmese Earring" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default UnifiedVault