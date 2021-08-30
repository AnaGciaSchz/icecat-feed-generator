var express = require('express');
var router = express.Router();

var test = require('../logic/Test')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(test.test(req,res));
});

module.exports = router;
