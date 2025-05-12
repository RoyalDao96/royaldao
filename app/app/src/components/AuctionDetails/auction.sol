// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoyalAuction is Ownable {
    IERC20 public usdtToken;
    IERC20 public usdcToken;
    uint public auctionEndTime;
    address public highestBidder;
    uint public highestBid;
    uint public baseValue;
    bool public ended;
    uint public minimumBid;
    address[] public bidders;

    uint public biddingTime = 1814400; // Default to 3 weeks (1814400 seconds)
    
    mapping(address => uint) public pendingReturnsUSDT;
    mapping(address => uint) public pendingReturnsUSDC;

    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount);
    event AuctionReset();
    event BiddingTimeChanged(uint newBiddingTime);
    event MinimumBidChanged(uint newMinimumBid);
    event BaseValueChanged(uint newBaseValue);

    constructor(
        address _usdtAddress, 
        address _usdcAddress, 
        uint _minimumBid,
        uint _baseValue,
        address _initialOwner
    ) Ownable(_initialOwner) {
        usdtToken = IERC20(_usdtAddress);
        usdcToken = IERC20(_usdcAddress);
        minimumBid = _minimumBid;
        baseValue = _baseValue;
        highestBid = _baseValue; // Initialize highestBid with the base value
    }

    modifier auctionNotEnded() {
        require(block.timestamp < auctionEndTime, "Auction already ended.");
        _;
    }

    function bidUSDT(uint amount) external auctionNotEnded {
        require(amount > 0, "Bid amount must be greater than 0.");
        
        uint totalBidAmount = pendingReturnsUSDT[msg.sender] + amount;
        
        require(totalBidAmount >= minimumBid, "Total bid is below the minimum bid value.");
        require(totalBidAmount > highestBid, "There already is a higher total bid.");

        if (pendingReturnsUSDT[msg.sender] == 0) {
            bidders.push(msg.sender);
        }

        if (highestBid != 0 && highestBidder != address(0)) {
            pendingReturnsUSDT[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = totalBidAmount;

        pendingReturnsUSDT[msg.sender] = totalBidAmount;
        require(usdtToken.transferFrom(msg.sender, address(this), amount), "Token transfer failed.");

        emit HighestBidIncreased(msg.sender, totalBidAmount);
    }

    function bidUSDC(uint amount) external auctionNotEnded {
        require(amount > 0, "Bid amount must be greater than 0.");
        
        uint totalBidAmount = pendingReturnsUSDC[msg.sender] + amount;
        
        require(totalBidAmount >= minimumBid, "Total bid is below the minimum bid value.");
        require(totalBidAmount > highestBid, "There already is a higher total bid.");

        if (pendingReturnsUSDC[msg.sender] == 0) {
            bidders.push(msg.sender);
        }

        if (highestBid != 0 && highestBidder != address(0)) {
            pendingReturnsUSDC[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = totalBidAmount;

        pendingReturnsUSDC[msg.sender] = totalBidAmount;
        require(usdcToken.transferFrom(msg.sender, address(this), amount), "Token transfer failed.");

        emit HighestBidIncreased(msg.sender, totalBidAmount);
    }

    function withdrawUSDT() external returns (bool) {
        require(ended, "Auction has not ended yet.");
        require(msg.sender != highestBidder, "Highest bidder cannot withdraw.");

        uint amount = pendingReturnsUSDT[msg.sender];
        require(amount > 0, "No funds to withdraw.");

        pendingReturnsUSDT[msg.sender] = 0;
        require(usdtToken.transfer(msg.sender, amount), "Token transfer failed.");

        return true;
    }

    function withdrawUSDC() external returns (bool) {
        require(ended, "Auction has not ended yet.");
        require(msg.sender != highestBidder, "Highest bidder cannot withdraw.");

        uint amount = pendingReturnsUSDC[msg.sender];
        require(amount > 0, "No funds to withdraw.");

        pendingReturnsUSDC[msg.sender] = 0;
        require(usdcToken.transfer(msg.sender, amount), "Token transfer failed.");

        return true;
    }

    function endAuction() external onlyOwner {
        require(block.timestamp >= auctionEndTime, "Auction has not ended yet.");
        require(!ended, "Auction end has already been called.");

        ended = true;
        emit AuctionEnded(highestBidder, highestBid);
    }

    function withdrawAllUSDT() external onlyOwner {
        uint contractBalance = usdtToken.balanceOf(address(this));
        require(contractBalance > 0, "No funds to withdraw.");
        require(usdtToken.transfer(owner(), contractBalance), "Token transfer failed.");
    }

    function withdrawAllUSDC() external onlyOwner {
        uint contractBalance = usdcToken.balanceOf(address(this));
        require(contractBalance > 0, "No funds to withdraw.");
        require(usdcToken.transfer(owner(), contractBalance), "Token transfer failed.");
    }

    function changeMinimumBid(uint newMinimumBid) external onlyOwner {
        require(newMinimumBid > 0, "Minimum bid must be greater than 0.");
        minimumBid = newMinimumBid;
        emit MinimumBidChanged(newMinimumBid);
    }

    function changeBaseValue(uint newBaseValue) external onlyOwner {
        require(newBaseValue > 0, "Base value must be greater than 0.");
        baseValue = newBaseValue;
        emit BaseValueChanged(newBaseValue);
    }

    function viewHighestBid() external view returns (uint) {
        return highestBid;
    }

    function viewHighestBidder() external view returns (address) {
        return highestBidder;
    }

    function viewUserBidUSDT(address user) external view returns (uint) {
        return pendingReturnsUSDT[user];
    }

    function viewUserBidUSDC(address user) external view returns (uint) {
        return pendingReturnsUSDC[user];
    }
}
