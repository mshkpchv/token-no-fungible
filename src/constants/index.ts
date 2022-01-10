import { BigNumber } from "@ethersproject/bignumber";

export *  from "./abis";
// export *  from "./contract";

// mint operation
export const OPENSEA_URL = "https://testnets-api.opensea.io" 
export const ASSSET_CONTRACT_ADDRESS="0x425e0c0cE4a1a127454BDb7776C6db961E20eEe1"

export const IERC721_NFT_ADDRESS_RINKEBY = "0x425e0c0cE4a1a127454BDb7776C6db961E20eEe1";
export const IERC721_NFT_IPFS = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json";

// fraction operation
export const FRACTION_FACTORY_ADDRESS = "0x202d263303fA8D37ef770a686e9c806e486AC0Ae"; 

export const WEI_TO_ETHER = BigNumber.from("10").pow(18);
export const UNIT_CONVERSATION = BigNumber.from("10").pow(18);

