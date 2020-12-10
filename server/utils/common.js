const config = require("../config");
var push = require('web-push');
const request = require('requestretry');
push.setVapidDetails(config.mail, config.vapidKeys.publicKey, config.vapidKeys.privateKey);
let subs = config.subscribers;

function checkStatus(url){
    return request({
        url: url,
        json: true,
        fullResponse: true // (default) To resolve the promise with the full response or just the body
      })
      .then(function (response) {
        return response.statusCode;
      })
      .catch(function(error) {
        return 500;
      })
}

function sendNotification(){
    subs.forEach(sub => { push.sendNotification(sub, 'test message') });
}

function runScheduledCheck(){
    config.services.forEach(service => {
    checkStatus(service.host)
    .then((statuscode) => {
        if(statuscode === 200){
            //don't do anything it service is healthy
            // let message = `${service.name} is healthy`;
            // subs.forEach(sub => { push.sendNotification(sub, message) });
        }
        else{
            let message = `${service.name} is unhealthy`;
            subs.forEach(sub => { push.sendNotification(sub, message) });
        }
    })
    })
}
module.exports ={
    checkStatus : checkStatus,
    sendNotification : sendNotification,
    runScheduledCheck : runScheduledCheck
}