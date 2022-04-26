var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('see all products here');
});

router.get('/:category', function(req, res, next) {
  res.send('see products of certain categories here');
});

router.get('/:category/:id', function(req, res, next) {
  res.send('see a specific product');
});

module.exports = router;