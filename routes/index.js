var express = require('express');
var router = express.Router();

var getData = require('../logic/GetData')

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var data = await getData.getBasicInformation(req,res);
  res.send(data);
});

module.exports = router;
