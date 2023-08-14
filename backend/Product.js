const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,

});

module.exports = mongoose.model("product", ProductSchema);