const mongoose=require("mongoose")

const notificationSchema=new mongoose.Schema({
    price:Number,
    dailyPercentage:Number,
    TradingVolume:Number,
    email:String,
    status:{type:String,default:"Pending"}
})

module.export =mongoose.model("Notification",notificationSchema)