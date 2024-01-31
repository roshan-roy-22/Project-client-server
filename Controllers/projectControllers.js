const projects = require('../Models/projectModel')

exports.addProjects= (req,res)=>{
    console.log("Inside Add Project  Api");
    res.status(200).json("add project request received")
}