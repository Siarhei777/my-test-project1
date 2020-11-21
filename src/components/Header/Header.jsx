import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className = {style.header}>
            <img className = {style.image1} src='/assets/images/pic1.jpg' alt='Картинка1' />
        </header>
    );
}

export default Header;