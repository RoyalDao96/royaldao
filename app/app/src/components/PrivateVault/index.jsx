import React, { useContext, useState } from 'react';
import './privateVault.css';
import { Link } from 'react-router-dom';
import imgWarn from '../../images/warning.png';
import { ActiveContext } from '../ActiveContext';

const PrivateVault = () => {
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
                  className={`tabs ${hoveredLink === 0? 'underline' : ''}`}
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
                  className={`tabs ${hoveredLink === null || hoveredLink === 2 ? 'underline' : ''}`}
                  
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  Private Vault
                </Link>
            </div>

            <div className='private-vault' align='center'>
                <div className='no-access'>
                    <h1 className='title'>Warning!!!</h1>
                    <div className='desc-img' align='center'>
                        <img src={imgWarn} alt="warning" className='warning-icon' />
                        <h1 className='desc'>You Have No Access To Private Vault</h1>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default PrivateVault