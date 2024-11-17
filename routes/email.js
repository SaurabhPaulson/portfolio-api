const express = require("express");
const router = express.Router();
require('dotenv').config();
const db = require('../config/dbConnection/db')
const {sendMail} = require('../routes/globals')

router.post('/send', async(req,res) =>{
    let {fromEmail, name, message} = req.body
    let params = {
        fromEmail : fromEmail,
        fromName : name,
        message : message
    }
    try{
        await sendMail(params)
        res.status(200).json({ 
            success : true,
            message: "Email sent successfully!" 
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            sucess: false,
            message: "Email sent Failed",
          });
    }

})

module.exports = router;