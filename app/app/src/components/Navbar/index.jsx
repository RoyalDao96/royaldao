import React, { useContext, useState, useEffect } from 'react';
import './navbar.css';
import Sidebar from '../Sidebar';
import { ActiveContext } from '../ActiveContext';
import { ethers } from 'ethers';

const SEPOLIA_CHAIN_ID = '0xaa36a7'; // Sepolia testnet chain ID in hexadecimal   
                                     // (0x2105 Base chain ID), (0xaa36a7 Sepolia Chain ID) (0x1 Ethereum MN)

const HomePage = () => {
  const { isActive, setIsActive } = useContext(ActiveContext);
  const { walletAddress, setWalletAddress } = useContext(ActiveContext);
  const { provider, setProvider } = useContext(ActiveContext);
  const [account, setAccount] = useState(null);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const connectWallet = async () => {
      if (window.ethereum) {
        try {
            // Request accounts from MetaMask
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            if (accounts.length === 0) {
                console.error("No accounts found");
                return;
            }
            // Set the first account as the active account
            const account = accounts[0];
            setAccount(account);
            setWalletAddress(account);

            // Initialize ethers.js provider
            const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(ethersProvider); // Store provider in context or state

            checkNetwork(); // Your custom function to check the network
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            // Handle errors (e.g., user rejected the connection request)
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  };

  const checkNetwork = async () => {
    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      // console.log(`Connected to chain: ${chainId}`);
      if (chainId !== SEPOLIA_CHAIN_ID) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: SEPOLIA_CHAIN_ID }],
          });
          console.log("Successfully switched to Sepolia Test Network");
        } catch (switchError) {
          console.error("Error switching to Sepolia Test Network:", switchError);
        }
      }
    } catch (error) {
      console.error("Error checking network:", error);
    }
  };

  useEffect(() => {
    connectWallet();
    checkNetwork();
  }, []);

  return (
    <>  
      <div className={`home-container ${isActive ? 'active' : ''}`}>
        <Sidebar active={isActive} />

        <div className={`main ${isActive ? 'active' : ''}`}>
          <div className="topbar">
            <div className="toggle" onClick={handleToggle}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div className="relative w-full mr-10">
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 py-2 px-4 rounded connect-wallet-btn"
                onClick={connectWallet}
              >
                {account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
