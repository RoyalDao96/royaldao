import React from 'react';
import Logo from '../../assets/webImages/RD_LOGO_WEB2.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <img src={Logo} alt='RoyalDAO Logo' />
                        <h2 className='footer-logo-text mt-2'>RoyalDAO</h2>
                    </div>
                </div>
            

                <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>Contents</h2>
                        <ul>
                            <li>
                                <Link className="nav-link text-white" to="hero" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Home</Link>
                            </li>
                            {/* <li>
                                <Link className="nav-link text-white" to="timeline-1" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Milestone</Link>
                            </li> */}
                            <li>
                                <Link className="nav-link text-white" to="about" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>About</Link>
                            </li>
                            
                            <li>
                                <Link className="nav-link text-white" to="story" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Story</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>Contents</h2>
                        <ul>
                            {/* <li>
                                <Link className="nav-link text-white" to="roadmap" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Roadmap</Link>
                            </li> */}
                            <li>
                                <Link className="nav-link text-white" to="packages" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Packages</Link>
                            </li>

                            <li>
                                <Link className="nav-link text-white" to="token-contract" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Token Contract</Link>
                            </li>
                            
                            {/* <li>
                                <Link className="nav-link text-white" to="strategy" spy={true} smooth={true} duration={50} style={{ cursor: "pointer" }}>Strategy</Link>
                            </li> */}
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>Follow us on</h2>
                        <p className='socials'>
                            <FontAwesomeIcon className='footer-icon' icon={faTelegram} />
                            <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer