import * as React from 'react';
import Image from 'react-bootstrap/Image'
import nftImage from '../assets/unnamed.png';
import InputGroup from 'react-bootstrap/InputGroup';
import EthImage from './EthereumImage';
import Button from 'react-bootstrap/Button';
import '../assets/App.css';

const SingleNFTPage = () => {
  return (
    <div className="single-nft-page">
      <h1 className="title nft-title">Socket #182</h1>
      <main className="d-flex justify-content-center align-items-center fr-header"> 
        <section>
        <Image src={nftImage} className="nft-image-single" />
        </section>
        <aside>
          <section className="s-nft-info">
            <h4>COLLECTABLE SUPPLY</h4>
            <h5>9.58 %</h5>
          </section>
          <section className="s-nft-info">
            <h4>FRACTIONS</h4>
            <h5>100,013,673,040.335 NFD</h5>
          </section>
          <section className="s-nft-info">
            <h4>IMPLIED VALUATION</h4>
            <h5>Ξ 4,348.984</h5>
          </section>
          <section className="s-nft-info">
            <h4>CURATOR FEE</h4>
            <h5>0 %</h5>
          </section>
          </aside>
      </main>  
      <section className="auction">
            <h1 className="title">Auction / bidding</h1>
            <summary className="d-flex">
              <div className="bidding col-md-3">
                <h5>PRICE SET BY FRACTION OWNERS</h5>
                <h4>16.06 %</h4>
                <p>An auction for this vault is only possible if reserve prices have been set by owners who collectively hold more than 50% of the total fraction supply.</p>
              </div>
              <div className="bidding col-md-3">
                <h5>RESERVE PRICE</h5>
                <h4>Ξ 278,930.7170</h4>
                <p>Once a bid has been placed and the reserve price is met, a 7 day auction will begin.</p>
              </div>
              <div className="bidding bid col-md-4">
                <h5>YOUR BID AMOUNT</h5>
                <h5>Balance: 0 ETH</h5>
                <InputGroup className="price">
              <InputGroup.Text>
              <EthImage />ETH</InputGroup.Text>
              </InputGroup>
              <Button variant="primary" className="primary-btn">Place Bid</Button>{' '}
              </div>
            </summary>
        </section>
    </div>
  );
}
export default SingleNFTPage;
