// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenSwap {
    address public owner;
    
    address public greenRock;
    address public Premium_Collateralized_Stablecoin;
    address public Floor_Collateralized_Stablecoin;
    address public Under_Premium_Collateralized_Stablecoin;

    event TokensSwapped(address indexed user, address indexed tokenFrom, address indexed tokenTo, uint256 amount);
    event TokensWithdrawn(address indexed owner, address indexed tokenAddress, uint256 amount);
    event TokenAddressUpdated(string tokenType, address newAddress);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _greenRock, address _premiumCollateralized, address _floorCollateralized, address _underPremiumCollateralized) {
        owner = msg.sender;
        greenRock = _greenRock;
        Premium_Collateralized_Stablecoin = _premiumCollateralized;
        Floor_Collateralized_Stablecoin = _floorCollateralized;
        Under_Premium_Collateralized_Stablecoin = _underPremiumCollateralized;
    }

    function swapToken1ToToken2(address _token1, address _token2, uint256 _amount, uint256 _sstPrice, uint256 _sstBasePrice) external {
        require(_amount > 0, "Amount must be greater than 0");

        // Calculate the swap amount based on the token address and multiplier
        uint256 swapAmount;

        if (_token2 == Premium_Collateralized_Stablecoin && _token1 == greenRock) {
            swapAmount = _amount * _sstPrice;

        } else if (_token2 == Floor_Collateralized_Stablecoin && _token1 == greenRock) {
            swapAmount = _amount * _sstBasePrice;

        } else if (_token2 == Under_Premium_Collateralized_Stablecoin && _token1 == greenRock) {
            swapAmount = (_amount * 8) / 10;

        } else if (_token2 == greenRock && _token1 == Premium_Collateralized_Stablecoin) {
            swapAmount = _amount / _sstPrice;

        } else if (_token2 == greenRock && _token1 == Floor_Collateralized_Stablecoin) {
            swapAmount = _amount / _sstBasePrice;

        } else if (_token2 == greenRock && _token1 == Under_Premium_Collateralized_Stablecoin) {
            swapAmount = (_amount * 125) / 100;
        }
        
        else {
            revert("Unsupported token address");
        }

        // Transfer _token1 from user to the contract
        IERC20(_token1).transferFrom(msg.sender, address(this), _amount);

        // Transfer _token2 from the contract to the user
        IERC20(_token2).transfer(msg.sender, swapAmount);

        emit TokensSwapped(msg.sender, _token1, _token2, swapAmount);
    }

    function withdrawAllTokens(address _token) external onlyOwner {
        uint256 balance = IERC20(_token).balanceOf(address(this));
        require(balance > 0, "No token balance to withdraw");

        IERC20(_token).transfer(owner, balance);

        emit TokensWithdrawn(owner, _token, balance);
    }

     // Function to update the address of Premium_Collateralized_Stablecoin
    function updateGreenrock(address _newAddress) external onlyOwner {
        greenRock = _newAddress;
        emit TokenAddressUpdated("Greenrock", _newAddress);
    }

    // Function to update the address of Premium_Collateralized_Stablecoin
    function updatePremiumCollateralizedStablecoin(address _newAddress) external onlyOwner {
        Premium_Collateralized_Stablecoin = _newAddress;
        emit TokenAddressUpdated("Premium_Collateralized_Stablecoin", _newAddress);
    }

    // Function to update the address of Floor_Collateralized_Stablecoin
    function updateFloorCollateralizedStablecoin(address _newAddress) external onlyOwner {
        Floor_Collateralized_Stablecoin = _newAddress;
        emit TokenAddressUpdated("Floor_Collateralized_Stablecoin", _newAddress);
    }

    // Function to update the address of Under_Premium_Collateralized_Stablecoin
    function updateUnderPremiumCollateralizedStablecoin(address _newAddress) external onlyOwner {
        Under_Premium_Collateralized_Stablecoin = _newAddress;
        emit TokenAddressUpdated("Under_Premium_Collateralized_Stablecoin", _newAddress);
    }
}
