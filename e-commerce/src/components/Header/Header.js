import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header d-flex justify-content-around align-items-center bg-black'>
            <img src={logo} alt="" />
            
            <div className='hov fs-2 fw-bolder'>
            <a href="">Shop</a>
            <a href="" className='ms-5'>Order</a>
            <a href="" className='ms-5'>Inventory</a>
            <a href="" className='ms-5'>Log in</a>
            </div>
        </div>
    );
};

export default Header;