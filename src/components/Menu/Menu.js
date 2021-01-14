import React from 'react';
import { Link } from 'react-router-dom';
import Users from '../Users/Users'
import './Menu.css';


export default function Menu() {


  return <>
    <nav className='nav-bar'>
      <ul className="nav-list">
        <Link to="/user"><li className="nav-link">My Melodies</li></Link> 
        <Link to="/select-key"><li className="nav-link">Key</li></Link>
        <Link to="select-progression"><li className="nav-link">Progression</li></Link> 
        <Link to="/jammin"><li className="nav-link">Create</li></Link> 
        <li className="nav-link"><Users/></li> 
      </ul>
    </nav>
    
  </>
}