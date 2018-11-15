var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/borrowers', function(req, res) {
  res.render('borrowerSignUp');
});

router.get('/enter', function(req, res) {
    res.render('borrowerSignIn');
});


module.exports = router;
