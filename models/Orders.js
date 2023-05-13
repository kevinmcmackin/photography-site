const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    customerName: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  });
  
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
