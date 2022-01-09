import * as React from 'react';

import Navigation from './Navigation';
import FrCard from './FractionalizeCard';
import NFTCollection from './NFTCollection';

import '../assets/App.css';
import VaultImage from './VaultImage';
import NFTCard from './NFTCard';
import { SelectedNFTContext } from '../context';

const FractionalizePage = () => {

  const [selectedCard,setSelectedCard] = React.useState<any>(null);
  const [hasCard,setHasCard] = React.useState<any>(null);

  
  const handleSelectedCard = (obj:any) => {
      console.log(obj);
      console.log("handleSelectedCard");
      setHasCard(true);
      setSelectedCard(obj);
  }

  return (
    // <SelectedNFTContext.Provider value = {{card:selectedCard,onChange:handleSelectedCard}}>

    <div className="fractionalize-page">
      { selectedCard ? (
        <main className="d-flex justify-content-around align-items-center fr-header"> 
          <section>
            <FrCard {...selectedCard} />
          </section>
          <aside> 
            {/* <VaultImage /> */}
            <NFTCard {...{elements: selectedCard }} />
          </aside>
        </main> 
      ):(
        <div/>
      ) }
        <footer>
        <svg className="fr-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#521945" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,128C384,107,480,117,576,133.3C672,149,768,171,864,186.7C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>
          <h1 className="title">NFTz</h1>
        <NFTCollection onSelectNFT={handleSelectedCard}/>
      </footer>
    </div>
      // </SelectedNFTContext.Provider>
      // {/* </div>  */}
  );
}
export default FractionalizePage;


// const Fractionalize = () => {
//   return (
//   <>
//     <body>
//     <Navigation/>
//         <div className="custom-shape-divider-bottom-1640631082">
//             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"/>
//             </svg>
//         </div>
//         <section className="second-container">
//           <h1 className="title">How it works?</h1>
//           <div className="paragraph-text">Fractional enables NFT owners to create new communities surrounding their NFTs, discover NFT market value, and create new ways of engaging their existing communities.</div>
//           <img src="assets/buyers.svg"/>
//           <Button variant="primary">Primary</Button>{' '}
//           <Tabs />
//         </section>
//     </body>
//   </>

//   );
// }
// export default Fractionalize;
