import React , {useState,useEffect} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./ServiceAccordion.scss";
import {getServiceStatus} from "../api";


const ServiceAccordion = (service) => {
    const getStatus = async(serviceKey) => {
        let {data} = await getServiceStatus(serviceKey);
        //console.log("Res->", data);
        if(data.status === 200)
        setStatus('Healthy');
        else 
        setStatus('Unhealthy');
    }

    const [status,setStatus] = useState('checking...');
    useEffect(()=>{
        getStatus(service.serviceData.key);
    })
   // console.log(service);
  return (
    <div >
      <Accordion className="service-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="service-name-status">
          <Typography >{service.serviceData.name}</Typography>
          <div className="status-checker"> <div style={{"marginRight": "0.3rem","marginLeft":"1rem"}}>Status</div> {status === "checking..."? <CircularProgress size="1rem"/>: <div className={status==="Healthy"? "status-healthy": "status-unhealthy"}>{status}</div>}</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="service-details">
              <div className="service-detail">
                Type: <div className="service-bubble">{service.serviceData.type}</div>
              </div>
              <div className="service-detail">
                Hosted In: <div className="service-bubble">{service.serviceData.location}</div>
              </div>
              {
                service.serviceData.type === "Client"? 
                <a className="service-link" href={service.serviceData.host} target="_blank" rel="noopener noreferrer" aria-label="app-link">Go to App <ExitToAppIcon className="link-icon"/></a> : null
              }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ServiceAccordion;