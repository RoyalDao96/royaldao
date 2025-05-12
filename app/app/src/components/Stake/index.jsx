import React, { useContext, useEffect, useState } from 'react';
import './Stake.css';
import Logo from '../../images/Logo2.jpg';
import { ActiveContext } from '../ActiveContext';
import GR_ABI from './GRABI';
import SC_ABI from './StakingContractABI';
import Web3 from 'web3';

const Stake = () => {

    // Sepolia
    const GREENROCK_ADDRESS = "0x77937E7bCBfd3e869FB59419D4fBD6B93F78f23f";
    const GREENROCK_ABI = GR_ABI;

    // Sepolia
    const STAKED_CONTRACT_ADDRESS = "0x9C62f09264849400b36c20a2b41386A82Ec61F94";
    const STAKED_CONTRACT_ABI = SC_ABI;

    const [stakeAmount, setStakeAmount] = useState(null);
    const [stakedAmount, setStakedAmount] = useState(0);
    const [activeTab, setActiveTab] = useState('stake');
    const { isActive, walletAddress } = useContext(ActiveContext);

    const [greenRockBalance, setGreenrockBalance] = useState(0);
    const [stakedGRBalance, setStakedGRBalance] = useState(0);
    const [rewardAPR, setRewardAPR] = useState(0);

    const handleMaxClick = () => {
        setStakeAmount(greenRockBalance);
    };

    const handle25Percent = () => {
        setStakeAmount((greenRockBalance * 25) / 100);
    }

    const handle50Percent = () => {
        setStakeAmount((greenRockBalance * 50) / 100);
    }

    const handle75Percent = () => {
        setStakeAmount((greenRockBalance * 75) / 100);
    }
  
    const handleStakedMaxClick = () => {
        setStakedAmount(stakedGRBalance);
    }

    const handleStaked25Percent = () => {
        setStakedAmount((stakedGRBalance * 25) / 100);
    }

    const handleStaked50Percent = () => {
        setStakedAmount((stakedGRBalance * 50) / 100);
    }

    const handleStaked75Percent = () => {
        setStakedAmount((stakedGRBalance * 75) / 100);
    }

    const handleStakeChange = (e) => {
        const value = e.target.value;
        setStakeAmount(value);
    };

    const handleStakedChange = (e) => {
        const value = e.target.value;
        setStakedAmount(value);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 'auto',
    };

    // Checking the balance of the connected. The connected wallet is coming from ActiveContext but connected
    // in navbar
    async function getGSBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(GREENROCK_ABI, GREENROCK_ADDRESS);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setGreenrockBalance(web3.utils.fromWei(balance, 'ether'));
        } catch (error) {
            console.error(error);
        }
    }

    // This function will return how much I staked and what are the rewards.
    async function getStakedData() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(STAKED_CONTRACT_ABI, STAKED_CONTRACT_ADDRESS);
            
            // stakedData[0] is the staked balance
            const stakedData = await contract.methods.getStakeInfo(walletAddress).call();
            
            // Convert BigInt to String and then to Ether
            const stakedBalance = web3.utils.fromWei(stakedData[0].toString(), 'ether');
            setStakedGRBalance(stakedBalance); // Update state with the formatted balance
            
            const rewardAPR = web3.utils.fromWei(stakedData[1].toString(), 'ether');
            setRewardAPR(rewardAPR);
            // console.log(rewardAPR);
        } catch (error) {
            // console.error(error);
        }
    }
    
    useEffect(() => {
        getGSBalance();
    });

    useEffect(() => {
        setInterval(() => {
            getStakedData();
        }, 1000);
    })

    async function withdraw() {
        try {
            const amount = web3.utils.toBN(web3.utils.toWei(stakeAmount.toString(), 'ether'));
            const web3 = new Web3(window.ethereum);
            const stake_contract = new web3.eth.Contract(STAKED_CONTRACT_ABI, STAKED_CONTRACT_ADDRESS);
            await stake_contract.methods.withdraw(amount).send({ from: walletAddress });
            
        } catch (error) {
            console.log(error);
        }
    }

    async function claimReward() {
        try {
            const web3 = new Web3(window.ethereum);
            const stake_contract = new web3.eth.Contract(STAKED_CONTRACT_ABI, STAKED_CONTRACT_ADDRESS);
            await stake_contract.methods.claimRewards().send({ from: walletAddress });
            
        } catch (error) {
            console.log(error);
        }
    }

    async function stakeTokens() {
        try {
            // Initialize Web3 with the Ethereum provider
            const web3 = new Web3(window.ethereum);
            const amount = web3.utils.toBN(web3.utils.toWei(stakeAmount.toString(), 'ether'));

            // Instantiate contract instances
            const stake_contract = new web3.eth.Contract(STAKED_CONTRACT_ABI, STAKED_CONTRACT_ADDRESS);
            const grimrock_contract = new web3.eth.Contract(GREENROCK_ABI, GREENROCK_ADDRESS);
            
            // Approve the contract to spend Grimrock tokens on behalf of the connected user
            await grimrock_contract.methods.approve(STAKED_CONTRACT_ADDRESS, amount).send({ from: walletAddress });

            // Call the stake function of the contract
            await stake_contract.methods.stake(amount).send({ from: walletAddress });

            setStakeAmount(0);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='stake-parent' align='center' style={parentVaultDetailStyle}>
            <div className='stake-container-parent'>
                <div className="stake-container">
                    <div className="stake-header">
                        <span>Stake & Earn</span>
                    </div>

                    <div className="tab-header">
                        <button 
                            className={`tab-button ${activeTab === 'stake' ? 'active' : ''}`} 
                            onClick={() => handleTabClick('stake')}
                        >
                            Stake
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'unstake' ? 'active' : ''}`} 
                            onClick={() => handleTabClick('unstake')}
                        >
                            Unstake
                        </button>
                    </div>

                    {activeTab === 'stake' && (
                        <>
                            <div className="stake-section">
                                <div className="stake-input-container">
                                    <input
                                        type="number"
                                        className="stake-input no-arrows"
                                        value={stakeAmount}
                                        onChange={handleStakeChange}
                                        placeholder="0"
                                    />
                                    <button className="max-button" onClick={handleMaxClick}>MAX</button>
                                    <div className="stake-info">
                                        <img src={Logo} alt="$Greenrock" className="eth-logo" />
                                        <span className="currency">ostGR</span>
                                        <span className="balance">Balance {parseFloat(greenRockBalance).toFixed(3)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exchange-rate">
                                <button className="percent-button" onClick={handle25Percent}>25%</button>
                                <button className="percent-button" onClick={handle50Percent}>50%</button>
                                <button className="percent-button" onClick={handle75Percent}>75%</button>
                                <button className="percent-button percent-button-last" onClick={handleMaxClick}>100%</button>
                            </div>

                            <div className="exchange-rate">
                                <span>APR</span>
                                <span>10%</span>
                            </div>
                            <div className="exchange-rate">
                                <span>APR (Principle Inflation Protection)</span>
                                <span>variable</span>
                            </div>
                            <div className="exchange-rate">
                                <span>Bonus APR</span>
                                <span>variable</span>
                            </div>

                            <div className="exchange-rate">
                                <div className='exchange-rate-child' align='left'>
                                    <span className='you-earned-span'>You Earned (APR)</span>
                                    <span className='claim-reward-span'>
                                        <img src={Logo} alt="" className='claim-logo' />
                                        {rewardAPR}
                                    </span>
                                </div>
                                <button className='claim-button' onClick={claimReward}>Claim</button>
                            </div>

                            <div className="exchange-rate">
                                <div className='exchange-rate-child' align='left'>
                                    <span className='you-earned-span'>You Earned (PIP)</span>
                                    <span className='claim-reward-span'>
                                        <img src={Logo} alt="" className='claim-logo' />
                                        N/A
                                    </span>
                                </div>
                                <button className='claim-button'>Claim</button>
                            </div>

                            <div className="exchange-rate">
                                <div className='exchange-rate-child' align='left'>
                                    <span className='you-earned-span'>You Earned (Bonus)</span>
                                    <span className='claim-reward-span'>
                                        <img src={Logo} alt="" className='claim-logo' />
                                        N/A
                                    </span>
                                </div>
                                <button className='claim-button'>Claim</button>
                            </div>

                            <button className="stake-button" onClick={stakeTokens}>Stake</button>
                        </>
                    )}


                    {activeTab === 'unstake' && (
                        <>
                            <div className="unstake-section">
                                <div className="stake-input-container">
                                    <input
                                        type="number"
                                        className="stake-input"
                                        value={stakedAmount}
                                        onChange={handleStakedChange}
                                        placeholder="0"
                                    />
                                    <button className="max-button" onClick={handleStakedMaxClick}>MAX</button>
                                    <div className="stake-info">
                                        <img src={Logo} alt="$Greenrock" className="eth-logo" />
                                        <span className="currency">ostGR</span>
                                        <span className="balance">Balance {parseFloat(stakedGRBalance).toFixed(3)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exchange-rate">
                                <button className="percent-button" onClick={handleStaked25Percent}>25%</button>
                                <button className="percent-button" onClick={handleStaked50Percent}>50%</button>
                                <button className="percent-button" onClick={handleStaked75Percent}>75%</button>
                                <button className="percent-button percent-button-last" onClick={handleStakedMaxClick}>100%</button>
                            </div>

                            <div className="exchange-rate">
                                <span>APR</span>
                                <span>10%</span>
                            </div>
                            <div className="exchange-rate">
                                <span>APR (Principle Inflation Protection)</span>
                                <span>variable</span>
                            </div>
                            <div className="exchange-rate">
                                <span>Bonus APR</span>
                                <span>variable</span>
                            </div>

                            <button className="stake-button" onClick={withdraw}>Unstake</button>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Stake;
