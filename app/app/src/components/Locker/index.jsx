import React, { useContext, useEffect, useState } from 'react';
import './Locker.css';
import { ActiveContext } from '../ActiveContext';
import { Input } from 'antd';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import GS_ABI from './GS_ABI';
import AGS_ABI from './AGS_ABI';
import LOCK_ABI from './LOCK_ABI';
import Web3 from 'web3';
import lockTokenList from './lockTokenList.json';

const Locker = () => {

    // Sepolia
    const GRIMSTONE_ADDRESS = "0x2e8F57d411daeB96b63703D9988CC1755Ea29b83";
    const GRIMSTONE_ABI = GS_ABI;

    const AUCTION_GRIMSTONE_ADDRESS = "0x8Bd68B04974f9876504146F313d04908360DC389";
    const AUCTION_GRIMSTONE_ABI = AGS_ABI;
    
    const LOCK_CONTRACT_ADDRESS = "0x55EA82362b3691c656A76E53179eB7aC0faC5Fb5";
    const LOCK_CONTRACT_ABI = LOCK_ABI;

    const { isActive, walletAddress } = useContext(ActiveContext);
    const [GSBalance, setGSBalance] = useState(0);
    const [aGSBalance, setaGSBalance] = useState(0);

    const [tokenLockOne, setTokenLockOne] = useState(lockTokenList[0]);
    const [tokenLockTwo, setTokenLockTwo] = useState(lockTokenList[1]);
    const [tokenOneLockToSwap, setTokenOneLockToSwap] = useState(null);

    function switchTokensLock() {
        const one = tokenLockOne;
        const two = tokenLockTwo;
        setTokenLockOne(two);
        setTokenLockTwo(one);

        setTokenOneLockToSwap(0);
    }

    const handleLockSwapChange = (e) => {
        const value = e.target.value;
        setTokenOneLockToSwap(value);
    }

    function tier1Amount() {
        setTokenOneLockToSwap(5000);
    }

    function tier2Amount() {
        setTokenOneLockToSwap(15000);
    }

    function tier3Amount() {
        setTokenOneLockToSwap(25000);
    }

    function tier4Amount() {
        setTokenOneLockToSwap(40000);
    }

    function tier5Amount() {
        setTokenOneLockToSwap(60000);
    }

    function handle25Withdraw() {
        setTokenOneLockToSwap((aGSBalance * 25) / 100);
    }
    
    function handle50Withdraw() {
        setTokenOneLockToSwap((aGSBalance * 50) / 100);
    }

    function handle75Withdraw() {
        setTokenOneLockToSwap((aGSBalance * 75) / 100);
    }

    function handleMaxWithdraw() {
        setTokenOneLockToSwap(aGSBalance);
    }

    // Update the z-index based on the isOpen state
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    // Checking the balance of the connected. The connected wallet is coming from ActiveContext but connected
    // in navbar
    async function getGSBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(GRIMSTONE_ABI, GRIMSTONE_ADDRESS);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setGSBalance(web3.utils.fromWei(balance, 'ether'));
            
        } catch (error) {
            console.error(error);
        }
    }

    // Checking the balance of the connected. The connected wallet is coming from ActiveContext but connected
    // in navbar
    async function getAGSBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(AUCTION_GRIMSTONE_ABI, AUCTION_GRIMSTONE_ADDRESS);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setaGSBalance(web3.utils.fromWei(balance, 'ether'));
            
        } catch (error) {
            console.error(error);
        }
    }

    async function lockGrimstone() {
        try {
            // Initialize Web3 with the Ethereum provider
            const web3 = new Web3(window.ethereum);
        
            // Convert the amount to the smallest unit (Wei) and then to a BN instance
            const amount = web3.utils.toBN(web3.utils.toWei(tokenOneLockToSwap.toString(), 'ether'));

            // Instantiate contract instances
            const lock_contract = new web3.eth.Contract(LOCK_CONTRACT_ABI, LOCK_CONTRACT_ADDRESS);
            const token_one_contract = new web3.eth.Contract(GRIMSTONE_ABI, GRIMSTONE_ADDRESS);

            // Approve the contract to spend tokens on behalf of the connected user
            await token_one_contract.methods.approve(LOCK_CONTRACT_ADDRESS, amount).send({ from: walletAddress });
        
            // Call the swap function of the contract
            await lock_contract.methods.lockGrimstone(amount).send({ from: walletAddress });

            setTokenOneLockToSwap(0);
        } catch (error) {
            console.log(error);
        }
    }

    async function withdrawGrimstone() {
        try {
            // Initialize Web3 with the Ethereum provider
            const web3 = new Web3(window.ethereum);
        
            // Convert the amount to the smallest unit (Wei) and then to a BN instance
            const amount = web3.utils.toBN(web3.utils.toWei(tokenOneLockToSwap.toString(), 'ether'));

            // Instantiate contract instances
            const lock_contract = new web3.eth.Contract(LOCK_CONTRACT_ABI, LOCK_CONTRACT_ADDRESS);
            const token_one_contract = new web3.eth.Contract(AUCTION_GRIMSTONE_ABI, AUCTION_GRIMSTONE_ADDRESS);

            // Approve the contract to spend tokens on behalf of the connected user
            await token_one_contract.methods.approve(LOCK_CONTRACT_ADDRESS, amount).send({ from: walletAddress });

            // Call the swap function of the contract
            await lock_contract.methods.withdraw(amount).send({ from: walletAddress });

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGSBalance();
        getAGSBalance();
    });

    return (
        <div className='locker-parent' align='center' style={parentVaultDetailStyle}>
            <div className='tradeBox'>
                <div className='tradeBoxHeader'>
                    <h4>Lock Grimstone to Unlock Auction Tier Level</h4>
                </div>

                <div className="inputs">
                    <Input placeholder='0' type='number' className='no-arrows' value={tokenOneLockToSwap} onChange={handleLockSwapChange}></Input>
                    <Input placeholder='0' type='number' className='no-arrows' value={tokenOneLockToSwap} disabled={true}></Input>
                    <div className='switchButton' onClick={switchTokensLock}>
                        <ArrowDownOutlined className='switchArrow' />
                    </div>
                    <div>
                        <div className='assetOne'>
                            {/* Display the name of tokenLockOne */}
                            {tokenLockOne.ticker} 
                            <DownOutlined />
                        </div>
                    </div>
                    <div className="assetTwo">
                        {/* Display the name of tokenLockTwo */}
                        {tokenLockTwo.ticker}
                        <DownOutlined />
                    </div>
                </div>
                
                <div className='exchange-rate-parent'>
                    <div className='balance-parent bp2' align='left'>
                        {   
                            tokenLockOne.address === "0x2e8F57d411daeB96b63703D9988CC1755Ea29b83" ? 
                            <span>Balance: {GSBalance}</span> :
                            tokenLockOne.address === "0x8Bd68B04974f9876504146F313d04908360DC389" ?
                            <span>Balance: {aGSBalance}</span> :
                            <span>Balance: {GSBalance}</span>
                        }
                    </div>
                    <div className="exchange-rate">
                    {
                        tokenLockOne.address === "0x2e8F57d411daeB96b63703D9988CC1755Ea29b83" ? (
                            <>
                                <button className="percent-button" onClick={tier1Amount}>Tier 1</button>
                                <button className="percent-button" onClick={tier2Amount}>Tier 2</button>
                                <button className="percent-button" onClick={tier3Amount}>Tier 3</button>
                                <button className="percent-button" onClick={tier4Amount}>Tier 4</button>
                                <button className="percent-button percent-button-last" onClick={tier5Amount}>Tier 5</button>
                            </>
                        ) : tokenLockOne.address === "0x8Bd68B04974f9876504146F313d04908360DC389" ? (
                            <>
                                <button className="percent-button" onClick={handle25Withdraw}>25%</button>
                                <button className="percent-button" onClick={handle50Withdraw}>50%</button>
                                <button className="percent-button" onClick={handle75Withdraw}>75%</button>
                                <button className="percent-button percent-button-last" ids onClick={handleMaxWithdraw}>MAX</button>
                            </>
                        ) : (
                            <>
                                <button className="percent-button" onClick={tier1Amount}>Tier 1</button>
                                <button className="percent-button" onClick={tier2Amount}>Tier 2</button>
                                <button className="percent-button" onClick={tier3Amount}>Tier 3</button>
                                <button className="percent-button" onClick={tier4Amount}>Tier 4</button>
                                <button className="percent-button percent-button-last" onClick={tier5Amount}>Tier 5</button>
                            </>
                        )
                    }
                    </div>
                </div>
                {
                    tokenLockOne.address === "0x2e8F57d411daeB96b63703D9988CC1755Ea29b83" ? 
                    <div className="swapButton" onClick={lockGrimstone}>Lock</div> :
                    tokenLockOne.address === "0x8Bd68B04974f9876504146F313d04908360DC389" ?
                    <div className="swapButton" onClick={withdrawGrimstone}>Withdraw</div> :
                    <div className="swapButton" onClick={lockGrimstone}>Lock</div>
                }
                
            </div>
        </div>
    )
}

export default Locker