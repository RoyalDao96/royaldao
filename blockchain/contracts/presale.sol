/**
 *Submitted for verification at Etherscan.io on 2024-04-21
*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

interface IToken {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint256);
    function balanceOf(address owner) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 value) external;
    function transfer(address to, uint256 value) external;
    function transferFrom(address from, address to, uint256 value) external;
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
}

contract Presale {
    IToken public ptgGreenrock = IToken(0xA518913e3f62c5E134B6BC995cF0e883596c01A9);
    IToken public USDT = IToken(0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2);

    address payable public owner;
    uint256 public tokenPerUsd = 16666666666666666667; // 16.666666666666666667 token for 1 USDT
    uint256 public soldToken;
    uint256 public totalSupply = 4887883 ether;
    uint256 public amountRaisedUSDT;
    uint256 public minimumDollar = 1000000;
    uint256 public constant divider = 100;

    bool public presaleStatus;

    struct user {
        uint256 usdt_balance;
        uint256 token_balance;
    }
    mapping(address => user) public users;

    modifier onlyOwner() {
        require(msg.sender == owner, "PRESALE: Not an owner!");
        _;
    }

    modifier presaleActive() {
        require(presaleStatus, "Presale : Presale is finished");
        _;
    }

    event BuyToken(address indexed _user, uint256 indexed _amount);
    event PriceChanged(uint256 newPrice);
    event OwnershipTransferred(address newOwner);
    event TokenChanged(address newToken);
    event MinimumLimitChanged(uint256 newLimit);
    event TotalSupplyChanged(uint256 newTotalSupply);
    event USDTTokenChanged(address newToken);

    constructor() {
        owner = payable(0x319A392465c0BFDDB4f8654768cB5095BeC7D88F);
        presaleStatus = false;
    }

    // to buy token during preSale time with USDT => for web3 use
    function buyTokenUSDT(uint256 amount) public presaleActive {
        require(amount >= minimumDollar, "Minimum Amount Does Not Meet Requirement");
        require(soldToken < totalSupply, "All Sold");

        uint256 numberOfTokens = usdtToToken(amount);
        soldToken += numberOfTokens;
        amountRaisedUSDT += amount;

        USDT.transferFrom(msg.sender, address(this), amount);
        ptgGreenrock.transfer(msg.sender, numberOfTokens);

        users[msg.sender].usdt_balance += amount;
        users[msg.sender].token_balance += numberOfTokens;
        emit BuyToken(msg.sender, numberOfTokens);
    }

    // to check percentage of token sold
    function getProgress() public view returns (uint256 _percent) {
        uint256 remaining = totalSupply -
            (soldToken / (10**(ptgGreenrock.decimals())));
        remaining = (remaining * (divider)) / (totalSupply);
        uint256 hundred = 100;
        return hundred - (remaining);
    }

    function stopPresale(bool state) external onlyOwner {
        presaleStatus = state;
    }

    // to check number of token for given usdt
    function usdtToToken(uint256 _amount) public view returns (uint256) {
        return (_amount * tokenPerUsd) / 1e6;
    }

    // to change Price of the token
    function changePrice(uint256 _price) external onlyOwner {
        tokenPerUsd = _price;
        emit PriceChanged(_price);
    }

    // transfer ownership
    function changeOwner(address payable _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Invalid address");
        owner = _newOwner;
        emit OwnershipTransferred(_newOwner);
    }

    // change tokens
    function changeToken(address _token) external onlyOwner {
        ptgGreenrock = IToken(_token);
        emit TokenChanged(_token);
    }

    // change minimum buy
    function changeMinimumLimits(uint256 _inDollar) external onlyOwner {
        minimumDollar = _inDollar;
        emit MinimumLimitChanged(_inDollar);
    }

    // change supply
    function changeTotalSupply(uint256 _total) external onlyOwner {
        totalSupply = _total;
        emit TotalSupplyChanged(_total);
    }

    //change USDT
    function changeUSDT(address _USDT) external onlyOwner {
        USDT = IToken(_USDT);
        emit USDTTokenChanged(_USDT);
    }

    // to draw out tokens
    function transferTokens(IToken token, uint256 _value) external onlyOwner {
        token.transfer(msg.sender, _value);
    }

    //to get contract USDT balance
    function contractBalanceUSDT() external view returns (uint256) {
        return USDT.balanceOf(address(this));
    }

    // to get contract token balance
    function getContractTokenApproval() external view returns (uint256) {
        return ptgGreenrock.allowance(owner, address(this));
    }
}