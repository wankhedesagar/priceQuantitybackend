const mongoose = require("mongoose");

const calculationSchema = new mongoose.Schema({
  price: Number,
  quantity: Number,
  discount: Number,
  totalAmount: Number,
  saveAmount: Number,
  totalAfterDiscount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Calculation", calculationSchema);
