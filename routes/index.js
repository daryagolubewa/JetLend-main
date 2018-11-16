var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  let trueHeader = true
  res.render('index', { trueHeader });

});

module.exports = router;
