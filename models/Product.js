const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: String,
    imageUrl: String,
  });

  
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
  