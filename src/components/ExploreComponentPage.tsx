import * as React from 'react';
import '../assets/App.css';
import NFTCollection from './NFTCollection';
import MyFilter from './Filter';

const ExploreComponentPage = () => {
  return (
    <div>
      <MyFilter />
      <NFTCollection/>    
    </div>

  );
}
export default ExploreComponentPage;

