import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import search from '../../Assets/search_icon.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <img className='logo' src={logo} alt="" />
        <ul className='nav-ul'>
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/about'>About Us</Link> <FontAwesomeIcon icon={faCaretDown} /></li>
          <li><Link to='/package'>Package</Link> <FontAwesomeIcon icon={faCaretDown} /></li>
          <li><Link to='/destination'>Destination</Link><FontAwesomeIcon icon={faCaretDown} /></li>
          <li> <Link to='/blog'>Blog</Link>  <FontAwesomeIcon icon={faCaretDown} /></li>
          <li> <Link to='/contact'>Contact</Link> </li>
          <img src={search} alt=""/>
        </ul>
      </div>
    </div>
  );
}
