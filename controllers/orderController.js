const Order = require('../models/Order'); // Ensure this path matches the folder structure

const createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  res.json(order);
};

module.exports = { createOrder, updateOrderStatus };
