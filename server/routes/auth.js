
//api 

const express = require("express");
const User = require("../models/usermodel");

const authRouter = express.Router();


authRouter.post('/api/signup', async (req, res) => {
    try{
        const {name, email, profilePic } = req.body;

        //checking if email is already exist or not
        let user = await User.findOne({email});
        
        if(!user){
            user = new User({
                email,
                 profilePic,
                 name,
            });
            //store data
            user = await user.save();
        }
        
        res.json({user});
    } catch (e){

    }
});

module.exports = authRouter;
