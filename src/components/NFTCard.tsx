import * as React from 'react';
import Card from 'react-bootstrap/Card';
import EthImage from './EthereumImage';
import Button from 'react-bootstrap/Button';

import { IOpenseaAsset } from '../helpers/types';

interface INFTCardProps {
  elements : IOpenseaAsset,
  onSelect? : (obj:any) => void
}

const NFTCard = (p : INFTCardProps) => {

  const onClickNFTCard = () =>
  { 
      if (p.onSelect){
          return p.onSelect(p.elements)
      }      
      return {}
  }

  const {image_preview_url, name, description, token_id } = p.elements;
  return (
  <>
    <Card className="card-box">
      <Card.Img variant="top" src={image_preview_url} className="nft-image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text >
          <span className="price-number">{token_id} </span></Card.Text>
      </Card.Body>
    <Card.Body>
      <Button className='bid-button' onClick={onClickNFTCard}>See</Button>
      <Card.Link href="/singleNFT" className="bid-button">
      <EthImage />Fraction</Card.Link>
    </Card.Body>
  </Card>
  </>
  );
}
export default NFTCard;
