// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {

    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amout, string message, uint256 timestamp, string keyword);

    // transaction needs to have
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp; // when to send transfer
        string keyword;
    }

    // TransferStruct Array
    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        // add transactions
        transactionCount += 1;
        // push a specific transactions into Transactions Array
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
         return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

}

// Metamask injects the Ethereum Web3 API into every website's js context
// so that DApps can read from the blockchain
