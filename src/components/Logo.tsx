import * as React from 'react';
import logo from '../assets/fr-logo.svg';

const Logo = () => {
    return (
      <>
      <img src={logo} className="logo"/>  
      <div className='logo'>only on Rinkeby</div>
      </>
    );
  }
  export default Logo;