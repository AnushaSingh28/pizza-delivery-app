const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Pizza', pizzaSchema);
