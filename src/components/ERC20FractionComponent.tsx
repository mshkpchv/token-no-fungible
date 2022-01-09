import * as React from 'react';
import '../assets/App.css';

import { useConnectedContext } from '../context';
import { FRACTION_FACTORY_ADDRESS, FRACTION_FACTORY_ABI, UNIT_CONVERSATION,

} from "../constants";

import { getContract } from '../helpers/ethers';


// localStorage

const PREFIX = "FractionERC20Tokens"
const ALL_FRACTIONS = `${PREFIX}_all`

const FractionERC20Tokens = () => {

  const {connected ,address, library} =  useConnectedContext();
  const [fractionContract, setFractionContract] = React.useState<any>();
  const [count, setCount] = React.useState<number>(0);
  
  React.useEffect(() => {
     if(connected && address && library){
        setFractionContract(getContract(
            FRACTION_FACTORY_ADDRESS,
            FRACTION_FACTORY_ABI.abi,
            library,
            address
          ))        
     }  
     loadData()

  }, [connected,address,library]);

  const loadData = () => {
    const cache = localStorage.getItem(ALL_FRACTIONS);
    if (!cache) {
        loadFromContract()
    }else {

        console.log('qko mi e',cache)
    }
  }
  
  const loadFromContract = async () => {
        const _count = await fractionContract.tokenCount()
        setCount(_count);
  }
  return (
  <>
    <div>dobre li e</div>
  </>
  );
}
export default FractionERC20Tokens ;

