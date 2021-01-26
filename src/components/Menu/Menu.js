import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Users from '../Users/Users'
import './Menu.css';


export default function Menu() {


  return <>
    <nav className='nav-bar'>
      <ul className="nav-list">
        <NavLink to="/user" activeClassName="active"><li className="nav-link">My Melodies</li></NavLink> 
        <NavLink to="/select-key" activeClassName="active"><li className="nav-link">Key</li></NavLink>
        <NavLink to="select-progression" activeClassName="active"><li className="nav-link">Progression</li></NavLink> 
        <NavLink to="/jammin" activeClassName="active"><li className="nav-link">Create</li></NavLink> 
        <li className="nav-link" activeClassName="active"><Users/></li> 
      </ul>
    </nav>
    
  </>
}