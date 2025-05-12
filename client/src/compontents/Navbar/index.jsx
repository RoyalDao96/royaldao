import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';
import logo from '../../assets/webImages/RD_LOGO_WEB2.png'
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [connectedAddress, setConnectedAddress] = useState('');

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    async function connectWallet() {
        if (window.ethereum) {
          try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected to Metamask");
            // Get the connected address
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            setConnectedAddress(accounts[0]);
          } catch (error) {
            console.error(error);
          }
        } else {
          console.error("Metamask not detected. Install Metamask extension to use this feature.");
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        async function fetchConnectedAddress() {
            if (window.ethereum) {
              const accounts = await window.ethereum.request({ method: 'eth_accounts' });
              if (accounts.length > 0) {
                setConnectedAddress(accounts[0]);
              }
            }
          }
          fetchConnectedAddress();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.ethereum.removeAllListeners('accountsChanged');
        };
    }, []);

    const formattedAddress = connectedAddress ? 
    connectedAddress.substring(0, 7) + "...." + connectedAddress.substring(connectedAddress.length - 5) 
    : '';
    
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark p-md-3' 
        style={{backgroundColor: `${scroll ? 'rgba(0, 0, 0, 0.7)' : ''}`, padding: `${scroll ? '0px' : ''}`}}>
          <div className='container'>
            <Link2 to='/' style={{ textDecoration: 'none', color: '#000', zIndex: "999", textDecoration: "none" }}>
                <span className='navbar-brand nav-logo logoSpan'>
                    <img className='logoImg' src={logo} alt='RoyalDAO Logo' 
                    style={{ transition: 'all 250ms ease-in-out', width: `${scroll ? '50px' : ''}`}} />
                    <span className='navbar-brand'>RoyalDAO</span>
                </span>
            </Link2>
    
            <button 
                className={`navbar-toggler ${isOpen ? 'active' : ''}`} 
                type='button' 
                onClick={toggleNavbar}
                aria-expanded={isOpen ? "true" : "false"}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
    
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarNav'
                style={{ 
                    backgroundColor: !isOpen ? '' : 'rgba(0, 0, 0, 0.9)',
                    paddingBottom: !isOpen ? '' : '30px',
                }}>
                <ul className={`navbar-nav ${isOpen ? 'open' : ''} justify-content-center w-100`}>
                    <li className='nav-item'> {/* Each li has a class for animation */}
                        <Link className="nav-link text-white" to="hero" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Home</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link className="nav-link text-white" to="timeline-1" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Milestone</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link className="nav-link text-white" to="about" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>About</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link className="nav-link text-white" to="packages" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Packages</Link>
                    </li> */}
                    {/* <li className='nav-item'>
                        <Link className="nav-link text-white" to="roadmap_parent" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Roadmap</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link className="nav-link text-white" to="process_parent" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Story</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link className="nav-link text-white" to="strategy_parent" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Strategy</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link className="nav-link text-white" to="token-contract" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Token Contract</Link>
                    </li>
                </ul>
                
                {/* <a className='launch-game-tag' href="https://t.me/rc_clicker_game_bot" target='_blank'>
                    <button className={`launch-game-btn ${!isOpen ? '' : 'w-100 mb-3 mt-2 mb-md-0 mt-md-0'}`}>Launch Game</button>
                </a> */}
                    
                {
                    connectedAddress ? (
                    <span className='nav-item' style={{ color: "#e1c198" }}>{formattedAddress}</span>
                ) :
                (
                    <button className={`btn-connect-wallet ${!isOpen ? '' : 'w-100'}`} onClick={connectWallet}>Connect Wallet</button>
                )}
                
            </div>

          </div>
        </nav>
      );
}

export default Navbar