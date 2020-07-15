var express = require('express');
var router = express.Router();

const authController = require('./../controllers/authController');

router.get('/login',function(req,res){
    res.render('login',{title:"login"});
})
router.get('/register',function(req,res){
    res.render('register',{title:"register"});
});

router.post('/register',authController.register);
router.post('/login',authController.login);

module.exports = router;