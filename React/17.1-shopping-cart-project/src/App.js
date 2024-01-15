import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductItem from './pages/ProductItem'

function App() {

  return (
    <div className=" h-full min-h-[100vh]">
        <div className=' bg-slate-900'>
            <NavBar />
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/product/:pid' element={<ProductItem/>}/>
        </Routes>
    </div>
  );
}

export default App;
