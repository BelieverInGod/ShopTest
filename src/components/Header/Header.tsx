import React from 'react';

import './Header.css';
import logo from '../../assets/image/ShopBlack.png'

function Header() {
    return (
        <header className="Header">
            <img src={logo} alt="logo" className='logo' />
        </header>
    );
}

export default Header;
