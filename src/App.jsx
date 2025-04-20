// import { useState } from "react";
import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Main from './pages/Main'

function App() {
 
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
