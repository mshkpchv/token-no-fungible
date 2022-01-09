import * as React from 'react';
import MonaImage from './MonaImage';
import Tabs from './Tabs';
import Button from 'react-bootstrap/Button';
import BuyersImage from './BuyersImage';
import ExploreComponentPage from './ExploreComponentPage';

const HomeComponentPage = () => {
  return (
  <>
    <div className="first-container">
      <div className="fc-inner-section">
            <MonaImage />
                <section>
                    <h1><b>Discover</b>, <b>find</b> and <b>sell</b> extraordinary NFTs.</h1>
                    <h2>Fractional ownership of the world’s most sought after NFTs. Fractional reduces entry costs, increases access, and enables new communities.</h2>
                    <div className="buttons-container">
                      <Button className="primary-btn">Explore vaults</Button>
                      <Button className="secondary-btn">Fractionalize NFT</Button>
                    </div>
                </section>
            </div>
        <div className="custom-shape-divider-bottom-1640631082">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"/>
            </svg>
        </div>
    </div>
    <section className="second-container">
      <h1 className="title">How it works?</h1>
      <div className="paragraph-text">Fractional enables NFT owners to create new communities surrounding their NFTs, discover NFT market value, and create new ways of engaging their existing communities.</div>
      <BuyersImage />
      <Tabs />
    </section> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#521945" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,128C384,107,480,117,576,133.3C672,149,768,171,864,186.7C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>
    <section className="third-container">
      <h1 className="title">Live auctions</h1>
      <ExploreComponentPage />
    </section>
    <section className="fourth-container">
      <h1 className="title">
        <h5>Project by </h5> Mihail Kopchev</h1>
    </section>
  </>
  );
}
export default HomeComponentPage;

