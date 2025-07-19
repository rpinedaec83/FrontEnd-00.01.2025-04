import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Cart from './views/Cart';
import Layout from './layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
