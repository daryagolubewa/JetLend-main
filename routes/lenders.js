
var express = require('express');
const models = require('../models/index')
const bcrypt = require('bcrypt');
const addMiddlewares = require('../middlewares/add-middlewares-lender');


var router = express.Router();
addMiddlewares(router);
const saltRounds = 10;
/* GET users listing. */
router.get('/',  function(req, res, next) {

res.render('lender')

});


router.get('/regLender', function(req, res, next) {
res.render('lenderSignUp')
});


router.get('/logLender', function(req, res, next) {
res.render('lenderSignIn')
});



router.post('/add', async (req, res) => {
  let curEmail = await models.Lender.getEmail(req.body.email)
  let curPhone = await models.Lender.getPhone(req.body.phone)
  if(curEmail.length && curPhone.length === 0) {
    models.Lender.create({
      "name":          req.body.lender_name,
      "phone":         req.body.lender_phone, 
      "email":         req.body.lender_email,
      "passport_number": req.body.passport_number,
      "password":      bcrypt.hashSync(req.body.password, saltRounds)})
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
})(req, res, next);
})

module.exports = router;
