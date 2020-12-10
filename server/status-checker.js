const express = require('express');
const app = express();
const cors = require('cors');
var CronJob = require('cron').CronJob;
const PORT = process.env.PORT || 5001;
const config = require("./config");
var push = require('web-push');
const common = require("./utils/common");

app.disable('x-powered-by');
app.use(cors());

var job = new CronJob('0 9 * * *', function() {
  common.runScheduledCheck();
},null,true,'Asia/Kolkata');
job.start();

// push.setVapidDetails(config.mail, config.vapidKeys.publicKey, config.vapidKeys.privateKey);

// let subs = config.subscribers;

app.get('/', (req, res) => {
    res.status(200).send({ msg: "Service Status API for Nigel David" });
})
app.get('/check-status/:service_key',(req,res) => {
    let serviceKey = req.params.service_key;
    let status = null;
    let selectedService = null;
    config.services.find(service => {
        if(service.key === serviceKey){
            selectedService = service.host;
            return;
        }
    })
    if(selectedService!==null){
        common.checkStatus(selectedService)
    .then((statuscode) => {
        status = statuscode;
        if(status === 200){
            res.status(200).send({status:200,msg:"Healthy"});
        }
        else{
            res.status(status).send({status:status,msg:"Error Checking Health"});
        }
    })
    }
    else {
        res.status(404).send({status:404,msg:"Service not found"});
    }
})
app.get('*', (req, res) => {
    res.status(404).json({
      "status": 404,
      "message": "Bad request"
    })
  });
app.listen(PORT, () => {
    common.runScheduledCheck();
    console.log(`App listening on port ${PORT}`);
});
