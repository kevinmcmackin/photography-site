const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRouter = require('./routes/data');
const productRoutes = require('./routes/productRoutes');


const app = express();
const port = 5001; // You can choose any available port

app.use('/api/data', dataRouter);
app.use('/api/products', productRoutes);

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
