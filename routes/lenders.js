
var express = require('express');
const models = require('../models/index')
const bcrypt = require('bcrypt');
const addMiddlewares = require('../middlewares/add-middlewares');


var router = express.Router();
addMiddlewares(router, models.Lender);
const saltRounds = 10;
/* GET users listing. */
router.get('/',  function(req, res, next) {

  res.render('lender')

});


router.get('/regLender', function(req, res, next) {
  res.render('lenderSignUp')
});


router.get('/logLender', function(req, res, next) {
  res.render('lenderLogIn')
});



router.post('/add', async (req, res) => {
  let curEmail = await models.Lender.getEmail(req.body.email)
  let curPhone = await models.Lender.getPhone(req.body.phone)
  // if(curEmail.length && curPhone.length === 0) {
    models.Lender.create({
      "name":        req.body.name,
      "phone":       req.body.phone, 
      "email":       req.body.email,
      "passport_number": req.body.passport_number,
      "password":      req.body.password })
      // bcrypt.hashSync(req.body.password, saltRounds)})
      res.send(200, "Ok")
  // }
  // else {
  //   if(curEmail.length == 0) {
  //     res.send(400, 'This email is already used')
  //   }
  //   else {
  //     res.send(400, 'This phone is already used')
  //   }
 // } 
 res.redirect('/lenders/logLender')

})

router.post('/logLender', async (req, res) => {

  // addMiddlewares(router, models.Lender);
  console.log("ЗАШЛИ В LOGIN!!!!!!!!!!!")

//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//         return res.send(400, err);
//     }
//     req.logIn(user, (err) => {
//         if (err) {
//             return res.send(400 , err);
//         }
//         return res.json(user)
//     })
// })(req, res, next);

  // const foundUsers = await role.getEmail(email);


  let lenderEmail = req.param("lender-email")
  let lenderPassword = req.param("lender-password")

  let thisUser = await models.Lender.getEmail(lenderEmail); 

// console.log("thisUser[0][dataValues][email]  = ", thisUser[0]["dataValues"]["email"] )
// console.log("thisUser[0][dataValues][password] = ", thisUser[0]["dataValues"]["password"] )
// console.log("bcrypt.hashSync(lenderPassword, saltRounds) = ", bcrypt.hashSync(lenderPassword, saltRounds) )

if (thisUser[0]["dataValues"]["email"] == lenderEmail &&
  thisUser[0]["dataValues"]["password"] == lenderPassword ) {
    // bcrypt.hashSync(lenderPassword, saltRounds)) {

      let idUser = thisUser[0]["dataValues"]["id"]
      res.redirect(`/lenders/profile?UsEr_id=${idUser}`)
    } else {
      res.redirect('/lenders/logLender')
    }

  })

router.get('/profile', async function(req, res, next) {
 // console.log(" Loan.getLoan = ", await  models.Loan.getLoan("2"))

 let loans = await  models.Loan.getLoan("2")

 let loansInf = []

let fistLine = ["Given Money", "____________Date_give__________",
 "Status", "____________Date_return____________", "Your future money" ]
loansInf.push(fistLine)

 for (let i=0; i<loans.length; i++) {
  let oneLoan = []
  oneLoan.push(`      ${loans[i]["dataValues"]["amount_give"]}`)
  oneLoan.push(`      ${loans[i]["dataValues"]["date_give"]}`)
  oneLoan.push(`      ${loans[i]["dataValues"]["status"]}`)
  oneLoan.push(`      ${loans[i]["dataValues"]["date_return"]}`)  //.substr(0,10) ) //.substring(0,11))
  oneLoan.push(`      ${loans[i]["dataValues"]["amount_give"]*1.12}`)


// oneLoan["amount_give"] = loans[i]["dataValues"]["amount_give"]
// oneLoan["date_give"] =  loans[i]["dataValues"]["date_give"]
// oneLoan["status"] = loans[i]["dataValues"]["status"]
// oneLoan["date_return"] = loans[i]["dataValues"]["date_return"]

  loansInf.push(oneLoan)
}

// console.log( "loansInf = ", loansInf)

res.render('lenderProfile', {loan: loansInf} ) 
});




router.get('/profile/pay', function(req, res, next) {
  res.render('loans')
});


router.post('/profile/paid', async function(req, res, next) {

  console.log("ЗАШЛИ в post '/pay'!!!!!!!!!!!!!!!!!")


  let amountGive = req.param("loan_summ")

  // var strGET = window.location.search.replace( '?', ''); 

  console.log("ЗАБРАЛИ ЗНАЧЕНИЕ ИЗ ВВОДА!!!!!!!!!!!!!!!!!!")

  if (amountGive) {
    models.Loan.create({
   "lender_id": "2",
   "date_give":  new Date(), //CURRENT_DATE
   "amount_give": amountGive,
   "status":  "gave",
   "date_return": new Date(),
 })
  }
  console.log("ЗАПИСАЛИ В БД!!!!!!!!!!!!!!")

   res.redirect('/lenders/profile')
});





module.exports = router;
