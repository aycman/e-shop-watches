import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#d4af37] selection:text-black">
        <Navbar />
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

