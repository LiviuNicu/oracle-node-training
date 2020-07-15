var userModel = require('../models/userModel');

exports.login = function(req,res){
    userModel.login(req.body)
    .then(response => {
        const token = response.token;
        console.log(token)
        res.cookie('x-auth',token,{expires: new Date(Date.now()+2*3600000)})
       res.redirect('/users/'+response.user._id);
    }).catch(err=>{
        res.status(500).json({err});
    })
}

exports.loginWeb = function(req,res){
    userModel.login(req.body)
    .then(response => {
        res.status(200).json(response)
    }).catch(err=>{
        res.status(500).json({err});
    })
}

exports.register = async function(req,res){
    try{
        await userModel.register(req.body);
        res.redirect('/auth/login');
    }catch(err){
        res.status(500).json({err});
    }
}

exports.registerWeb = async function(req,res){
    try{
        let response=await userModel.register(req.body);
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err});
    }
}
