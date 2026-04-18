import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Flight from './Pages/Flight';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight/:id" element={<Flight />} />
      </Routes>
    </BrowserRouter>
    <Footer/>

    </div>
  )
}

export default App