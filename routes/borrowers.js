var express = require('express');
const models = require('../models/index')
const passport = require('passport');
const bcrypt = require('bcrypt');
const addMiddlewares = require('../middlewares/add-middlewares');
const sendEmail = require('../middlewares/sendemail')
const sendSms = require('../middlewares/sendsms')



var router = express.Router();
addMiddlewares(router);
const saltRounds = 10;


router.get('/add', (req,res) => {
  res.render('borrowerSignUp')
});

router.get('/enter', function(req, res) {
    res.render('borrowerSignIn');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res) {
    res.render('borrowerProfile');

});

router.get('/application', function(req, res) {
    res.render('applicationForm');

});

router.get('/payment', (req,res) => {
    res.render('paymentsInfo');
});

router.get('/info', (req,res) => {
    res.render('borrowerInfo');
});

router.post('/add', async (req, res) => {
  let curEmail = await models.Borrower.getEmail(req.body.email)
  let curPhone = await models.Borrower.getPhone(req.body.phone)
  if((curEmail.length && curPhone.length) === 0) {
    models.Borrower.create({"name": req.body.name, "phone": req.body.phone, "email": req.body.email, "password": bcrypt.hashSync(req.body.password, saltRounds)})
    res.send(200, "Ok")
  }
  else {
    if(curEmail.length == 0) {
      res.send(400, 'This email is already used')
    }
    else {
      res.send(400, 'This phone is already used')
    }
 } 
})

router.get('/enter', (req,res) =>{

  res.render('borrowerSignIn')
})

router.post('/enter', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
        return res.send(400, err);
    }
    req.logIn(user, (err) => {
        if (err) {
            return res.send(400 , err);
        }
        return res.json(user)
    })
  })(req, res);
});

module.exports = router;
