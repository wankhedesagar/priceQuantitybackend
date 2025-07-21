const express = require("express");
const router = express.Router();
const Calculation = require("../models/Calculation");

router.post("/", async (req, res) => {
  try {
    const { price, quantity, discount } = req.body;

    if (!price || !quantity || !discount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const totalAmount = price * quantity;
    const saveAmount = (totalAmount * discount) / 100;
    const totalAfterDiscount = totalAmount - saveAmount;

    const newCalculation = new Calculation({
      price,
      quantity,
      discount,
      totalAmount,
      saveAmount,
      totalAfterDiscount,
    });

    const saved = await newCalculation.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
