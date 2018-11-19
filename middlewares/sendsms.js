const SMSru = require('sms_ru');
const sms = new SMSru('7113B561-1A53-3E9D-D3D2-DCB1BCC13819');

let sendSms = (req) =>{
  sms.sms_send({
    to: req.body.phone,
    text: `Привет ${req.body.name}! Ты был успешно зарегестрирован на JetLend` 
  }, function(e){
    console.log(e.description);
  });
}

module.exports = sendSms
