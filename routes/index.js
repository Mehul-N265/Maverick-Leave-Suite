var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Maverick Leave System' });
});
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Maverick | Login' });
});
module.exports = router;
