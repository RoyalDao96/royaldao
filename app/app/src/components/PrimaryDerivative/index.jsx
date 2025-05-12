import React, { useContext, useEffect, useState } from 'react';
import './PrimaryDerivative.css';
import { ActiveContext } from '../ActiveContext';
import { Input, Modal } from 'antd';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import volatileTokenList from './volatileTokenList.json';
import stableTokenList from './stableTokenList.json';
import Web3 from 'web3';
import VSC_ABI from './VSC_ABI';
import SSC_ABI from './SSC_ABI';

const PrimaryDerivative = () => {

    // Token address, abi those are coming from json file
    // Sepolia
    const VOLATILE_SWAP_CONTRACT_ADDRESS = "0x5B750EF0C07272517FFaA6B531C9b575F02A23D5";
    const VOLATILE_SWAP_CONTRACT_ABI = VSC_ABI;

    // Sepolia
    const STABLE_SWAP_CONTRACT_ADDRESS = "0xAEDAf31c06D054a16875B30fa97d0509319F26e9";
    const STABLE_SWAP_CONTRACT_ABI = SSC_ABI;

    // Volatile Variables
    const { isActive, walletAddress } = useContext(ActiveContext);
    const [tokenVolatileOne, setTokenVolatileOne] = useState(volatileTokenList[0]);
    const [tokenVolatileTwo, setTokenVolatileTwo] = useState(volatileTokenList[1]);

    const [isOpenVolatile, setIsOpenVolatile] = useState(false);
    const [changeTokenVolatile, setChangeTokenVolatile] = useState(1);
    const [tokenOneVolatileToSwap, setTokenOneVolatileToSwap] = useState(null);

    const [tokenOneVolatileBalance, setTokenOneVolatileBalance] = useState(0);

    // Stable Variables
    const [tokenStableOne, setTokenStableOne] = useState(stableTokenList[0]);
    const [tokenStableTwo, setTokenStableTwo] = useState(stableTokenList[1]);

    const [isOpenStable, setIsOpenStable] = useState(false);
    const [changeTokenStable, setChangeTokenStable] = useState(1);
    const [tokenOneStableToSwap, setTokenOneStableToSwap] = useState(null);

    const [tokenOneStableBalance, setTokenOneStableBalance] = useState(0);
    const [inputValueForInput2Stable, setInputValueForInput2Stable] = useState('');

    const handleVolatileSwapChange = (e) => {
        const value = e.target.value;
        setTokenOneVolatileToSwap(value);
    }

    function handleVolatileSwap25Percent() {
        setTokenOneVolatileToSwap((tokenOneVolatileBalance * 25) / 100);
    }

    function handleVolatileSwap50Percent() {
        setTokenOneVolatileToSwap((tokenOneVolatileBalance * 50) / 100);
    }

    function handleVolatileSwap75Percent() {
        setTokenOneVolatileToSwap((tokenOneVolatileBalance * 75) / 100);
    }

    function handleVolatileSwapMaxClick() {
        setTokenOneVolatileToSwap(tokenOneVolatileBalance);
    }

    const handleStableSwapChange = (e) => {
        const value = e.target.value;
        setTokenOneStableToSwap(value);

        if (tokenStableTwo.address === "0x6E51215E2f4c932558700eFCf171bCA706E84D5c") {
            setInputValueForInput2Stable(value * 10);
        } else if (tokenStableTwo.address === "0xd2AfD74CB5018c718Cfabc6f6489d5eC0Bc3439E") {
            setInputValueForInput2Stable(value * 2);
        } else if(tokenStableTwo.address === "0xfd976fBAFc63BB5E3d1AA6562D6E84698711f5ff") {
            setInputValueForInput2Stable((value * 8) / 10);

        } else if (tokenStableTwo.address === "0xEc15c8062bCc166fCC4D044D23D5207871E9b919" && tokenStableOne.address ==="0x6E51215E2f4c932558700eFCf171bCA706E84D5c") {
            setInputValueForInput2Stable(value / 10);
        } else if (tokenStableTwo.address === "0xEc15c8062bCc166fCC4D044D23D5207871E9b919" && tokenStableOne.address ==="0xd2AfD74CB5018c718Cfabc6f6489d5eC0Bc3439E") {
            setInputValueForInput2Stable(value / 2);
        } else if (tokenStableTwo.address === "0xEc15c8062bCc166fCC4D044D23D5207871E9b919" && tokenStableOne.address ==="0xfd976fBAFc63BB5E3d1AA6562D6E84698711f5ff") {
            setInputValueForInput2Stable((value * 125) / 100);
        }
    }

    // Update the z-index based on the isOpen state
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    function switchTokens() {
        const one = tokenVolatileOne;
        const two = tokenVolatileTwo;
        setTokenVolatileOne(two);
        setTokenVolatileTwo(one);
    }

    function switchTokensStable() {
        const one = tokenStableOne;
        const two = tokenStableTwo;
        setTokenStableOne(two);
        setTokenStableTwo(one);
    }

    function openModal(asset) {
        setChangeTokenVolatile(asset);
        setIsOpenVolatile(true);
    }

    function openModalStable(asset) {
        setChangeTokenStable(asset);
        setIsOpenStable(true);
    }

    function modifyToken(i) {
        if(changeTokenVolatile === 1) {
            setTokenVolatileOne(volatileTokenList[i]);
        } else {
            setTokenVolatileTwo(volatileTokenList[i]);
        }
        setIsOpenVolatile(false);
    }
    
    function modifyTokenStable(i) {
        if(changeTokenStable === 1) {
            setTokenStableOne(stableTokenList[i]);
        } else {
            setTokenStableTwo(stableTokenList[i]);
        }
        setIsOpenStable(false);
        setTokenOneStableToSwap(0);
        setInputValueForInput2Stable(0);
    }
    
    // Checking the balance of the connected. The connected wallet is coming from ActiveContext but connected
    // in navbar
    async function getTokenOneBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(tokenVolatileOne.abi, tokenVolatileOne.address);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setTokenOneVolatileBalance(web3.utils.fromWei(balance, 'ether'));
            
        } catch (error) {
            console.error(error);
        }
    }

    async function getStableTokenOneBalance() {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(tokenStableOne.abi, tokenStableOne.address);
            const balance = await contract.methods.balanceOf(walletAddress).call();
            setTokenOneStableBalance(web3.utils.fromWei(balance, 'ether'));
            
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchVolatileSwap() {
        try {
            // Initialize Web3 with the Ethereum provider
            const web3 = new Web3(window.ethereum);
    
            // Convert the amount to the smallest unit (Wei) and then to a BN instance
            const amount = web3.utils.toBN(web3.utils.toWei(tokenOneVolatileToSwap.toString(), 'ether'));
    
            // Instantiate contract instances
            const swap_contract = new web3.eth.Contract(VOLATILE_SWAP_CONTRACT_ABI, VOLATILE_SWAP_CONTRACT_ADDRESS);
            const token_one_contract = new web3.eth.Contract(tokenVolatileOne.abi, tokenVolatileOne.address);
    
            // Approve the contract to spend tokens on behalf of the connected user
            await token_one_contract.methods.approve(VOLATILE_SWAP_CONTRACT_ADDRESS, amount).send({ from: walletAddress });
    
            // Call the swap function of the contract
            await swap_contract.methods.swapToken1ToToken2(tokenVolatileOne.address, tokenVolatileTwo.address, amount).send({ from: walletAddress });
    
            setTokenOneVolatileToSwap(0);
        } catch (error) {
            console.log(error);
        }
    }

    // Already created contract for stableSwap 0xAEDAf31c06D054a16875B30fa97d0509319F26e9
    // Already send 10 trillion Premium Collateralized Stablecoin (pUSDg) to the contract
    // Already send 10 trillion Floor Collateralized Stablecoin (fUSDg) to the contract
    // Already send 10 trillion Under-Premium Collateralized Stablecoin (uUSDg) to the contract
    async function fetchStableSwap() {
        if(tokenStableOne.address === "0xEc15c8062bCc166fCC4D044D23D5207871E9b919" || tokenStableTwo.address === "0xEc15c8062bCc166fCC4D044D23D5207871E9b919") {
            try {

                // Initialize Web3 with the Ethereum provider
                const web3 = new Web3(window.ethereum);

                // Convert the amount to the smallest unit (Wei) and then to a BN instance
                const amount = web3.utils.toBN(web3.utils.toWei(tokenOneStableToSwap.toString(), 'ether'));

                // Instantiate contract instances
                const swap_contract = new web3.eth.Contract(STABLE_SWAP_CONTRACT_ABI, STABLE_SWAP_CONTRACT_ADDRESS);
                const token_one_contract = new web3.eth.Contract(tokenStableOne.abi, tokenStableOne.address);

                // Approve the contract to spend tokens on behalf of the connected user
                await token_one_contract.methods.approve(STABLE_SWAP_CONTRACT_ADDRESS, amount).send({ from: walletAddress });

                // Call the swap function of the contract
                await swap_contract.methods.swapToken1ToToken2(tokenStableOne.address, tokenStableTwo.address, amount, 10, 2).send({ from: walletAddress });

                setTokenOneStableToSwap(0);
                setInputValueForInput2Stable(0);

            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Cannot convert to Stable - Stable");
        }
    }

    useEffect(() => {
        getTokenOneBalance();
        getStableTokenOneBalance();
    });

    return (
        <>
        <Modal
            open={isOpenVolatile}
            footer={null}
            onCancel={() => setIsOpenVolatile(false)}
            title="Select a token"
            zIndex={9999999}
        >
            <div className='modalContent'>
                {
                    volatileTokenList.map((e, i) => {
                        return (
                            <div className='tokenChoice' key={i} onClick={() => modifyToken(i)}>
                                {/* <img src={e.img} alt={e.ticker} className='tokenLogo' /> */}
                                <div className="tokenChoiceNames">
                                    <div className="tokenName">{e.name}</div>
                                    <div className="tokenTicker">{e.ticker}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Modal>

        <Modal
            open={isOpenStable}
            footer={null}
            onCancel={() => setIsOpenStable(false)}
            title="Select a token"
            zIndex={9999999}
        >
            <div className='modalContent'>
                {
                    stableTokenList.map((e, i) => {
                        return (
                            <div className='tokenChoice' key={i} onClick={() => modifyTokenStable(i)}>
                                {/* <img src={e.img} alt={e.ticker} className='tokenLogo' /> */}
                                <div className="tokenChoiceNames">
                                    <div className="tokenName">{e.name}</div>
                                    <div className="tokenTicker">{e.ticker}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Modal>

        <div className='parent-parent-pd' align='center'>
            <div className="column" align='center'>
                <div className='swap-parent' align='center' style={parentVaultDetailStyle}>
                    <div className='tradeBox' >
                        <div className='tradeBoxHeader'>
                            <h4>Volatile Series</h4>
                        </div>

                        <div className="inputs">
                            <Input placeholder='0' type='number' className='no-arrows' value={tokenOneVolatileToSwap} onChange={handleVolatileSwapChange}></Input>
                            <Input placeholder='0' type='number' className='no-arrows' value={tokenOneVolatileToSwap} disabled={true}></Input>
                            <div className='switchButton' onClick={switchTokens}>
                                <ArrowDownOutlined className='switchArrow' />
                            </div>
                            <div>
                                <div className='assetOne' onClick={() => openModal(1)}>
                                    {/* <img src={tokenOne.img} alt="assetOneLogo" className='assetLogo' /> */}
                                    {tokenVolatileOne.ticker}
                                    <DownOutlined />
                                </div>
                            </div>
                            <div className="assetTwo" onClick={() => openModal(2)}>
                                {/* <img src={tokenTwo.img} alt="assetTwoLogo" className='assetLogo' /> */}
                                {tokenVolatileTwo.ticker}
                                <DownOutlined />
                            </div>
                        </div>
                        
                        <div className='exchange-rate-parent'>
                            <div className='balance-parent bp2' align='left'>
                                <span>Balance: </span> <span>{parseFloat(tokenOneVolatileBalance).toFixed(4)}</span>
                            </div>
                            <div className="exchange-rate">
                                <button className="percent-button" onClick={handleVolatileSwap25Percent}>25%</button>
                                <button className="percent-button" onClick={handleVolatileSwap50Percent}>50%</button>
                                <button className="percent-button" onClick={handleVolatileSwap75Percent}>75%</button>
                                <button className="percent-button percent-button-last" ids onClick={handleVolatileSwapMaxClick}>MAX</button>
                            </div>
                        </div>

                        <div className="swapButton" onClick={fetchVolatileSwap}>Swap</div>
                    </div>
                </div>
            </div>

            <div className="column col2">
                <div className='swap-parent' align='center'>
                    <div className='tradeBox'>
                        <div className='tradeBoxHeader'>
                            <h4>Stable Series</h4>
                        </div>

                        <div className="inputs">
                            <Input placeholder='0' type='number' className='no-arrows' value={tokenOneStableToSwap} onChange={handleStableSwapChange}></Input>
                            <Input placeholder='0' type='number' className='no-arrows' value={inputValueForInput2Stable} disabled={true}></Input>
                            <div className='switchButton' onClick={switchTokensStable}>
                                <ArrowDownOutlined className='switchArrow' />
                            </div>
                            <div>
                                <div className='assetOne' onClick={() => openModalStable(1)}>
                                    {/* <img src={tokenOne.img} alt="assetOneLogo" className='assetLogo' /> */}
                                    {tokenStableOne.ticker}
                                    <DownOutlined />
                                </div>
                            </div>
                            <div className="assetTwo" onClick={() => openModalStable(2)}>
                                {/* <img src={tokenTwo.img} alt="assetTwoLogo" className='assetLogo' /> */}
                                {tokenStableTwo.ticker}
                                <DownOutlined />
                            </div>
                        </div>
                        
                        <div className='exchange-rate-parent'>
                            <div className='balance-parent bp2' align='left'>
                                <span>Balance:</span> <span>{parseFloat(tokenOneStableBalance).toFixed(4)}</span>
                            </div>

                            <div className='balance-parent bp2' align='left'>
                                <span>Base SST Price:</span> <span>$2 USD</span>
                            </div>

                            <div className='balance-parent bp2' align='left'>
                                <span>Current SST Price:</span> <span>$10 USD</span>
                            </div>
                            
                            <div className="balance-parent bp2" align='left'>
                                {
                                    tokenStableTwo.address === "0x6E51215E2f4c932558700eFCf171bCA706E84D5c" ?
                                    <span style={{ opacity: "0.6" }}>pUSDg = GR_amount * current_SST_price</span>
                                    : tokenStableTwo.address === "0xd2AfD74CB5018c718Cfabc6f6489d5eC0Bc3439E" ?
                                    <span style={{ opacity: "0.6" }}>fUSDg = GR_amount * base_SST_price</span>
                                    : tokenStableTwo.address === "0xfd976fBAFc63BB5E3d1AA6562D6E84698711f5ff" ?
                                    <span style={{ opacity: "0.6" }}>uUSDg = (GR_amount * 8) / 10</span>

                                    : tokenStableOne.address === "0x6E51215E2f4c932558700eFCf171bCA706E84D5c" ?
                                    <span style={{ opacity: "0.6" }}>pUSDg = GR_amount / current_SST_price</span>
                                    : tokenStableOne.address === "0xd2AfD74CB5018c718Cfabc6f6489d5eC0Bc3439E" ?
                                    <span style={{ opacity: "0.6" }}>fUSDg = GR_amount / base_SST_price</span>
                                    : tokenStableOne.address === "0xfd976fBAFc63BB5E3d1AA6562D6E84698711f5ff" ?
                                    <span style={{ opacity: "0.6" }}>uUSDg = (GR_amount * 125) / 100</span> 
                                    : ""
                                }
                            </div>
                        </div>

                        <div className="swapButton" onClick={fetchStableSwap}>Swap</div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default PrimaryDerivative