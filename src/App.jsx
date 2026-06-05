import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#d4af37] selection:text-black flex flex-col">
        <Navbar />
        {/* Routing Setup */}
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
      
    </HashRouter>
  );
}

export default App;

