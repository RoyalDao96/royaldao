// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenSwap {
    address public owner;

    event TokensSwapped(address indexed user, address indexed tokenFrom, address indexed tokenTo, uint256 amount);
    event TokensWithdrawn(address indexed owner, address indexed tokenAddress, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function swapToken1ToToken2(address _token1, address _token2, uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than 0");

        // Transfer _token1 from user to the contract
        IERC20(_token1).transferFrom(msg.sender, address(this), _amount);

        // Transfer _token2 from the contract to the user
        IERC20(_token2).transfer(msg.sender, _amount);

        emit TokensSwapped(msg.sender, _token1, _token2, _amount);
    }

    function withdrawAllTokens(address _token) external onlyOwner {
        uint256 balance = IERC20(_token).balanceOf(address(this));
        require(balance > 0, "No token balance to withdraw");

        IERC20(_token).transfer(owner, balance);

        emit TokensWithdrawn(owner, _token, balance);
    }
}
