const express=require('express');
const router=express.Router() 
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectControllers');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');


//route for register
router.post('/register',userController.register)

//route for login
router.post('/login',userController.login)

//route for addd project
router.post('/addproject',jwtMiddleware, projectController.addProjects)

module.exports = router
