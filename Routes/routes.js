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

//gethomeproject
router.get('/home-projects',projectController.getHomeProjects);

//getallprojects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

//getuserPrjoects

router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

//edit project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)

//delete projects
router.delete('/project/remove/:pid',jwtMiddleware,projectController.removeProject)

module.exports = router
