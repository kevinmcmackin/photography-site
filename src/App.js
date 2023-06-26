import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import Contact from './components/Contact/contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const [data, setData] = useState('');
  const [contactOpen, setContactOpen] = useState(false);

  const toggleContactOpen = () => {
    setContactOpen(!contactOpen);
  };

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
        <Navbar toggleContactOpen={toggleContactOpen} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        {contactOpen && (
          <div className='overlay'>
            <Contact toggleContactOpen={toggleContactOpen} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;

