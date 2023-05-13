import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/productList.js';
import Navbar from './components/navbar/navbar.js';


const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <h1>MERN Application</h1>
        <p>{data}</p>
        <ProductList />
      </div>
    </Router>
  );
};

export default App;

