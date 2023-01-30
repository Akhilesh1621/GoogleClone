
//api 

const express = require("express");
const User = require("../models/usermodel");
const jwt = require("jsonwebtoken")

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
        
        //randomize secured token
      const token =  jwt.sign({id: user._id});

        res.json({user , token});
    } catch (e){
        res.status(500).json({error: e.message});
    }
});
//auth middleware

authRouter.get('/',auth, async( req, res) => {

});

module.exports = authRouter;
