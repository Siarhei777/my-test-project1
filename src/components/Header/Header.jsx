import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className = {style.header}>
            <img className = {style.image1} src='/assets/images/pic1.jpg' alt='Картинка1' />
            <h1>Социальная сеть № 1 в Белоруссии</h1>
            <img className = {style.image2} src='/assets/images/photo.jpg' alt='Картинка1' />
        </header>
    );
}

export default Header;