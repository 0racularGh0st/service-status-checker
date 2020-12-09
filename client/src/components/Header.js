import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div className="service-status-header">
            <img src="../images/logo.png" height="40" width="40"/>
            <h1 className="service-status-heading">
                Service Status Checker
            </h1>
        </div>
    )
}
export default Header;