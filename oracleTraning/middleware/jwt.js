var JWT_KEY = "Oracle";
var jwt = require('jsonwebtoken');

exports.getToken = (obj) =>{
    const token = jwt.sign(obj,JWT_KEY,{expiresIn:'2h'});
    return token;
}

exports.checkToken = (req,res,next)=>{
    try{
        const token = req.cookies['x-auth'];
        const decoded = jwt.verify(token,JWT_KEY);
        req.userData = decoded;
        next();
    }catch(err){
        return res.status(401).json({message:'Unauthorized!'})
    }
}

exports.checkTokenWeb = (req,res,next)=>{
    try{
        const token = req.cookies['x-auth'];
        const decoded = jwt.verify(token,JWT_KEY);
        req.userData = decoded;
        next();
    }catch(err){
        return res.status(401).json({message:'Unauthorized!'})
    }
}