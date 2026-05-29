import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans">
      <Navbar />
      <ProductList />
      <h1>inside App.jsx</h1>
    </div>
  );
}

export default App;

