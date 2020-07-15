var mongoose = require('mongoose'), Scheema= mongoose.Schema;
var taskScheema = new Scheema({
    _user:{type: Scheema.Types.ObjectId, ref:'user', required:true},
    text:{type:String, required:true},
    dateAdded:{type:Date, default:Date.now}
});
const Task = mongoose.model('Task',taskScheema);

exports.addTask = function(userReq,userId){
    var newTask = new Task()

    newTask.set('text',userReq.text);
    newTask.set('_user',userId);
    return new Promise((resolve,reject)=>{
        newTask.save(function(err,task){
            if(err){
                reject({err});
            }else{
                resolve({message:'Task inserted',task});
            }
        })
    })
}
exports.getAllTasksForUser = function(userId){
    return new Promise((resolve,reject)=>{
        //.populate('_user') for populating the user object
        Task.find({_user:userId}).exec(function(err,tasks){
            if(err){
                reject({err});
            }else{
                console.log(tasks)
                resolve(tasks);
            }
        })
    })
}

exports.deleteTask = function (taskId){
    return new Promise((resolve,reject)=>{
        Task.deleteOne({_id:taskId}).exec(function(err){
            if(err){
                reject({err});
            }else{
                resolve({message:'task deleted!'});
            }
        })
    })
}

exports.editTask = function(userReq){
    return new Promise((resolve,reject)=>{
        Task.findOneAndUpdate(
            {_id:userReq._id},
            {text:userReq.text},
            {upsert:false},
            (err,task)=>{
                if(err){
                    reject({err})
                }else{
                    resolve(task);
                }
            })
    })
}