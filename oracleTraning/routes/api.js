var express = require('express');
var router = express.Router();

const authController = require('./../controllers/authController');

router.post('/register',authController.registerWeb);
router.post('/login',authController.loginWeb);

module.exports = router;