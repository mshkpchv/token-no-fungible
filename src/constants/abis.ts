export const IERC721_NFT_ABI = {
    "contractName": "LimeNFT",
    "abi": [
{
"inputs": [],
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"anonymous": false,
"inputs": [
{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
},
{
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
},
{
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "Approval",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
},
{
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
},
{
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
}
],
"name": "ApprovalForAll",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
},
{
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
}
],
"name": "OwnershipTransferred",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
},
{
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
},
{
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "Transfer",
"type": "event"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "to",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "approve",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "owner",
    "type": "address"
}
],
"name": "balanceOf",
"outputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "getApproved",
"outputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "owner",
    "type": "address"
},
{
    "internalType": "address",
    "name": "operator",
    "type": "address"
}
],
"name": "isApprovedForAll",
"outputs": [
{
    "internalType": "bool",
    "name": "",
    "type": "bool"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "recipient",
    "type": "address"
},
{
    "internalType": "string",
    "name": "tokenURI",
    "type": "string"
}
],
"name": "mintNFT",
"outputs": [
{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "name",
"outputs": [
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "owner",
"outputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "ownerOf",
"outputs": [
{
    "internalType": "address",
    "name": "",
    "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "renounceOwnership",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "from",
    "type": "address"
},
{
    "internalType": "address",
    "name": "to",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "safeTransferFrom",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "from",
    "type": "address"
},
{
    "internalType": "address",
    "name": "to",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
},
{
    "internalType": "bytes",
    "name": "_data",
    "type": "bytes"
}
],
"name": "safeTransferFrom",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "operator",
    "type": "address"
},
{
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
}
],
"name": "setApprovalForAll",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
}
],
"name": "supportsInterface",
"outputs": [
{
    "internalType": "bool",
    "name": "",
    "type": "bool"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "symbol",
"outputs": [
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "tokenURI",
"outputs": [
{
    "internalType": "string",
    "name": "",
    "type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "from",
    "type": "address"
},
{
    "internalType": "address",
    "name": "to",
    "type": "address"
},
{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
}
],
"name": "transferFrom",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
}
],
"name": "transferOwnership",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
}
]
};
export const FRACTION_FACTORY_ABI = 
{
    "contractName": "ERC20FractionTokenFactory",
    "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "fractionContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenIndex",
          "type": "uint256"
        }
      ],
      "name": "FractionEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tokenSymbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenSuply",
          "type": "uint256"
        }
      ],
      "name": "create",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "internalType": "contract ERC20FractionToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userToTokens",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}

