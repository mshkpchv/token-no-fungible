import * as React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../assets/App.css';

const MyTabs = () => {
    return (
    <>
      <Tabs defaultActiveKey="buyers" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="buyers" title="Buyers" className="tabche-item">
          <h3><b>1</b> BUY</h3>
          <p>Purchase fractions to collect and own part of your favorite NFTs</p>
          <h3><b>2</b> VOTE</h3>
          <p>Contribute to the reserve price of the NFT collections you buy</p>
          <h3><b>3</b>  DECIDE TO TRANSFER OR HOLD</h3>
          <p>Control what to do with your fractions</p>
        </Tab>
        <Tab eventKey="curators" title="Curators" className="tabche-item">
          <h3><b>1</b> CHOOSE</h3>
          <p>Select the NFT(s) you would like to vault and fractionalize</p>
          <h3><b>2</b> CONFIGURE</h3>
          <p>Set the fractional ERC token standard, total fraction supply to mint, and list the initial reserve price NOTE: Reserve price is dynamically set to the weighted average of all votes of fraction owners by smart contract governance</p>
          <h3><b>3</b> FRACTIONALIZE</h3>
          <p>Confirm that the right NFT(s) are selected for the vault and all details are accurate, then fractionalize and receive the total fraction supply of the NFT(s) now custodied in an audited smart contract vault</p>
          <h3><b>4</b> DISTRIBUTE</h3>
          <p>Decide what to do with the newly minted fractions representing the NFT(s). Options include selling to prospective owners, distributing through marketing events (e.g., giveaways, campaigns), or anything else you can think of. Get creative!</p>
          <h3><b>5</b> COLLECT</h3>
          <p>Receive new fractions added to the total supply annually via a curator fee you set, which acts as an asset under management fee to fraction owners</p>
        </Tab>
    </Tabs>
    </>
  
    );
  }
  export default MyTabs;