var express = require('express');
const models = require('../models/index')
const passport = require('passport');
const bcrypt = require('bcrypt');
let fs = require('fs');
const addMiddlewares = require('../middlewares/add-middlewares');
const sendEmail = require('../middlewares/sendemail')
const sendSms = require('../middlewares/sendsms')
const multer = require('multer')
const path = require('path');


var router = express.Router();
addMiddlewares(router, models.Borrower);
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



let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../files'))
  },
  filename: function (req, file, cb) {
    cb(null, req.session.passport.user.id.toString() + Date.now() + file.originalname)
  }
})
let upload = multer({ storage: storage })
router.post('/file', upload.single('file'), async (req,res) => {
  let name = await models.Borrower.findById(req.session.passport.user.id)
  name["file_name"] = req.file.filename
  await name.save()
  console.log('Uploaded: ', req.file)
  res.redirect('/borrowers/profile')
})

router.get('/profile', async function(req, res) {
    let user = req.session
    console.log(user)
    let name = await models.Borrower.findById(await req.session.passport.user.id)
    let profile = await models.Profile.findAll({where:{borrower_id: req.session.passport.user.id}})
    let status
    if(profile.length != 0) {
      profile = (profile[0].first_name == null) ? undefined : true 
    }
    if(name != null) {
      status = name.file_name == null ? undefined : name.file_name
    }
    res.render('borrowerProfile', {profileName: name, status, profile});

});

router.get('/application', function(req, res) {
    res.render('applicationForm', {name: req.session.passport.user.name});

});


router.post('/application',async function(req, res) {
  await models.Profile.create({first_name: req.body.first_name, last_name: req.body.last_name, paternity_name: req.body.paternity_name, date_birth: req.body.date_birth, passport_number: req.body.passport_number, organization:  req.body.organization, release_date: req.body.release_date, tax_number: req.body.tax_number, borrower_id: req.session.passport.user.id})
  res.send(200)
})

router.get('/payment', (req,res) => {
    res.render('paymentsInfo');
});


router.post('/add', async (req, res) => {
  let curEmail = await models.Borrower.getEmail(req.body.email)
  let curPhone = await models.Borrower.getPhone(req.body.phone)
  if((curEmail.length && curPhone.length) === 0) {
    models.Borrower.create({"name": req.body.name, "phone": req.body.phone, "email": req.body.email, "password": bcrypt.hashSync(req.body.password, saltRounds)})
    sendEmail(req)
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

router.get('/red', (req,res) => {
  res.redirect('/borrowers/profile')
})

router.post('/enter', (req, res) => {
  // addMiddlewares(router, models.Borrower);
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
})

module.exports = router;
