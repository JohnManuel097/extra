import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import Inventario from './Screen/Inventario';
import Cards from './components/Cards';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Inventario />
      <Cards />
    </div>
  );
}

export default App;
