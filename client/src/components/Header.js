import React from 'react';
import "./Header.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
const Header = () => {
    return (
        <div className="service-status-header">
        <div className="logo-app-name">
            <div className="logo-container">
            <img className="logo-icon" src="../images/logo.png" height="30" width="30" alt="logo" aria-label="logo"/>
            </div>
            <h2 className="service-status-heading">
                Service Status
            </h2>
        </div>
        <a href="https://github.com/0racularGh0st/service-status-checker" target="_blank" rel="noopener noreferrer" aria-label="app-link"><GitHubIcon className="github-icon"/></a>
        </div>
    )
}
export default Header;