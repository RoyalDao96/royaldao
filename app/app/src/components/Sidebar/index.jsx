import React, { useState } from 'react';
import imgLogo from '../../images/Logo.png';
import imgVault1 from '../../images/vault1.png';
import imgAuction from '../../images/auction.png';
import imgPD from '../../images/pd.png';
import imgBIF from '../../images/bif.png';
import imgStake from '../../images/stake.png';
import imgSwap from '../../images/swap.png';
import imgLocker from '../../images/locker.png';
import imgOption from '../../images/option.png';
import imgBSVault from '../../images/vault.png';
import imgLSD from '../../images/lsd.png';
import imgConvert from '../../images/convert.png';
import imgStrategy from '../../images/strategy.png';
import imgBond from '../../images/bond.png';
import imgGov from '../../images/gov.png';
import imgAna from '../../images/ana.png';
import imgSTR from '../../images/str_lp.png';
import imgMultiFactor from '../../images/multi-factor.png';
import imgVote from '../../images/vote.png';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="container">
      <div className={`navigation ${active ? 'active' : ''}`}>
        <ul>

          <li>
            <Link to="/" className="flex justify-center mt-10">
              <img src={imgLogo} alt="" className='Logo' />
            </Link>
          </li>
          
          <div className="title" style={{ color: "#fff", userSelect: "none" }}>Starts Here</div>

          <li
            className={activeItem === 1 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(1)}
          >
            <Link to="/" className="link-nav">
              <img className="img-vault ml-3" src={imgVault1} alt="Vault" />
              <div className="title">Vault</div>
            </Link>
          </li>

          <li
            className={activeItem === 2 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(2)}
          >
            <Link to="/auction" className="link-nav">
              <img className="img-vault ml-3" src={imgAuction} alt="Auction" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Auction</div>
            </Link>
          </li>

          <li
            className={activeItem === 12 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(12)}
          >
            <Link to="/strategy" className="link-nav">
              <img className="img-vault ml-3" src={imgStrategy} alt="Auction" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Strategy</div>
            </Link>
          </li>

          <div className="title" style={{ color: "#fff", userSelect: "none", marginTop: "20px" }}>Morph Here</div>
          
          <li
            className={activeItem === 4 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(4)}
          >
            <Link to="/pd" className="link-nav">
              <img className="img-vault ml-3" src={imgPD} alt="Primary Derivatives" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Primary Derivatives</div>
            </Link>
          </li>

          <li
            className={activeItem === 5 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(5)}
          >
            <Link to="/swap" className="link-nav">
              <img className="img-vault ml-3" src={imgSwap} alt="Swap" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Swap</div>
            </Link>
          </li>

          <li
            className={activeItem === 9 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(9)}
          >
            <Link to="/convertor" className="link-nav">
              <img className="img-vault ml-3" src={imgConvert} alt="BIF" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Convertor</div>
            </Link>
          </li>

          <div className="title" style={{ color: "#fff", userSelect: "none", marginTop: "20px"  }}>Earn Here</div>

          <li
            className={activeItem === 6 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(6)}
          >
            <Link to="/bif" className="link-nav">
              <img className="img-vault ml-3" src={imgBIF} alt="BIF" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">BIF</div>
            </Link>
          </li>

          <li
            className={activeItem === 7 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(7)}
          >
            <Link to="/buyside-vaults" className="link-nav">
              <img className="img-vault ml-3" src={imgBSVault} alt="BIF" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Buyside Vaults</div>
            </Link>
          </li>

          <li
            className={activeItem === 8 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(8)}
          >
            <Link to="/lsd" className="link-nav">
              <img className="img-vault ml-3" src={imgLSD} alt="BIF" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">LSD</div>
            </Link>
          </li>

          {/* <li
            className={activeItem === 12 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(12)}
          >
            <Link to="/bond" className="link-nav">
              <img className="img-vault ml-3" src={imgBond} alt="BIF" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Bond</div>
            </Link>
          </li> */}

          <li
            className={activeItem === 10 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(10)}
          >
            <Link to="/stake" className="link-nav">
              <img className="img-vault ml-3" src={imgStake} alt="Stake" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Stake</div>
            </Link>
          </li>
          
          <li
            className={activeItem === 13 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(13)}
          >
            <Link to="/strategic-pool" className="link-nav">
              <img className="img-vault ml-3" src={imgSTR} alt="Stake" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Strategic Pools</div>
            </Link>
          </li>

          <li
            className={activeItem === 14 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(14)}
          >
            <Link to="/multi-token-pools" className="link-nav">
              <img className="img-vault ml-3" src={imgMultiFactor} alt="Stake" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Multi Token Pools</div>
            </Link>
          </li>

          <li
            className={activeItem === 15 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(15)}
          >
            <Link to="/vote" className="link-nav">
              <img className="img-vault ml-3" src={imgVote} alt="Stake" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Vote</div>
            </Link>
          </li>

          {/* <li
            className={activeItem === 15 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(15)}
          >
            <Link to="/bonds" className="link-nav">
              <img className="img-vault ml-3" src={imgSTR} alt="Stake" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Bond</div>
            </Link>
          </li> */}

          <div className="title" style={{ color: "#fff", userSelect: "none", marginTop: "20px"  }}>Lock Here</div>

          <li
            className={activeItem === 11 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(11)}
          >
            <Link to="/locker" className="link-nav">
              <img className="img-vault ml-3" src={imgLocker} alt="Locker" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Locker</div>
            </Link>
          </li>
          
          {/* <li
            className={activeItem === 11 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(11)}
          >
            <Link to="/" className="link-nav">
              <img className="img-vault ml-3" src={imgGov} alt="Governance" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Governance</div>
            </Link>
          </li>

          <li
            className={activeItem === 12 ? 'hovered' : 'no-hovered'}
            onClick={() => handleItemClick(12)}
          >
            <Link to="/" className="link-nav">
              <img className="img-vault ml-3" src={imgAna} alt="Analytics" style={{ filter: "brightness(0) invert(0.7)" }} />
              <div className="title">Analytics</div>
            </Link>
          </li> */}

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
