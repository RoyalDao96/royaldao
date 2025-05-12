// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract GrimstoneAuction {
    IERC20 public grimstoneToken;
    IERC20 public auctionGrimstoneToken;
    address public owner;
    uint256 public minLockAmount;
    address public constant BURN_ADDRESS = 0x000000000000000000000000000000000000dEaD;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _grimstoneToken, address _auctionGrimstoneToken, uint256 _minLockAmount) {
        grimstoneToken = IERC20(_grimstoneToken);
        auctionGrimstoneToken = IERC20(_auctionGrimstoneToken);
        owner = msg.sender;
        minLockAmount = _minLockAmount;
    }

    function setMinLockAmount(uint256 _minLockAmount) external onlyOwner {
        minLockAmount = _minLockAmount;
    }

    function lockGrimstone(uint256 _amount) external {
        require(_amount >= minLockAmount, "Amount is less than minimum lock amount");

        // Transfer Grimstone tokens from the user to this contract
        require(grimstoneToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");

        // Mint the same amount of auctionGrimstone tokens to the user
        require(auctionGrimstoneToken.transfer(msg.sender, _amount), "Minting failed");
    }

    function withdraw(uint256 _amount) external {
        require(auctionGrimstoneToken.balanceOf(msg.sender) >= _amount, "Insufficient auctionGrimstone balance");

        // Transfer auctionGrimstone tokens from the user to the burn address
        require(auctionGrimstoneToken.transferFrom(msg.sender, BURN_ADDRESS, _amount), "Transfer to burn address failed");

        // Transfer Grimstone tokens back to the user
        require(grimstoneToken.transfer(msg.sender, _amount), "Withdrawal failed");
    }
}
