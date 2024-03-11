import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Add from './components/Add/Add';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Products from './components/Products/products';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const ContentContainer = styled.div`
  padding-top: 25px; 
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route path="add" element={<Add />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContentContainer>
      </Router>
    </>
  );
}

export default App;
