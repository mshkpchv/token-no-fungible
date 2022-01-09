import * as React from 'react';
import '../assets/App.css';
import NFTCard from './NFTCard';

import { fetchOpenseaAssets } from '../helpers/apis'
import { IOpenseaAsset } from '../helpers/types';
import { useConnectedContext } from '../context';

interface INFTCollection {
  onSelectNFT? : (obj:any) => void
}

// const web3Modal: Web3Modal;
const NFTCollection = (props : INFTCollection ) => {

  const {connected ,address, library} =  useConnectedContext();
  const [data, setData] = React.useState([] as IOpenseaAsset[]);
  const [hasData,setHasData] = React.useState<boolean>(false);

  React.useEffect(() => {
    loadData();
  }, [connected]);

  const loadData = async (
  ) => {
    if(connected && address){
      const rawData = await fetchOpenseaAssets(address);
      if(rawData) {
        console.log(rawData);
        setData(rawData);
        setHasData(true);
      }
    }
  };
  const renderCards = () => {
    return data.map( el => ( <NFTCard {...{onSelect: props.onSelectNFT,elements: el }} />) )
  }

  return (
  <>
    <div className="cards-row d-flex justify-content-center">        
      { connected && hasData ? (
        renderCards()
      ) :
        <p>You do not have any nft to franction. Please MINT some first</p>
      }  
     </div>
  </>
  );
}
export default NFTCollection;

