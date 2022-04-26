var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('see the general profile');
});

router.get('/personal-information', function(req, res, next) {
  res.send('change the personal infomation');
});

router.get('/password', function(req, res, next) {
  res.send('change the password here');
});

module.exports = router;