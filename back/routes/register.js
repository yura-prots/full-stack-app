var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
   res.send({ message: `Hello ${req.body.email}! You are registered.` });
});

module.exports = router;
