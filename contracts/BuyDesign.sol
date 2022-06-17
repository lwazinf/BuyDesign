// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.8;

import "hardhat/console.sol";

contract BuyDesign {
    string orderDetails;
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    function initOrder(string memory details) public payable {
        orderDetails = details;
        // require(msg.value >= 1e10, "Please send the required ETH amount");
        console.log('Order made, thank you for your interest in our service!');
    }

    function viewOrder() public view returns (string memory) {
        console.log(orderDetails);
        return orderDetails;
    }
}