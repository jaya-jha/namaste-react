import React from 'react';
import { Logo } from '../utils/constants';



const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
// This is a functional component that renders the header of the application. It includes a logo and navigation items.