// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenSwap {
    address public token1;
    address public token2;
    address public owner;

    event TokensSwapped(address indexed user, address indexed tokenFrom, address indexed tokenTo, uint256 amount);
    event TokenAddressUpdated(address indexed oldAddress, address indexed newAddress, string tokenType);
    event TokensWithdrawn(address indexed owner, address indexed tokenAddress, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _token1, address _token2) {
        token1 = _token1;
        token2 = _token2;
        owner = msg.sender;
    }

    function swapToken1ToToken2(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than 0");

        uint256 token1Amount = _amount * 2;

        // Transfer token1 from user to the contract
        IERC20(token1).transferFrom(msg.sender, address(this), token1Amount);

        // Transfer token2 from the contract to the user
        IERC20(token2).transfer(msg.sender, _amount);

        emit TokensSwapped(msg.sender, token1, token2, _amount);
    }

    function updateToken1Address(address _newToken1) external onlyOwner {
        require(_newToken1 != address(0), "Invalid address");
        address oldAddress = token1;
        token1 = _newToken1;
        emit TokenAddressUpdated(oldAddress, _newToken1, "Token1");
    }

    function updateToken2Address(address _newToken2) external onlyOwner {
        require(_newToken2 != address(0), "Invalid address");
        address oldAddress = token2;
        token2 = _newToken2;
        emit TokenAddressUpdated(oldAddress, _newToken2, "Token2");
    }

    function withdrawAllToken1() external onlyOwner {
        uint256 balance = IERC20(token1).balanceOf(address(this));
        require(balance > 0, "No token1 balance to withdraw");

        IERC20(token1).transfer(owner, balance);

        emit TokensWithdrawn(owner, token1, balance);
    }

    function withdrawAllToken2() external onlyOwner {
        uint256 balance = IERC20(token2).balanceOf(address(this));
        require(balance > 0, "No token2 balance to withdraw");

        IERC20(token2).transfer(owner, balance);

        emit TokensWithdrawn(owner, token2, balance);
    }
}
