import * as React from 'react';

import { IERC721_NFT_ADDRESS_RINKEBY, IERC721_NFT_ABI, IERC721_NFT_IPFS  } from '../constants';
import { getContract } from '../helpers/ethers';

import { useConnectedContext } from '../context';

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

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
    const [fetching,setFetching] = React.useState<boolean>(false);

    const mintNFT = async() => {
        if(connected && address && library){
            setFetching(true);
            const contract = getContract(IERC721_NFT_ADDRESS_RINKEBY,IERC721_NFT_ABI.abi,
                library, address);
            await contract.mintNFT(address,IERC721_NFT_IPFS);

            setFetching(false);
        }
    }

    const onCreation = async () => {
        // const contract = getContract(IERC721_NFT_ADDRESS_RINKEBY,IERC721_NFT_ABI.abi,
    }

    React.useEffect(()=>{
        onCreation();        
    },[])

    return (
        <SLayout>
            <SContent>
            {fetching ? (
                <Column center>
                <div>loading</div>
                <SContainer>
                    <Loader />
                </SContainer>
                </Column>
            ) : (
                <SLanding center>
                    <div>Mint NFT and then see it in fraction page</div>
                    { connected && <Button className='bid-button' onClick={mintNFT} >Mint NFT</Button> }
                </SLanding>
                )}
            </SContent>
        </SLayout> 
    );
  }
  export default MintNFTComponentPage;