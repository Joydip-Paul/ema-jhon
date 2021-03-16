import React from 'react';
import './Header.css'
import logo from '../../Image/ok.png'
const Header = () => {
    return (
        <div className="Header">
           <div className="head-nav">
            <img src={logo} alt="" className="logo"/>
                <nav className="Nav-items">
                    <a href="/shop">Shop</a>
                    <a href="order">Order Review</a>
                    <a href="manage">Manage Inventory</a>
                </nav>
                <div className="inputField">
                    <input type="text" placeholder = "Search"></input>
                    <button>Search</button>
                </div>
           </div>
           
        </div>
    );
};

export default Header;