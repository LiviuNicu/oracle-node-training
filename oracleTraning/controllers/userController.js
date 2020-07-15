var userModel=require('./../models/userModel');
var taskModel=require('./../models/taskModel');

exports.getAllUsers = async function(req,res){
    try{
        const allUsers = await userModel.getAllUsers();
        const loggedUser = await userModel.getUserById(req.params.user);
        res.render('userList',{title:'Users',allUsers,loggedUser});
    } catch(err){
        res.status(500).json(err);
    }
}

exports.getAllTasksForUser = async function(req,res){
    try{
        const allTasks = await taskModel.getAllTasksForUser(req.params.user);
        const selectedUser = await userModel.getUserById(req.params.user);
        res.render('tasks',{title:"user tasks",allTasks,selectedUser})
    }catch(err){
        res.status(500).json(err);
    }
}

exports.addTask = async function(req,res){
    try{
        await taskModel.addTask(req.body,req.body.userID);
        res.redirect('/users/tasks/'+req.body.userID);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.editTask = async function(req,res){
    try{
        await taskModel.editTask(req.body);
        res.redirect('/users/tasks/'+req.body.userID);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.deleteTask = async function(req,res){
    try{
        await taskModel.deleteTask(req.body._id);
        res.redirect('/users/tasks/'+req.body.userID);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getUserProfile = async function(req,res){
    try{
        const selectedUser = await userModel.getUserById(req.params.user);
        res.render('profile',{title:'User Profile',selectedUser})
    }catch(err){
        res.status(500).json(err);
    }
}

exports.upload = async function(req,res){
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.sampleFile;
    console.log(sampleFile);
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv('public/images/'+req.body.userID+'.png', function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.redirect('/users/'+req.body.userID);
      });
}