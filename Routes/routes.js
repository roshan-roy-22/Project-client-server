const express=require('express');
const router=express.Router() 
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectControllers');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddleware');


//route for register
router.post('/register',userController.register)

//route for login
router.post('/login',userController.login)

//route for addd project
router.post('/addproject',jwtMiddleware,multerConfig.single('projectImage'), projectController.addProjects)

module.exports = router
