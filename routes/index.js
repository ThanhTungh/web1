var express = require('express');
const { route } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res)  {
  res.render('index');
});

router.get('/cloud', function(req, res)  {
  res.render('cloud');
});

module.exports = router;
