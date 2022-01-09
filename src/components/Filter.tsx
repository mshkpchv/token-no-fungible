import * as React from 'react';
import '../assets/App.css';
import ArrowImage from './ArrowDown';

const MyFilter = () => {
    return (
    <>
<nav role="navigation" className="filter-box">
  <ul className="dropdowns">
    <li className="dropdown-option">
        <a href="#" className="dropdown-name">Status
        <ArrowImage/>
        </a>
    <ul className="dropdown">
        <li className="options"><a href="#">All</a></li>
        <li className="options"><a href="#">Live auction</a></li>
        <li className="options"><a href="#">Fraction Sale</a></li>
        <li className="options"><a href="#">Vault Closed</a></li>
      </ul>
    </li>
  </ul>
  <div>
    <h5>Valuation Range</h5>
        <div className="frame">
            <div className="range">
            <input type="range" min="0" max="40" />
            </div>
        </div>
    </div>
</nav>
    </>
  
    );
  }
  export default MyFilter;