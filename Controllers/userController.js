const users = require('../Models/userModel');
const jwt = require('jsonwebtoken')

//register
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        console.log(existingUser);
        if (existingUser) {
            res.status(400).json("User already exists");
        } else {
            const newUser = new users({
                username, email, password, profile: "", github: "", linkedin: ""
            });
            await newUser.save();
            res.status(200).json(newUser);
        }
    } catch (error) {
        res.status(401).json({ error: "Registration failed. Please try again later." });
    }
};

//login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("Inside the Login request");
    try {
        //Check email,password already exists
        const existingUser = await users.findOne({ email, password })
        console.log(existingUser);
        if (existingUser) {
            //genearate Token using JWT
            const token = jwt.sign({ userId: existingUser._id }, process.env.jwt_secret)
            res.status(200).json({ existingUser, token })
        } else {
            res.status(406).json("Invalid Email/password")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// exports.editUser = async (req, res) => {
//     const userId = req.payload
//     const { username, password, email, linkedin, profileImage } = req.body
//     const profile = req.file ? req.file.filename : profileImage
//     try {
//         const updateUser = await users.findByIdAndUpdate({ _id: userId }, {
//             username, email, password, profile, github, linkedin
//         }, { new: true })
//         await updateUser.save();
//         res.status(200).json(updateUser)
//     } catch (error) {
//         console.log(error);
//         res.status(401).json(error)
//     }
// }

exports.editUser = async (req,res)=>{
    const userId = req.payload
    const {username,email,password,github,linkedin,profile} = req.body
    const uploadImage =  req.file?req.file.filename:profile
    try{
        const updatedUser = await users.findByIdAndUpdate({_id:userId},{
            username,email,password,github,linkedin,profile:uploadImage
        },{new:true})
        await updatedUser.save()
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(401).json(err)
    }
}