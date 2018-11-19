var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  let trueHeader = true
  res.render('index', { trueHeader });
});

// router.get('/', function(req, res) {
//     let toMainPage = true;
//     res.render('index', { toMainPage });
// });

module.exports = router;
