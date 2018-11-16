const SMSru = require('sms_ru');
const sms = new SMSru('7113B561-1A53-3E9D-D3D2-DCB1BCC13819');

sms.sms_send({
    to: '79247011170',
    text: "Don't scroodging code" 
  }, function(e){
    console.log(e.description);
});