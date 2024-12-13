const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require("dotenv").config()
const app=express()
app.use(bodyParser.json())
const nodeMailer=require('nodemailer')
const Notification=require('./models/Notification')

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connected to mongoDB "))
.catch((err)=>console.error("error"))


app.get('/',(re,res)=>{
    res.send("crypto notification service is running")
})

app.post('/api/notifications',async(req,res)=>{
    try{
        const notification= new Notification(req.body)
        await notification.save();
        res.status(201).json({message:"notification created",notification})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

app.post('/api/notifications/send', async(re,res)=>{
    try{
        const {email,price,dailyPercentage,TradingVolume}=re.body
        const transporter=modemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        })
        const mailOptions={
            from:process.env.EMAIL,
            to:"sachinkulkarni108@gmail.com",
            subject:"crypto notifcation",
            text:`price:${price},dailyPercentage:${dailyPercentage},volume:${TradingVolume}`

        }
        await transporter.sendMail(mailOptions)
        res.status(200).jsom({message:"email is sent"})
    }
    catch(error){
        res.status(500).json("error sending msg")
    }
})

app.get('/api/notifications',async(req,res)=>{
    try{
        const notification=await Notification.find()
        res.status(200).json(notification)

    }
    catch(error){
        res.status(500).json({error:error.message})
    }

})

app.delete('/api/notifications/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        await Notification.findByIdAndDelete(id)
        res.status(200).json({message:"notification deleted"})
    }
    catch(error){
        res.status(500).json({message:"error"})
    }
})


const PORT =3000
app.listen(PORT,()=>console.log("server is running"))