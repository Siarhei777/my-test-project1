import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className = {style.nav}>
        <a className = {`${style.links} ${style.colorText2}`} href="#/">Profile</a>
        <a className = {`${style.links} ${style.colorText}`} href="#/">Messages</a>
        <a className = {`${style.links} ${style.colorText}`} href="#/">News</a>
        <a className = {`${style.links} ${style.colorText}`} href="#/">Music</a>
        <a className = {`${style.links} ${style.colorText}`} href="#/">Settings</a>
      </nav>
    );
}

export default Navbar;