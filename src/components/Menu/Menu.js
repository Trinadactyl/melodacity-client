import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Users from '../Users/Users'
import './Menu.css';


export default function Menu() {


  return <>
    <nav className='nav-bar'>
      <ul className="nav-list">
        <NavLink to="/user" activeClassName="active" className="nav-link"><li >My Melodies</li></NavLink> 
        <NavLink to="/select-key" activeClassName="active" className="nav-link"><li>Key</li></NavLink>
        <NavLink to="select-progression" activeClassName="active" className="nav-link"><li>Progression</li></NavLink> 
        <NavLink to="/jammin" activeClassName="active" className="nav-link"><li>Create</li></NavLink> 
        <li><Users/></li> 
      </ul>
    </nav>
    
  </>
}