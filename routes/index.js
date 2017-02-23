var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular, Node and Twitter API' });
});

/* GET table page. */
router.get('/table.html', function(req, res) {
  res.sendfile(path.join(__dirname+'/../views/table.html'));
});

module.exports = router;
