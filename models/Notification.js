const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  price: Number,
  percentageChange: Number,
  tradingVolume: Number,
  email: String,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Notification", NotificationSchema);
