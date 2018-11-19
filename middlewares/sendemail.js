const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

let sendEmail = (req) =>{
  const msg = {
    to: req.body.email,
    from: 'info@jetlend.com',
    subject: 'Добро пожаловать в JetLend',
    text: `${req.body.name}! Поздравляем с регистрацией на JetLend, посмотрите свой пароль и не забудьте его: ${req.body.password}`       
  };
  sgMail.send(msg);
}

module.exports = sendEmail