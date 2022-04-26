var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('this is the messages pane');
});

router.get('/', function(req, res, next) {
  res.send('this is the messages pane');
});

module.exports = router;