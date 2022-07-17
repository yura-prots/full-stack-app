var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
   res.send(`Hello ${req.body.email}! You are registered.`);
});

module.exports = router;
