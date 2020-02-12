const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:"smswanlund1513@gmail.com",
      pass:'oathbow27'
    }
  })

router.post("/api/contact", (req, res)=>{
    transporter.sendMail(req.body, (err, info)=>{
        if(err) throw(err);
        else{
            console.log("Email sent: " + info.response);
            return res.json()
        }
    })
})
router.get("/api/contact", (req, res)=>{
    return res.send("Hello!")
})

module.exports= router;