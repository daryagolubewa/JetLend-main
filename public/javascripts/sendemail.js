const msg = {
    to: req.body.email,
    from: 'yashakuzm@gmail.com',
    subject: 'Добро пожаловать в JetLend',
    text: `Привет ${req.body.name}! Поздравляем с регистрацией на JetLend, посмотри свой пароль и не забудь его, он ОЧЕНЬ важен для тебя: ${req.body.password}`       
  };
sgMail.send(msg);