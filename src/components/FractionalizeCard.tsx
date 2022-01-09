import * as React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EthImage from './EthereumImage';

import { IOpenseaAsset } from '../helpers/types';
import { getContract } from '../helpers/ethers';

import { BigNumber } from "@ethersproject/bignumber";

import { useConnectedContext } from '../context';

import { FRACTION_FACTORY_ADDRESS, FRACTION_FACTORY_ABI, UNIT_CONVERSATION,
        IERC721_NFT_ABI,
        IERC721_NFT_ADDRESS_RINKEBY
    
    } from "../constants";


const FractionalizeCard = (element:IOpenseaAsset) => {

  const {connected ,address, library} =  useConnectedContext();

  const [name, setName] = React.useState<string>('');
  const [symbol, setSymbol] = React.useState<string>('');
  const [supply, setSupply] = React.useState<number>(0);
  const [transaction,setTransaction] = React.useState<any>();
  const [problem,setProblem] = React.useState<boolean>();

  const [success,setSuccess] = React.useState<boolean>(false);
  
  React.useEffect(() => {    
    console.log('reload')
  }, [success]);

  const onFraction = async () => {
    if(connected && address && library ) {
      console.log(connected,address,library);
      const { token_id, asset_contract } = element;
      
      const erc721Contract = getContract(
          IERC721_NFT_ADDRESS_RINKEBY,
          IERC721_NFT_ABI.abi,
          library,
          address
      )
      // approve contract to be able to see your nft
      const tx = await erc721Contract.approve(FRACTION_FACTORY_ADDRESS,token_id)
      await tx.wait();

      const fractionContract = getContract(
        FRACTION_FACTORY_ADDRESS,
        FRACTION_FACTORY_ABI.abi,
        library,
        address
      )
      // string memory _tokenName,string memory _tokenSymbol, address _tokenContractAddress, uint256 _tokenId, uint256 _tokenSuply
      let totalSupplyWEI = BigNumber.from(supply)
      totalSupplyWEI = totalSupplyWEI.mul(UNIT_CONVERSATION);

      const creationTransaction = await fractionContract.create(
          name,
          symbol,
          asset_contract.address,
          token_id,
          totalSupplyWEI
      )

      const transactionReceipt = await creationTransaction.wait();
      // check if gg
      if (transactionReceipt.status !== 1) {
          setProblem(true);
      }

      setSuccess(true);
    }
  }
    return (
    <>
      <Card className="fractionalize-card">
        <Card.Body>
            <h6 className="vault-header">Fraction Information</h6>
            <InputGroup>
            <p className="input-name">Name</p>
            <Form.Control as="input" aria-label="Name text" value={name} onChange = { (event) => { setName(event.target.value) } }  />
            </InputGroup>
            <InputGroup>
            <p className="input-name">Supply</p>
            <Form.Control as='input' aria-label="Supply" value = {supply} onChange = { (event) => { setSupply(Number(event.target.value)) } } />
            </InputGroup>
            <InputGroup>
            <p className="input-name">Symbol</p>
            <Form.Control as="input" aria-label="Symbol text" value={symbol} onChange = { (event) => { setSymbol(event.target.value) } } />
            </InputGroup>
            <p className="input-name">Reserve price</p>
            <InputGroup className="price">
            <InputGroup.Text>
            <EthImage />ETH</InputGroup.Text>
            <Form.Control as="input" aria-label="Price text" />
            </InputGroup>
            <div className="frame">
	            <div className="range">
		        <input type="range" min="0" max="40" />
	            </div>
            </div>
            <Button onClick={onFraction} variant="primary">Fraction</Button>{' '}
        </Card.Body>
      </Card>
    </>
    );
}
export default FractionalizeCard;
  