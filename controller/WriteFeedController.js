var getFeed = require('../logic/GetFeed')

exports.writeFeed = async (req, res) => {
  var result = getFeed.getFeed();
  res.setHeader('Content-Type', 'text/plain');
  res.send(result);
};