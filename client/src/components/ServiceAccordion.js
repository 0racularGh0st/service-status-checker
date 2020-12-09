import React , {useState,useEffect} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ServiceAccordion.css";
import {getServiceStatus} from "../api";


const ServiceAccordion = (service) => {
    const getStatus = async(serviceKey) => {
        let {data} = await getServiceStatus(serviceKey);
        console.log("Res->", data);
        setStatus(data.status);
    }

    const [status,setStatus] = useState('checking...');
    useEffect(()=>{
        getStatus(service.serviceData.key);
    },[])
    console.log(service);
  return (
    <div >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="service-name-status">
          <Typography >{service.serviceData.name}</Typography>
          <Typography> Status {status}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ServiceAccordion;