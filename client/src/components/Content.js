import React, { useEffect } from 'react';
import "./Content.css";
import {getServiceStatus} from "../api";
import config from "../config";
import Typography from '@material-ui/core/Typography';
import ServiceAccordion from "./ServiceAccordion";
const Content = () => {
    return(
        <div className="main-content-wrapper">
            <div className="main-content">
            <Typography variant="h5">My Services</Typography>
            {
                config.services.map((service,index) => {
                    return (<ServiceAccordion key={index} serviceData={service}/>)
                })
            }
        </div>
        </div>
    )
}
export default Content;