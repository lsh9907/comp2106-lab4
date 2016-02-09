/* activate express */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //show index.ejs view
  res.render('index', {
      title: 'Home | Lab 4',
      message: 'Sunghie\'s Lab 4'
  });
});

/*GET Ron's page*/
router.get('/ron', function (req, res, next) {
    //show ron.ejs view
    res.render('ron', {
            title: "Ron",
            name: "Ron",
            hobby: "playing golf"
        }
    );
});

/*GET Sara's page*/
router.get('/sara', function (req, res, next) {
    //show sara.ejs view
    res.render('sara', {
            title: "Sara",
            name: "Sara",
            hobby: "watching sports games"
        }
    );
});

/*GET Wendy's page*/
router.get('/wendy', function (req, res, next) {
    //show wendy.ejs view
    res.render('wendy', {
            title: "Wendy",
            name: "Wendy",
            hobby: "playing violin"
        }
    );
});

/*GET Sunghie's page*/
router.get('/sunghie', function (req, res, next) {
    //show sunghie.ejs view
    res.render('sunghie', {
            title: "Sunghie",
            name: "Sunghie",
            hobby: "watching movies"
        }
    );
});

// make this file visible within the rest of the application
module.exports = router;
