import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className = {style.nav}>
        <NavLink to="/profile" activeClassName = {`${style.activeLink} ${style.links}`}>Profile</NavLink>
        <NavLink to="/dialogs" activeClassName = {`${style.activeLink} ${style.links}`}>Messages</NavLink>
        <NavLink to="/news" activeClassName = {`${style.activeLink} ${style.links}`}>News</NavLink>
        <NavLink to="/music" activeClassName = {`${style.activeLink} ${style.links}`}>Music</NavLink>
        <NavLink to="/settings" activeClassName = {`${style.activeLink} ${style.links}`}>Settings</NavLink>
      </nav>
    );
}

export default Navbar;