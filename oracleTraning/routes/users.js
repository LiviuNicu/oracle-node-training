var express = require('express');
var router = express.Router();
const userController = require('./../controllers/userController')
const JWT = require('./../middleware/jwt');
/* GET */
router.get('/:user',JWT.checkToken,userController.getAllUsers);
router.get('/tasks/:user',JWT.checkToken,userController.getAllTasksForUser)
router.get('/profile/:user',JWT.checkToken,userController.getUserProfile)
/* POST */
router.post('/addTask',JWT.checkToken,userController.addTask);
router.post('/editTask',JWT.checkToken,userController.editTask);
router.post('/deleteTask',JWT.checkToken,userController.deleteTask);
router.post('/upload',JWT.checkToken,userController.upload)

module.exports = router;
