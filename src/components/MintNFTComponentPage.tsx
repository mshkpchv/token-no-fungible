import * as React from 'react';
import ConnectButton from './ConnectButton';

import { IERC721_NFT_ADDRESS_RINKEBY, IERC721_NFT_ABI, IERC721_NFT_IPFS  } from '../constants';

import { getContract } from '../helpers/ethers';

import { useConnectedContext } from '../context';

import { connect } from 'http2';
import { Contract } from '@ethersproject/contracts';
import styled from 'styled-components';

import Column from './Column';
import Wrapper from './Wrapper';
import Loader from './Loader';

const SLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

const SContent = styled(Wrapper)`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

const SContainer = styled.div`
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`;

const SLanding = styled(Column)`
  height: 600px;
`;
// 
const MintNFTComponentPage = () => {

    const {connected ,address, library} =  useConnectedContext();
    const [nftContract, setNftContract] = React.useState<any>(null);
    const [fetching,setFetching] = React.useState<boolean>(false);

    const mintNFT = async() => {
        setFetching(true);
        // const contract = getContract(IERC721_NFT_ADDRESS_RINKEBY,IERC721_NFT_ABI.abi,
        //     library, address);
        // setNftContract(contract);
        // await nftContract.mintNFT(address);
        setFetching(false);
    }

    const onCreation = async () => {
        // const contract = getContract(IERC721_NFT_ADDRESS_RINKEBY,IERC721_NFT_ABI.abi,
        //     library, address);
        // setNftContract(contract);
    }

    React.useEffect(()=>{
        onCreation();        
        // setConnected(connected);
        // setAddress(address);


    },[])

    return (
        <SLayout>
            <SContent>
            {fetching ? (
                <Column center>
                <div>misho in the house</div>
                <SContainer>
                    <Loader />
                </SContainer>
                </Column>
            ) : (
                <SLanding center>
                    { connected && <ConnectButton onClick={mintNFT} /> }
                </SLanding>
                )}
            </SContent>
        </SLayout> 
    );
  }
  export default MintNFTComponentPage;