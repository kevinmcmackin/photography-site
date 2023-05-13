const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Create a new product
  router.post('/', async (req, res) => {
    try {
      const { name, price, description, imageUrl } = req.body;
      const product = new Product({ name, price, description, imageUrl });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Update a product
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, description, imageUrl } = req.body;
      const product = await Product.findByIdAndUpdate(
        id,
        { name, price, description, imageUrl },
        { new: true }
      );
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Delete a product
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndRemove(id);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  