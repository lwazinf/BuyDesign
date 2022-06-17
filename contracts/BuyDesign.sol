// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.8;

import "hardhat/console.sol";

contract BuyDesign {
    string orderDetails;
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    // initOrder takes in an object for of design guidelines
    function initOrder(string memory details) public payable {
        orderDetails = details;
        // Had trouble with setting ethereum payable amount..
        // require(msg.value >= 25959628, "Please send the required ETH amount");
        console.log('Order made, thank you for your interest in our service!');
    }

    // viewOrder allows user to view guidelines
    function viewOrder() public view returns (string memory) {
        console.log(orderDetails);
        return orderDetails;
    }
}