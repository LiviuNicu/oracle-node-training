var mongoose = require('mongoose'), Schema = mongoose.Schema;
var crypto = require('crypto');
var userSchema = new Schema({
    email:{type:String, unique:true, required:true},
    firstName:{type:String,  required:true},
    lastName:{type:String,  required:true},
    hashed_password:{type:String,  required:true},
    dateAdded:{type:Date, default: Date.now}
});
var user= mongoose.model('user',userSchema);
const JWT = require('./../middleware/jwt');

function hashPass(pwd){
    return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

exports.User = user;

exports.register = function(userReq) {
    let newUser = new user();

    newUser.set('email',userReq.email)
    newUser.set('firstName',userReq.firstName)
    newUser.set('lastName',userReq.lastName)
    newUser.set('hashed_password',hashPass(userReq.password))

    return new Promise((resolve,reject)=>{
        newUser.save(function(err,user){
            if(err){
                reject({err})
            }else{
                resolve({success:"User Inserted",user})
            }
        })
    })
}

exports.login = function(userReq){//{email:'',password:''}
    return new Promise((resolve,reject)=>{
        user.findOne({email:userReq.email})
        .exec(function(err,user){
            if(err){
                reject({err})
            }else if(!user){
                resolve({error:true,message:'user not found'})
            }else{
                if(user.hashed_password === hashPass(userReq.password)){
                    const token = JWT.getToken({
                        email:user.email,
                        _id: user._id
                    })
                    resolve({error:false,user,token})
                }else{
                    resolve({error:true,message:'password is wrong'})
                }
            }
        })
    })
}

exports.getAllUsers = function(){
    return new Promise((resolve,reject)=>{
        user.find().exec(function(err,users){
            if(err){
                reject({err});
            }else{
                resolve(users);
            }
        })
    })
}

exports.getUserById = function(id){
    return new Promise((resolve,reject)=>{
        user.findOne({_id:id})
        .exec(function(err,user){
            if(err){
                reject({err});
            }else{
                resolve(user);
            }
        })
    })
}