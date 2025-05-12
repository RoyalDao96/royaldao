import React, { useContext, useEffect, useState } from 'react';
import './Swap.css';
import { ActiveContext } from '../ActiveContext';
import { Input, Popover, Radio, Modal } from 'antd';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import tokenList from '../../tokenList.json';
import sGR_ABI from './sGR';
import Web3 from 'web3';
import SWAP_ABI from './SWAPABI';

const Swap = () => {

    // Sepolia
    const STAKED_GREENROCK_ADDRESS = "0x62E7345D423F3c02e065D2697fBB42d293A673F4";
    const STAKED_GREENROCK_ABI = sGR_ABI;

    // Sepolia
    const SWAP_ADDRESS = "0xFE88C2e234E863DF9DB2f2EBbe6fe1f440Cde24A";
    const SWAP_CONTRACT_ABI = SWAP_ABI;
    
    const { isActive, walletAddress } = useContext(ActiveContext);

    const [tokenOne, setTokenOne] = useState(tokenList[0]);
    const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

    const [sGRBalance, setsGRBalance] = useState(0);
    const [sGRToSwap, setsGRToSwap] = useState(0);

    const handleStaked25Percent = () => {
        setsGRToSwap((sGRBalance * 25) / 100);
    }

    const handleStaked50Percent = () => {
        setsGRToSwap((sGRBalance * 50) / 100);
    }

    const handleStaked75Percent = () => {
        setsGRToSwap((sGRBalance * 75) / 100);
    }

    const handleStakedMaxClick = () => {
        setsGRToSwap(sGRBalance);
    }

    const handleSwapChange = (e) => {
        const value = e.target.value;
        setsGRToSwap(value);
    };

    // Update the z-index based on the isOpen state
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    // Checking the balance of the connected. The connected wallet is coming from ActiveContext but connected
    // in navbar
    async function getsGSBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(STAKED_GREENROCK_ABI, STAKED_GREENROCK_ADDRESS);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setsGRBalance(web3.utils.fromWei(balance, 'ether'));
            
        } catch (error) {
            console.error(error);
        }
    }
    
    async function fetchDexSwap() {
        try {
            // Initialize Web3 with the Ethereum provider
            const web3 = new Web3(window.ethereum);
            const amount = web3.utils.toBN(web3.utils.toWei(sGRToSwap.toString(), 'ether'));
            
            // Instantiate contract instances
            const swap_contract = new web3.eth.Contract(SWAP_CONTRACT_ABI, SWAP_ADDRESS);
            const staked_greenrock_contract = new web3.eth.Contract(STAKED_GREENROCK_ABI, STAKED_GREENROCK_ADDRESS);
            
            // Approve the contract to spend sGR tokens on behalf of the connected user
            await staked_greenrock_contract.methods.approve(SWAP_ADDRESS, amount).send({ from: walletAddress });

            // Call the stake function of the contract
            await swap_contract.methods.swapToken1ToToken2(amount).send({ from: walletAddress });
            
            setsGRToSwap(0);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getsGSBalance();
    });

    return (
        <div className='swap-parent' align='center' style={parentVaultDetailStyle}>
            <div className='tradeBox'>
                <div className='tradeBoxHeader'>
                    <h4>Swap</h4>
                </div>

                <div className="inputs">
                    <Input placeholder='0' type='number' className='no-arrows' onChange={handleSwapChange} value={sGRToSwap}></Input>
                    <Input placeholder='0' type='number' className='no-arrows' value={sGRToSwap} disabled={true}></Input>
                    <div className='switchButton'>
                        <ArrowDownOutlined className='switchArrow' />
                    </div>
                    <div>
                        <div className='assetOne'>
                            {/* <img src={tokenOne.img} alt="assetOneLogo" className='assetLogo' /> */}
                            {tokenOne.ticker}
                            <DownOutlined />
                        </div>
                    </div>
                    <div className="assetTwo">
                        {/* <img src={tokenTwo.img} alt="assetTwoLogo" className='assetLogo' /> */}
                        {tokenTwo.ticker}
                        <DownOutlined />
                    </div>
                </div>
                
                <div className='exchange-rate-parent'>
                    <div className='balance-parent bp2' align='left'>
                        <span>Balance:</span> <span>{sGRBalance}</span>
                    </div>
                    <div className="exchange-rate">
                        <button className="percent-button" onClick={handleStaked25Percent}>25%</button>
                        <button className="percent-button" onClick={handleStaked50Percent}>50%</button>
                        <button className="percent-button" onClick={handleStaked75Percent}>75%</button>
                        <button className="percent-button percent-button-last" ids onClick={handleStakedMaxClick}>MAX</button>
                    </div>
                </div>

                <div className="swapButton" onClick={fetchDexSwap} disabled={!sGRToSwap}>Swap</div>
            </div>
        </div>
    );
}

export default Swap;
