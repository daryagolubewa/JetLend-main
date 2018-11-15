var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/borrowers', function(req, res, next) {
  res.render('borrowerSignUp');
});

module.exports = router;
