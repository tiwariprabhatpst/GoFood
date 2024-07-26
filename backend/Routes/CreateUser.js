const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const{body,validationResult} = require('express-validator');

const jwtSecret = "qwertyuiopasdfghjklzxcvbnm,./;'[";

router.post('/creatuser',[body('email',"Invalid Email").isEmail(),body('password',"Invalid Password").isLength({min: 5})], async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try{
        User.create({
            name:req.body.name,
            password: secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    }
    catch(err){
        console.log(err);
    }
})

router.post('/loginuser',[body('email',"Invalid Email").isEmail(),body('password',"Invalid Password").isLength({min: 5})], async(req,res)=>{
    let email = req.body.email;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
        let userdata = await User.findOne({email});
        if(!userdata){
            return res.status(400).json({errors : "Try logging with correct credentials" })
        }
        const pwdCompare = bcrypt.compare(req.body.password, userdata.password)
        if(!pwdCompare){
            return res.status(400).json({errors : "Try logging with correct credentials" })
        }
        const data ={
            user:{
                id: userdata.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret)
        return res.json({ success:true, authToken:authToken})
    }
    
    catch(err){
        console.log(err);
    }
})

module.exports = router;