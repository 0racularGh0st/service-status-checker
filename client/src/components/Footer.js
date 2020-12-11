import React from 'react';
import "./Footer.scss";
const Footer = ()=> {
    return (
        <div>
            <div className="footer-content">
            <div className="footer-detail">
                Designed and Built 
            </div>
            <div className="footer-detail">
                by
            </div>
            <a className="my-portfolio" href="https://nigeldavid.in" target="_blank" rel="noopener noreferrer" aria-label="me" >
                Nigel David Tariang
            </a>
            </div>
        </div>
    )
}
export default Footer;