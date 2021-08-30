var express = require('express');
var router = express.Router();

const writeFeedController = require("../controller/WriteFeedController");

router.get('/', writeFeedController.writeFeed);

module.exports = router;
