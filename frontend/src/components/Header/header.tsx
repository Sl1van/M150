import React from "react";
import "./header.css";
import logo from "../../assets/logo.png"

function Header() {
    return(
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="header__title">[Basket]</h1>
        </div>
    );

}

export default Header;
