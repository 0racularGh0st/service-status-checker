import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div className="service-status-header">
            <img src="../images/logo.png" height="30" width="30" alt="logo" aria-label="logo"/>
            <h1 className="service-status-heading">
                Service Status
            </h1>
        </div>
    )
}
export default Header;