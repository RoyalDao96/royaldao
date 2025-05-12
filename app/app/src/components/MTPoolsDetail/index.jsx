import React, { useContext, useState } from 'react';
import './MtPoolsDetail.css';
import Logo from '../../images/Logo.png';
import SolLogo from '../../images/solLogo.png';
import USDTLogo from '../../images/usdtLogo.png';
import ethLogo from '../../images/ethLogo.png';
import btcLogo from '../../images/btcLogo.png';
import dexScreenerLogo from '../../images/dexScreener.png';
import dexToolsLogo from '../../images/dexTools.jpg';
import { ActiveContext } from '../ActiveContext';

const MTPoolsDetail = () => {
  const [activeTab, setActiveTab] = useState('Deposit');

  const { isActive } = useContext(ActiveContext);
  const parentVaultDetailStyle = {
    zIndex: isActive ? -1 : 9999,
  };

  // Define the content for each tab dynamically
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Deposit':
        return (
          <>
            <h3>Enter deposit amount</h3>
            <div className="token-input">
              <img src={Logo} alt="Greenrock" />
              <p>GR</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>HALF</button>
              <button>MAX</button>
            </div>
            <div className="token-input">
              <img src={btcLogo} alt="BTC" />
              <p>BTC</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>HALF</button>
              <button>MAX</button>
            </div>
            <div className="token-input">
              <img src={SolLogo} alt="mSOL" />
              <p>SOL</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>HALF</button>
              <button>MAX</button>
            </div>
            <button className="deposit-btn">Deposit</button>
          </>
        );
      case 'Withdraw':
        return (
          <>
            <h3>Enter withdraw amount</h3>
            <div className="token-input">
              <img src={Logo} alt="mSOL" />
              <p>GR-BTC-SOL</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>HALF</button>
              <button>MAX</button>
            </div>
            <button className="deposit-btn">Withdraw</button>
          </>
        );
      case 'Swap':
        return (
          <>
            <h3>Enter swap amount</h3>
            <div className="token-input">
              <img src={Logo} alt="SOL" />
              <p>GR</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>HALF</button>
              <button>MAX</button>
            </div>
            <div className="token-input">
              <img src={btcLogo} alt="mSOL" />
              <p>BTC</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>HALF</button>
              <button>MAX</button>
            </div>
            <button className="deposit-btn">Deposit</button>
          </>
        );
      case 'Burn':
        return (
          <>
            <h3>Enter burn amount</h3>
            <div className="token-input">
              <img src={Logo} alt="GR-BTC-SOL" />
              <p>GR-BTC-SOL</p>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="token-input-buttons">
              <span className="balance-label">Balance: 0.00</span>
              <button>BURN 50%</button>
              <button>MAX</button>
            </div>
            <button className="deposit-btn">Burn</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pool-detail-container" style={parentVaultDetailStyle}>
      <div className='pool-parent-de'>

        <div className="pool-detail-header">
          <div className="pool-header-left">
            <h1 className="pool-title">GR - BTC - SOL</h1>
            <div className="pool-type-buttons">
              <button className="pool-type-button">Dynamic Pool</button>
              <button className="pool-type-button">Stable</button>
            </div>
          </div>
          <div className="pool-header-right">
            <div className="stat-box">
              <h2>1.04%</h2>
              <p>365d yield / TVL</p>
            </div>
            <div className="stat-box">
              <h2>15.22%</h2>
              <p>Base APY</p>
            </div>
            <div className="stat-box">
              <h2>N/A</h2>
              <p>LM APR</p>
            </div>
          </div>
        </div>

        <div className="pool-info-deposit-wrapper">
          {/* Pool Info Section */}
          <div className="pool-info">
            <h2 className='tvl-title'>Total Value Locked</h2>
            <h1 className='tvl-value'>$465,076,630.07</h1>
            <p className='pl-text'>🔒 0.06252% permanently locked</p>

            <hr />

            <div className="liquidity-allocation">
              <h3 className='la-title'>Liquidity Allocation</h3>

              <div className="liquidity-item">
                <img src={Logo} alt="Greenrock" />
                <div className="token-info">
                  <span className="token-name" style={parentVaultDetailStyle}>
                    GR
                    <a href="https://sepolia.etherscan.io/" target="_blank" rel="noopener noreferrer">
                      0xfk0e...fk9q
                    </a>
                  </span>
                </div>
                <p>151,735.50 (56.90%)</p>
              </div>
              
              <div className="liquidity-item">
                <img src={btcLogo} alt="BTC" />
                <div className="token-info">
                  <span className="token-name" style={parentVaultDetailStyle}>
                    BTC
                    <a href="https://sepolia.etherscan.io/" target="_blank" rel="noopener noreferrer">
                      0xfk0e...fk9q
                    </a>
                  </span>
                </div>
                <p>7,175.50 (2.69%)</p>
              </div>
              
              <div className="liquidity-item">
                <img src={SolLogo} alt="Solana" />
                <div className="token-info">
                  <span className="token-name" style={parentVaultDetailStyle}>
                    SOL
                    <a href="https://sepolia.etherscan.io/" target="_blank" rel="noopener noreferrer">
                      0xjg3r...093f
                    </a>
                  </span>
                </div>
                <p>107,776.90 (40.41%)</p>
              </div>
            </div>

            <hr />

            <div className="additional-info">
              <p>Virtual Price<span>1.1216931</span></p>
              <p>24h Volume<span>$4,650,766.30</span></p>
              <p>24h Yield<span>$93,015.33</span></p>
              <p>24h Fee<span>$4,650.77</span></p>
              <p>Liquidity Provider Fee<span>0.01%</span></p>
              <p>Protocol Fee<span>0%</span></p>
              <p>AMP<span>1000</span></p>
              <p>Pool Address<span>0xifj1...391f</span></p>
              <p>LP Mint<span>0x1kgf...3819</span></p>
            </div>

            <div className="pool-chart">
              <h3>Pool Chart</h3>
              <div className="chart-buttons">
                <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
                  <img src={dexScreenerLogo} alt="DEXScreener" />DEXScreener
                </a>
                <a href="https://www.dextools.io" target="_blank" rel="noopener noreferrer">
                  <img src={dexToolsLogo} alt="DEXTools" />DEXTools
                </a>
              </div>
            </div>

            {/* <div className="supported-platforms">
              <h3>Supported trading platforms</h3>
              <div className="platform-buttons">
                <button><img src={Logo} alt="Banana Gun" />Banana Gun</button>
                <button><img src={Logo} alt="BONKbot" />BONKbot</button>
                <button><img src={Logo} alt="Photon" />Photon</button>
                <button><img src={Logo} alt="Fluxbot" />Fluxbot</button>
                <button><img src={Logo} alt="Jupiter" />Jupiter</button>
                <button><img src={Logo} alt="Trojan" />Trojan</button>
              </div>
            </div> */}
          </div>

          {/* Pool Deposit Section */}
          <div className="pool-deposit">
            <h2>Your Deposit</h2>
            <h1>$0.00</h1>
            <p>0.00 SOL - mSOL</p>

            <nav>
              <button className={activeTab === 'Deposit' ? 'active' : ''} onClick={() => setActiveTab('Deposit')}>Deposit</button>
              <button className={activeTab === 'Withdraw' ? 'active' : ''} onClick={() => setActiveTab('Withdraw')}>Withdraw</button>
              <button className={activeTab === 'Swap' ? 'active' : ''} onClick={() => setActiveTab('Swap')}>Swap</button>
              <button className={activeTab === 'Burn' ? 'active' : ''} onClick={() => setActiveTab('Burn')}>Burn</button>
            </nav>

            <div className="deposit-box">
              {renderTabContent()} {/* Dynamically render the content based on the active tab */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MTPoolsDetail;
