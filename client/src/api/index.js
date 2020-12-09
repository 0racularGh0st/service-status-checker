import axios from 'axios';
import config from "../config";
const api_url = config.api_url;


export const getServiceStatus = (service_key) => {
    return axios.get(`${api_url}/${service_key}`)
    .then((res)=>{
        return res;
    })
    .catch((error)=>{
        console.log(error);
        return {data:{status:500,msg:error}};
    })
    ;
}