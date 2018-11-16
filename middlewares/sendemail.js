const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

let sendEmail = (req) =>{
  const msg = {
    to: req.body.email,
    from: 'yashakuzm@gmail.com',
    subject: 'Добро пожаловать в JetLend',
    text: `Привет ${req.body.name}! Поздравляем с регистрацией на JetLend, посмотри свой пароль и не забудь его, он ОЧЕНЬ важен для тебя: ${req.body.password}`       
  };
  sgMail.send(msg);
}

module.exports = sendEmail