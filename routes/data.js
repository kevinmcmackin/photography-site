const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello from the backend!');
});

module.exports = router;
