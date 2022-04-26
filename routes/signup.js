var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('this is the sign up home');
});

router.get('/', function(req, res, next) {
  res.send('this is the sign up home');
});

module.exports = router;