var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  let trueHeader = true
  res.render('index', { trueHeader });

});

router.get('/profile', function(req, res) {
    res.render('borrowerProfile');

});

// router.get('/application', function(req, res) {
//     res.render('applicationForm');
//
// });

module.exports = router;
