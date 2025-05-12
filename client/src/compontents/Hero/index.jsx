import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './hero.css';
import homePageGif from '../../assets/webImages/homePageGif.gif';
import HeroImg from '../../assets/webImages/heroImg.jpg';
import Logo from '../../assets/webImages/RD_LOGO_WEB2.png';
import USDTLogo from '../../assets/webImages/USDTLogo.png';
import Web3 from 'web3';

const Hero = () => {

  // Real Base Chain's Address & ABI
  const PS_CONTRACT_ADDRESS = "0x69f31bDF01Db41cb9Db992D863c4119fa155E914";
  const PS_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"BuyToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"MinimumLimitChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newToken","type":"address"}],"name":"TokenChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newTotalSupply","type":"uint256"}],"name":"TotalSupplyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newToken","type":"address"}],"name":"USDTTokenChanged","type":"event"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"contract IToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountRaisedUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyTokenUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_inDollar","type":"uint256"}],"name":"changeMinimumLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"changeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_total","type":"uint256"}],"name":"changeTotalSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_USDT","type":"address"}],"name":"changeUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractBalanceUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"divider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractTokenApproval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProgress","outputs":[{"internalType":"uint256","name":"_percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumDollar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ptgGreenrock","outputs":[{"internalType":"contract IToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"soldToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"stopPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenPerUsd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IToken","name":"token","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"usdtToToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"usdt_balance","type":"uint256"},{"internalType":"uint256","name":"token_balance","type":"uint256"}],"stateMutability":"view","type":"function"}];

  // Real Base Chain's Address & ABI
  const USDT_ADDRESS = "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2";
  const USDT_ABI = [{"inputs":[{"internalType":"address","name":"_l2Bridge","type":"address"},{"internalType":"address","name":"_l1Token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"l1Token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Bridge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

  // Real Base Chain's Address & ABI
  const PTGR_ADDRESS = "0xA518913e3f62c5E134B6BC995cF0e883596c01A9";
  const PTGR_ABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ECDSAInvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"name":"ECDSAInvalidSignatureLength","type":"error"},{"inputs":[{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"ECDSAInvalidSignatureS","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"ERC2612ExpiredSignature","type":"error"},{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC2612InvalidSigner","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidAccountNonce","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  const [usdtToGreenRock, setUsdtToGreenRock] = useState(0);
  const [usdtAmount, setUsdtAmount] = useState(0);
  const [connectedAddress, setConnectedAddress] = useState(undefined);
  const [presaleStatus, setPresaleStatus] = useState(false);
  const [amountRaised, setAmountRaised] = useState(0); // New state for amount raised
  const [ptgrBalance, setPtgrBalance] = useState(0); // New state for PTGR balance

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  async function connectWallet() {
    if (window.ethereum) {
      try {
        var web3 = new Web3(window.ethereum);
        await window.ethereum.send('eth_requestAccounts');
        var accounts = await web3.eth.getAccounts();
        setConnectedAddress(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask not detected. Install Metamask extension to use this feature.");
    }
  }

  useEffect(() => {
    const countDownDate = new Date("June 30, 2024 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    async function fetchConnectedAddress() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setConnectedAddress(accounts[0]);
        }
      }
    }
    fetchConnectedAddress();

    async function getPresalesStatus() {
      try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(PS_ABI, PS_CONTRACT_ADDRESS);
        const preSaleState = await contract.methods.presaleStatus().call({ from: connectedAddress });
        setPresaleStatus(preSaleState);
      } catch (error) {

      }
    }
    getPresalesStatus();

    async function fetchAmountRaisedUSDT() {
      try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(PS_ABI, PS_CONTRACT_ADDRESS);
        const amount = await contract.methods.amountRaisedUSDT().call();
        setAmountRaised(web3.utils.fromWei(amount, 'mwei')); // Assuming amount is in micro USDT
      } catch (error) {
        console.error(error);
      }
    }
    fetchAmountRaisedUSDT();

    // async function fetchPTGRBalance() {
    //   try {
    //     const web3 = new Web3(window.ethereum);
    //     const contract = new web3.eth.Contract(PTGR_ABI, PTGR_ADDRESS);
    //     const balance = await contract.methods.balanceOf(connectedAddress).call();
    //     setPtgrBalance(web3.utils.fromWei(balance, 'ether')); // Assuming balance is in wei
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // if (connectedAddress) {
    //   fetchPTGRBalance();
    // }

    return () => {
      clearInterval(timer);
      window.ethereum.removeAllListeners('accountsChanged');
    }
    
  }, []); // Empty dependency array ensures effect is only run once after mount


  // **************************************************************************************** //
  // **************************************************************************************** //
  // **************************************************************************************** //
  // ***************** NEVER EVER FORGET TO SEND TOKENS TO PRESALE CONTRACT ***************** //
  // **************************************************************************************** //
  // **************************************************************************************** //
  // **************************************************************************************** //

  const buyTokens = async () => {
    try {
        if (!window.ethereum) {
            console.error("Ethereum wallet is not connected");
            alert("Please connect to an Ethereum wallet.");
            return;
        }

        // console.log(usdtAmount, usdtToGreenRock);

        // Initialize Web3 with the Ethereum provider
        const web3 = new Web3(window.ethereum);

        // Instantiate contract instances
        const contract = new web3.eth.Contract(PS_ABI, PS_CONTRACT_ADDRESS);
        const usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);

        // Ensure connectedAddress is defined and holds the currently connected user's address
        const accounts = await web3.eth.getAccounts();
        const connectedAddress = accounts[0];

        // Convert usdtAmount to string before conversion
        const amount = web3.utils.toBN(usdtAmount).mul(web3.utils.toBN(1e6)).toString();

        // Approve the contract to spend USDT tokens on behalf of the connected user
        await usdtContract.methods.approve(PS_CONTRACT_ADDRESS, amount).send({ from: connectedAddress });

        // Call the buyTokenUSDT function of the contract
        await contract.methods.buyTokenUSDT(amount).send({ from: connectedAddress });

    } catch (error) {
        console.error("Error occurred while buying tokens:", error);
        alert("Failed to buy tokens: " + error.message);
    }
}

  const usdtToGreenRockFunc = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setUsdtAmount(value);

    // Make this to dynamic
    const realValue = value / 0.06;
    setUsdtToGreenRock(realValue);
  }
  
  return (
    <div class="banner-image w-100 d-flex justify-content-center align-items-center">
      <div className="container hero">
        <div class="row align-items-center text-light">
            <div class="col-lg d-none d-lg-block" align="center">
                <div class="content">
                    <img className='gifFile' src={HeroImg} alt="" />
                    <h5><b>15,800</b> Carat Purplish Red Burmese Ruby</h5>
                </div>
            </div>
            <div class="col-lg">
              <div class="content text-center p-3 mt-3 presales">
                <h3 class="text-white"><b>RoyalDAO</b> Presales</h3>
                <div className='parent-countdown text-white mt-4'>
                  <div>
                    <p id='days'>{timeLeft.days}</p>
                    <span>Days</span>
                  </div>
                  <div>
                    <p id='hours'>{timeLeft.hours}</p>
                    <span>Hours</span>
                  </div>

                  <div>
                    <p id='minutes'>{timeLeft.minutes}</p>
                    <span>Minutes</span>
                  </div>

                  <div>
                    <p className='seconds'>{timeLeft.seconds}</p>
                    <span>Seconds</span>
                  </div>
                </div>

                <p className='text-white mt-3'>Till <b>RoyalDAO</b> claim and launch</p>

                <div className='mt-2'>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ '--progress-width': `${amountRaised / 1000}%` }}>
                      <h3 className="raised">${amountRaised} &nbsp;raised </h3>
                    </div>
                      <h3 className="goal">Goal: $300,000</h3>
                  </div>
                </div>

                {/* <p className='text-white mt-3'>Your Total PreTGE $Grimstone = {parseInt(ptgrBalance).toLocaleString()}</p> */}

                {/* <div className='worth mt-4'>
                  <h4 className='presale-stages'>Previous</h4>
                  <h2 class="hr-lines presales-stage-text2">-</h2>
                </div> */}

                <div className='worth current mt-4'>
                  <h4 className='presale-stages'>Pre TGE</h4>
                  <h2 class="hr-lines presales-stage-text">1 PreTGE $Grimstone = 0.06 USDT</h2>
                </div>

                {/* <div className='worth mt-4'>
                  <h4 className='presale-stages'>Next</h4>
                  <h2 class="hr-lines presales-stage-text2">-</h2>
                </div> */}

                <div className='container'>
                  <div className="row">
                    <div className="col-lg mt-4">
                      <div class="input-container">
                        <input type="number" placeholder="0" onChange={usdtToGreenRockFunc} />
                        <img src={USDTLogo} alt="USDT Logo" class="icon" />
                      </div>
                    </div>
                    <div className="col-lg mt-4">
                      <div class="input-container">
                        <input type="number" placeholder="0" value={usdtToGreenRock}  />
                        <img src={Logo} alt="RoyalDAO's GreenRock Logo" class="icon" />
                      </div>
                    </div>
                  </div>

                  { connectedAddress ? (
                    presaleStatus ? (
                      <button className='mt-3 w-100 buy-now-btn' onClick={() => buyTokens()}>Buy Now</button>
                    ) : (
                      <button className='mt-3 w-100 buy-now-btn' disabled>Sales Not Started Yet!</button>
                    )
                    
                  ) : (
                    <button className='mt-3 w-100 buy-now-btn' onClick={connectWallet}>Connect</button>
                  )}
                </div>
                
              </div>
              
              <h6>If you are joining at this stage, you are entering RoyalDAO at an extremely early phase.</h6>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Hero