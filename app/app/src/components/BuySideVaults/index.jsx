import React, { useContext, useEffect, useState } from 'react';
import './BuySideVaults.css';
import { ActiveContext } from '../ActiveContext';
import ethLogo from '../../images/ethLogo.png';
import btcLogo from '../../images/btcLogo.png';
import solLogo from '../../images/solLogo.png';
import usdtLogo from '../../images/usdtLogo.png';
import Copy from '../../images/copy.png';
import Logo from '../../images/Logo.png';
import Web3 from 'web3';
import b3kiETH_ABI from './3kIETH_ABI';
import BuyPoolABI from './buyPool_ABI';

const BuySideVaults = () => {

  const { isActive, walletAddress } = useContext(ActiveContext);

  const [b3kIETHBalance, setb3kIETHBalance] = useState(0);
  const [ETHBalanceForSC, setETHBalanceForSC] = useState(0);
  const [s3kIETHAmount, setS3kIETHAmount] = useState(null);

  const [mockETHBalance, setMockETHBalance] = useState(null);

  const [activeTab, setActiveTab] = useState('Buy Pool');
  const tabs = ['Buy Pool', 'Swap Pool'];

  const parentVaultDetailStyle = {
    zIndex: isActive ? -1 : 9999,
  };

  const handleMaxClick = () => {
    setS3kIETHAmount(b3kIETHBalance);
  };

  const handle25Percent = () => {
    setS3kIETHAmount((b3kIETHBalance * 25) / 100);
  }

  const handle50Percent = () => {
    setS3kIETHAmount((b3kIETHBalance * 50) / 100);
  }

  const handle75Percent = () => {
    setS3kIETHAmount((b3kIETHBalance * 75) / 100);
  }
  
  const longString = "0x00000000000000000000000000000000000000";
  const formatString = (str) => {
    if (str.length <= 14) {
      return str; // Return the string if it is too short for the extraction
    }
    const firstPart = str.slice(0, 8); // First 8 characters
    const lastPart = str.slice(-6); // Last 6 characters
    return `${firstPart}...${lastPart}`; // Concatenate with ellipsis in between
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(longString).then(
      () => {
        // Provide feedback to the user
        alert('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  const handleSwapChange = (e) => {
    const value = e.target.value;
    setS3kIETHAmount(value);
  };

  async function get3kIETHBalance() {
    const ADDR = "0x3a3625530494335c961cab9B9AcdF806819955a8";
    const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"flatFee","type":"uint256"}],"name":"FlatPlatformFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformFeeBps","type":"uint256"}],"name":"PlatformFeeInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum IPlatformFee.PlatformFeeType","name":"feeType","type":"uint8"}],"name":"PlatformFeeTypeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"PrimarySaleRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantityMinted","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"indexed":false,"internalType":"struct ITokenERC20.MintRequest","name":"mintRequest","type":"tuple"}],"name":"TokensMintedWithSignature","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLOCK_MODE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clock","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractVersion","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformFeeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_defaultAdmin","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_contractURI","type":"string"},{"internalType":"address[]","name":"_trustedForwarders","type":"address[]"},{"internalType":"address","name":"_primarySaleRecipient","type":"address"},{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mintWithSignature","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"primarySaleRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"setPlatformFeeInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleRecipient","type":"address"}],"name":"setPrimarySaleRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(ABI, ADDR);
        const balance = await contract.methods.balanceOf(walletAddress).call();
        setb3kIETHBalance(web3.utils.fromWei(balance, 'ether'));
        
    } catch (error) {
        console.error(error);
    }
  }

  async function getMockETHBalance() {
    const ADDR = "0xF9C67a711b06693e977E72C76bc9dD3a2C34bEc3";
    const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"flatFee","type":"uint256"}],"name":"FlatPlatformFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformFeeBps","type":"uint256"}],"name":"PlatformFeeInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum IPlatformFee.PlatformFeeType","name":"feeType","type":"uint8"}],"name":"PlatformFeeTypeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"PrimarySaleRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantityMinted","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"indexed":false,"internalType":"struct ITokenERC20.MintRequest","name":"mintRequest","type":"tuple"}],"name":"TokensMintedWithSignature","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLOCK_MODE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clock","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractVersion","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformFeeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_defaultAdmin","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_contractURI","type":"string"},{"internalType":"address[]","name":"_trustedForwarders","type":"address[]"},{"internalType":"address","name":"_primarySaleRecipient","type":"address"},{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mintWithSignature","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"primarySaleRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"setPlatformFeeInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleRecipient","type":"address"}],"name":"setPrimarySaleRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(ABI, ADDR);
        const balance = await contract.methods.balanceOf(walletAddress).call();
        setMockETHBalance(web3.utils.fromWei(balance, 'ether'));
        
    } catch (error) {
        console.error(error);
    }
  }

  async function getEthBalanceForSmartContract() {
    const ADDR = "0xF9C67a711b06693e977E72C76bc9dD3a2C34bEc3";
    const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"flatFee","type":"uint256"}],"name":"FlatPlatformFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"platformFeeRecipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformFeeBps","type":"uint256"}],"name":"PlatformFeeInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum IPlatformFee.PlatformFeeType","name":"feeType","type":"uint8"}],"name":"PlatformFeeTypeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"}],"name":"PrimarySaleRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantityMinted","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"signer","type":"address"},{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"indexed":false,"internalType":"struct ITokenERC20.MintRequest","name":"mintRequest","type":"tuple"}],"name":"TokensMintedWithSignature","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLOCK_MODE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clock","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractVersion","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformFeeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_defaultAdmin","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_contractURI","type":"string"},{"internalType":"address[]","name":"_trustedForwarders","type":"address[]"},{"internalType":"address","name":"_primarySaleRecipient","type":"address"},{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mintWithSignature","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"primarySaleRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_platformFeeRecipient","type":"address"},{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}],"name":"setPlatformFeeInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleRecipient","type":"address"}],"name":"setPrimarySaleRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"primarySaleRecipient","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint128","name":"validityStartTimestamp","type":"uint128"},{"internalType":"uint128","name":"validityEndTimestamp","type":"uint128"},{"internalType":"bytes32","name":"uid","type":"bytes32"}],"internalType":"struct ITokenERC20.MintRequest","name":"_req","type":"tuple"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(ABI, ADDR);
        const balance = await contract.methods.balanceOf("0x21D81726D300E3915f6cB5C1B16484a7DB78197B").call();
        setETHBalanceForSC(web3.utils.fromWei(balance, 'ether'));
        
    } catch (error) {
        console.error(error);
    }
  }

  async function stakeTokens() {
    try {
      // const BUYPOOL_ADDR = "0x387843561A56804230Bda6c6e8c195E0D9860e8B";
      // const BIF_ADDR = "0x3a3625530494335c961cab9B9AcdF806819955a8"
  
      // // Initialize Web3 with the Ethereum provider
      // const web3 = new Web3(window.ethereum);
      // const amount = web3.utils.toBN(web3.utils.toWei(s3kIETHAmount.toString(), 'ether'));
  
      // // Calculate the pricePerBIF in the smallest unit (wei for mockETH)
      // const pricePerBIF =  web3.utils.toWei('1.05', 'ether')
  
      // // Instantiate contract instances
      // const buypool_contract = new web3.eth.Contract(BuyPoolABI, BUYPOOL_ADDR);
      // const bif_contract = new web3.eth.Contract(b3kiETH_ABI, BIF_ADDR);
  
      // // Approve the contract to spend Grimrock tokens on behalf of the connected user
      // await bif_contract.methods.approve(BUYPOOL_ADDR, amount).send({ from: walletAddress });
  
      // // Call the exchangeBIFforMockETH function of the contract with properly formatted price
      // await buypool_contract.methods.exchangeBIFforMockETH(amount, pricePerBIF).send({ from: walletAddress });
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get3kIETHBalance();
    getEthBalanceForSmartContract();
    getMockETHBalance();
  });
  

  return (
    <div className='buyside-parent bif-parent' align='center' style={parentVaultDetailStyle}>
      <div className="tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
             </button>
          ))}
      </div>

      {activeTab === 'Buy Pool' && (
        <>
          <h1 className='bsv_title'>Volatile Version (Coins Holder View)</h1>
          <div className="cards-row">
            
            <div className="card-container">
              <h1 className='title'>3kIETH</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit ETH</span>
                    <span className="for-currency">{ETHBalanceForSC} ETH</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.42 ETH Per 3kIETH</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">ETH In Wallet</span>
                    <span className="for-currency">{mockETHBalance} ETH</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button" onClick={handle25Percent}>25%</button>
                <button className="percent-button" onClick={handle50Percent}>50%</button>
                <button className="percent-button" onClick={handle75Percent}>75%</button>
                <button className="percent-button percent-button-last" onClick={handleMaxClick}>100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  value={s3kIETHAmount}
                  onChange={handleSwapChange}
                  placeholder="Amount of ETH you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  value={s3kIETHAmount}
                  onChange={handleSwapChange}
                  placeholder="Amount of ETH you want to withdraw" />
              </div>
            </div>

            <div className="card-container btc">
              <h1 className='title'>60kIBTC</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit BTC</span>
                    <span className="for-currency">- BTC</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.37 BTC Per 60kIBTC</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">BTC In Wallet</span>
                    <span className="for-currency">- BTC</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of BTC you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of BTC you want to withdraw" />
              </div>
            </div>

            <div className="card-container">
              <h1 className='title'>6kIETH</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit ETH</span>
                    <span className="for-currency">{ETHBalanceForSC} ETH</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">2.05 ETH Per 6kIETH</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">ETH In Wallet</span>
                    <span className="for-currency">{mockETHBalance} ETH</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of ETH you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of ETH you want to withdraw" />
              </div>
            </div>

            <div className="card-container sol">
              <h1 className='title'>100ISOL</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit SOL</span>
                    <span className="for-currency">- SOL</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">2.05 SOL Per 100ISOL</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">SOL In Wallet</span>
                    <span className="for-currency">- SOL</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of SOL you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of SOL you want to withdraw" />
              </div>
            </div>

            <div className="card-container sol">
              <h1 className='title'>150ISOL</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit SOL</span>
                    <span className="for-currency">- SOL</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">2.50 SOL Per 150ISOL</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">SOL In Wallet</span>
                    <span className="for-currency">- SOL</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of SOL you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of SOL you want to withdraw" />
              </div>
            </div>

            <div className="card-container btc">
              <h1 className='title'>80kIBTC</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit BTC</span>
                    <span className="for-currency">- BTC</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.72 BTC Per 80kIBTC</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">BTC In Wallet</span>
                    <span className="for-currency">- BTC</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of BTC you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of BTC you want to withdraw" />
              </div>
            </div>

          </div>

          <h1 className='bsv_title stable'>Volatile Version (BIF Holder View)</h1>
          <div className="cards-row">

            <div className="card-container">
              <h1 className='title'>3kIETH</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit ETH</span>
                    <span className="for-currency">{ETHBalanceForSC} ETH</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.42 ETH Per 3kIETH</span>
                </div>
              </div>

              <div className='pool-owner'>
                <h1 className='title'>Pool Owner</h1>
                <div className='address-wrapper'>
                  <span className='for-currency'>{formatString(longString)}</span>
                  <button className='copy-button' onClick={copyToClipboard}>
                    <img src={Copy} alt="Icon" className="copyImg" />
                  </button>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button" onClick={handle25Percent}>25%</button>
                <button className="percent-button" onClick={handle50Percent}>50%</button>
                <button className="percent-button" onClick={handle75Percent}>75%</button>
                <button className="percent-button percent-button-last" onClick={handleMaxClick}>100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  value={s3kIETHAmount}
                  onChange={handleSwapChange}
                  placeholder="Amount of 3kIETH you want to swap" />

                <button className="custom-button">Swap</button>
              </div>
            </div>

            <div className="card-container btc">
              <h1 className='title'>60kIBTC</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit BTC</span>
                    <span className="for-currency">- BTC</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.37 BTC Per 60kIBTC</span>
                </div>
              </div>

              <div className='pool-owner'>
                <h1 className='title'>Pool Owner</h1>
                <div className='address-wrapper'>
                  <span className='for-currency'>{formatString(longString)}</span>
                  <button className='copy-button' onClick={copyToClipboard}>
                    <img src={Copy} alt="Icon" className="copyImg" />
                  </button>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of 60kIBTC you want to swap" />

                <button className="custom-button">Swap</button>
              </div>
            </div>

            <div className="card-container">
              <h1 className='title'>6kIETH</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit ETH</span>
                    <span className="for-currency">{ETHBalanceForSC} ETH</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">2.05 ETH Per 6kIETH</span>
                </div>
              </div>

              <div className='pool-owner'>
                <h1 className='title'>Pool Owner</h1>
                <div className='address-wrapper'>
                  <span className='for-currency'>{formatString(longString)}</span>
                  <button className='copy-button' onClick={copyToClipboard}>
                    <img src={Copy} alt="Icon" className="copyImg" />
                  </button>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of 6kIETH you want to swap" />

                <button className="custom-button">Swap</button>
              </div>
            </div>

            <div className="card-container sol">
              <h1 className='title'>100ISOL</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit SOL</span>
                    <span className="for-currency">- SOL</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">2.05 SOL Per 100ISOL</span>
                </div>
              </div>

              <div className='pool-owner'>
                <h1 className='title'>Pool Owner</h1>
                <div className='address-wrapper'>
                  <span className='for-currency'>{formatString(longString)}</span>
                  <button className='copy-button' onClick={copyToClipboard}>
                    <img src={Copy} alt="Icon" className="copyImg" />
                  </button>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of 100ISOL you want to swap" />

                <button className="custom-button">Swap</button>
              </div>
            </div>

            <div className="card-container sol">
              <h1 className='title'>150ISOL</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit SOL</span>
                    <span className="for-currency">- SOL</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.60 SOL Per 150ISOL</span>
                </div>
              </div>

              <div className='pool-owner'>
                <h1 className='title'>Pool Owner</h1>
                <div className='address-wrapper'>
                  <span className='for-currency'>{formatString(longString)}</span>
                  <button className='copy-button' onClick={copyToClipboard}>
                    <img src={Copy} alt="Icon" className="copyImg" />
                  </button>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of 150ISOL you want to swap" />

                <button className="custom-button">Swap</button>
              </div>
            </div>

            <div className="card-container btc">
              <h1 className='title'>80kIBTC</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit BTC</span>
                    <span className="for-currency">- BTC</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">1.72 BTC Per 80kIBTC</span>
                </div>
              </div>

              <div className='pool-owner'>
                <h1 className='title'>Pool Owner</h1>
                <div className='address-wrapper'>
                  <span className='for-currency'>{formatString(longString)}</span>
                  <button className='copy-button' onClick={copyToClipboard}>
                    <img src={Copy} alt="Icon" className="copyImg" />
                  </button>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of 80kIBTC you want to swap" />

                <button className="custom-button">Swap</button>
              </div>
            </div>

          </div>


          <h1 className='bsv_title stable'>Stable Version (USDT Holder View)</h1>
          <div className="cards-row">

            <div className="card-container">
              <h1 className='title'>3kIETH</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={usdtLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit USDT</span>
                    <span className="for-currency">- USDT</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={ethLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">3100 USDT Per 3kIETH</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">USDT In Wallet</span>
                    <span className="for-currency">- USDT</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of USDT you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of USDT you want to withdraw" />
              </div>
            </div>

            <div className="card-container sol">
              <h1 className='title'>150ISOL</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={usdtLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit USDT</span>
                    <span className="for-currency">- USDT</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={solLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">172 USDT Per 150ISOL</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">USDT In Wallet</span>
                    <span className="for-currency">- USDT</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of USDT you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of USDT you want to withdraw" />
              </div>
            </div>

            <div className="card-container btc">
              <h1 className='title'>60kIBTC</h1>
              <div className="card-content">
                <div className="offer-section">
                  <img src={usdtLogo} alt="Icon" className="offer-image" />
                  <div className="for-section">
                    <span className="for-amount">Total Deposit USDT</span>
                    <span className="for-currency">- USDT</span>
                  </div>
                </div>
                 <div className="for-section">
                  <img src={btcLogo} alt="Icon" className="offer-image" />
                  <span className="for-amount">Offer Rate</span>
                  <span className="for-currency">62,000 USDT Per 60kIBTC</span>
                </div>
              </div>

              <div className="card-content">
                <div className="offer-section of2">
                  <div className="for-section">
                    <span className="for-amount">USDT In Wallet</span>
                    <span className="for-currency">- USDT</span>
                  </div>
                </div>
                 <div className="for-section of2">
                  <span className="for-amount">BIF In Wallet</span>
                  <span className="for-currency">-</span>
                </div>
              </div>

              <div className="exchange-rate">
                <button className="percent-button">25%</button>
                <button className="percent-button">50%</button>
                <button className="percent-button">75%</button>
                <button className="percent-button percent-button-last">100%</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
                <input type="number" className="custom-input" 
                  placeholder="Amount of USDT you want to deposit" />

                <button className="custom-button">Deposit</button>
              </div>

              <div className="input-button-wrapper buy-bif-div">
              <button className="custom-button">Withdraw</button>
                <input type="number" className="custom-input" 
                  placeholder="Amount of USDT you want to withdraw" />
              </div>
            </div>
            
          </div>

          <h1 className='bsv_title stable'>Stable Version (BIF Holder View)</h1>
          <div className="cards-row">

            <div className="card-container">
                <h1 className='title'>3kIETH</h1>
                <div className="card-content">
                  <div className="offer-section">
                    <img src={usdtLogo} alt="Icon" className="offer-image" />
                    <div className="for-section">
                      <span className="for-amount">Total Deposit USDT</span>
                      <span className="for-currency">- USDT</span>
                    </div>
                  </div>
                  <div className="for-section">
                    <img src={ethLogo} alt="Icon" className="offer-image" />
                    <span className="for-amount">Offer Rate</span>
                    <span className="for-currency">3100 USDT Per 3kIETH</span>
                  </div>
                </div>

                <div className='pool-owner'>
                  <h1 className='title'>Pool Owner</h1>
                  <div className='address-wrapper'>
                    <span className='for-currency'>{formatString(longString)}</span>
                    <button className='copy-button' onClick={copyToClipboard}>
                      <img src={Copy} alt="Icon" className="copyImg" />
                    </button>
                  </div>
                </div>

                <div className="exchange-rate">
                  <button className="percent-button">25%</button>
                  <button className="percent-button">50%</button>
                  <button className="percent-button">75%</button>
                  <button className="percent-button percent-button-last">100%</button>
                </div>

                <div className="input-button-wrapper buy-bif-div">
                  <input type="number" className="custom-input" 
                    placeholder="Amount of 3kIETH you want to swap" />

                  <button className="custom-button">Swap</button>
                </div>
            </div>

            <div className="card-container sol">
                <h1 className='title'>150ISOL</h1>
                <div className="card-content">
                  <div className="offer-section">
                    <img src={usdtLogo} alt="Icon" className="offer-image" />
                    <div className="for-section">
                      <span className="for-amount">Total Deposit USDT</span>
                      <span className="for-currency">- USDT</span>
                    </div>
                  </div>
                  <div className="for-section">
                    <img src={solLogo} alt="Icon" className="offer-image" />
                    <span className="for-amount">Offer Rate</span>
                    <span className="for-currency">172 USDT Per 150ISOL</span>
                  </div>
                </div>

                <div className='pool-owner'>
                  <h1 className='title'>Pool Owner</h1>
                  <div className='address-wrapper'>
                    <span className='for-currency'>{formatString(longString)}</span>
                    <button className='copy-button' onClick={copyToClipboard}>
                      <img src={Copy} alt="Icon" className="copyImg" />
                    </button>
                  </div>
                </div>

                <div className="exchange-rate">
                  <button className="percent-button">25%</button>
                  <button className="percent-button">50%</button>
                  <button className="percent-button">75%</button>
                  <button className="percent-button percent-button-last">100%</button>
                </div>

                <div className="input-button-wrapper buy-bif-div">
                  <input type="number" className="custom-input" 
                    placeholder="Amount of 150ISOL you want to swap" />

                  <button className="custom-button">Swap</button>
                </div>
            </div>

            <div className="card-container btc">
                <h1 className='title'>60kIBTC</h1>
                <div className="card-content">
                  <div className="offer-section">
                    <img src={usdtLogo} alt="Icon" className="offer-image" />
                    <div className="for-section">
                      <span className="for-amount">Total Deposit USDT</span>
                      <span className="for-currency">- USDT</span>
                    </div>
                  </div>
                  <div className="for-section">
                    <img src={btcLogo} alt="Icon" className="offer-image" />
                    <span className="for-amount">Offer Rate</span>
                    <span className="for-currency">62,000 USDT Per 60kIBTC</span>
                  </div>
                </div>

                <div className='pool-owner'>
                  <h1 className='title'>Pool Owner</h1>
                  <div className='address-wrapper'>
                    <span className='for-currency'>{formatString(longString)}</span>
                    <button className='copy-button' onClick={copyToClipboard}>
                      <img src={Copy} alt="Icon" className="copyImg" />
                    </button>
                  </div>
                </div>

                <div className="exchange-rate">
                  <button className="percent-button">25%</button>
                  <button className="percent-button">50%</button>
                  <button className="percent-button">75%</button>
                  <button className="percent-button percent-button-last">100%</button>
                </div>

                <div className="input-button-wrapper buy-bif-div">
                  <input type="number" className="custom-input" 
                    placeholder="Amount of 60kIBTC you want to swap" />

                  <button className="custom-button">Swap</button>
                </div>
            </div>

          </div>
        </>
      )}

      {activeTab === 'Swap Pool' && (
        <div className='card-parent'>
          
          {/* ETH Swap Pool Starts */}
          <div className="card-container">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={ethLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">3kIETH</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">1500 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$3,000 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited ETH</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">{b3kIETHBalance}</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your ETH Balance</p>
                  <p className="yield-value">{mockETHBalance}</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="3kIETH Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>

          <div className="card-container">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={ethLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">6kIETH</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">3000 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$6,000 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited ETH</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your ETH Balance</p>
                  <p className="yield-value">{mockETHBalance}</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="6kIETH Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>

          <div className="card-container">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={ethLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">10kIETH</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">5000 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$10,000 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited ETH</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your ETH Balance</p>
                  <p className="yield-value">{mockETHBalance}</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="10kIETH Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>
          {/* ETH Swap Pool Ends */}


          {/* BTC Swap Pool Starts */}
          <div className="card-container btc">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={btcLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">60kIBTC</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">30,000 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$60,000 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited BTC</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your BTC Balance</p>
                  <p className="yield-value">-</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="60kIBTC Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>

          <div className="card-container btc">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={btcLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">80kIBTC</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">40,000 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$80,000 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited BTC</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your BTC Balance</p>
                  <p className="yield-value">-</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="80kIBTC Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>

          <div className="card-container btc">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={btcLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">100kIBTC</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">50,000 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$100,000 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited BTC</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your BTC Balance</p>
                  <p className="yield-value">-</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="100kIBTC Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>
          {/* BTC Swap Pool Ends */}


          {/* SOL Swap Pool Starts */}
          <div className="card-container sol">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={solLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">100ISOL</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">50 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$100 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited BTC</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your SOL Balance</p>
                  <p className="yield-value">-</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="100ISOL Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>

          <div className="card-container sol">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={solLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">150ISOL</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">75 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$150 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited BTC</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your SOL Balance</p>
                  <p className="yield-value">-</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="150ISOL Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>

          <div className="card-container sol">
            <div className="card-header">
              <div className="token-info">
                <h2 className="token-name">BIF | Vanilla</h2>
              </div>
              <div className="token-icon">
                <img src={solLogo} alt="Ethereum Icon" />
              </div>
            </div>

            <div className="card-body">
              <div className="multiplier-section">
                <div className="multiplier">
                  <p className="multiplier-label">Type</p>
                  <p className="multiplier-value">200ISOL</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Denominated Token</p>
                   <p className="multiplier-value">ostGR</p>
                </div>
                <div className="multiplier">
                  <p className="multiplier-label">Cost</p>
                  <p className="multiplier-value">10%</p>
                </div>
              </div>

              <div className="yield-section">
                <div className="yield-info">
                  <p className="yield-label">Backing Asset</p>
                  <p className="yield-value">100 SST<span className="days-remaining"></span></p>
                </div>

                <div className="yield-info">
                  <p className="yield-label">USD Equivalent</p>
                  <p className="yield-value">$200 USD</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Deposited BTC</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">USD Value</p>
                  <p className="yield-value">-</p>
                </div>
                <div className="yield-info">
                  <p className="yield-label">Fess</p>
                  <p className="yield-value">0.01%</p>
                </div>
              </div>
                                
               <div className='yield-bear-div'>
                <p className="yield-label">BIF Balance</p>
                <p className="yield-value">-</p>
              </div>

              <div className="yield-info">
                  <p className="yield-label">Your SOL Balance</p>
                  <p className="yield-value">-</p>
                </div>
            </div>

            <div className="input-button-wrapper buy-bif-div">
              <input type="number" className="custom-input" placeholder="200ISOL Amount You Want To Swap" />
              <button className="custom-button">Swap</button>
            </div>
          </div>
          {/* SOL Swap Pool Ends */}
        </div>
      )}
    </div>
  )
}

export default BuySideVaults