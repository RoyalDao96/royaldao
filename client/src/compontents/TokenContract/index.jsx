import React, { useState } from 'react';
import './tokenContract.css';
import copy from '../../assets/webImages/copy.png';
import ETH from '../../assets/webImages/eth.png';
import BNB from '../../assets/webImages/bnb.png';
import Base from '../../assets/webImages/base.png';
import ARBI from '../../assets/webImages/arbi.png';
import OPTI from '../../assets/webImages/opti.png';
import SOL from '../../assets/webImages/sol.png';
import TON from '../../assets/webImages/ton.png';

const TokenContract = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Address has been copied to the clipboard!"); // Using alert() to notify the user
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert("Failed to copy the address."); // Notify the user about the failure
        });
    };

    return (
        <div className="token-contract container py-5 mb-md-0 mb-5 mt-md-5">
            <h2 className="text-center mb-4">Token Contract</h2>
            <p className="mt-3 small tc-desc-2 text-center">Use the contract information below to add the PreTGE verison of $Grimstone token to your wallet.</p>
            <div className="bg-dark text-white p-4">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 border-line">
                        <div className="token-detail token-address" onClick={() => copyToClipboard("0xA518913e3f62c5E134B6BC995cF0e883596c01A9")}>
                        <h5>Address</h5>
                        <p className='token-address-text'>0xA518913e3f62c5E134B6BC995cF0e883596c01A9</p>
                        <img className='copyIcon' src={copy} alt='copy' style={{cursor: 'pointer'}} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 border-line">
                        <div className="token-detail">
                        <h5>Decimal</h5>
                        <p>18</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 border-line">
                        <div className="token-detail">
                        <h5>Network</h5>
                        {/* <img className='chainLogo' src={ETH} alt="Ethereum" /> */}
                        {/* <img className='chainLogo' src={BNB} alt="Binance Smart Chain" /> */}
                        <img className='chainLogo' src={Base} alt="Base Chain" />
                        {/* <img className='chainLogo' src={ARBI} alt="Arbitrum" /> */}
                        {/* <img className='chainLogo' src={OPTI} alt="Optimism" /> */}
                        {/* <img className='chainLogo' src={SOL} alt="Solana" /> */}
                        {/* <img className='chainLogo' src={TON} alt="TON" /> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 border-line">
                        <div className="token-detail">
                        <h5>Token Symbol</h5>
                        <p>Pre TGE</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-3 small tc-desc-2 text-center">Please note that you should not send any tokens to this address, as doing so may result in the permanent loss of the tokens.</p>
        
            {/* <div className="bg-dark text-white p-4 mt-5">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 border-line">
                        <div className="token-detail">
                        <h5>Buy Tax</h5>
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 border-line">
                        <div className="token-detail">
                        <h5>Sell Tax</h5>
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 border-line">
                        <div className="token-detail">
                        <h5>Transfer Tax</h5>
                        <p>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-3 small tc-desc-2 text-center">50% of the collected tax will be distribute as staking rewards for pre-utility stage and other 50% will be utilized to acquire RWA reserves for elevating the floor price of $Greenrock.</p> */}
        </div>
    );
}

export default TokenContract