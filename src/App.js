import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Desktop from './Pages/Desktop/Desktop';
import Mobile from './Pages/Mobile/Mobile';
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/DESKTOP" element={<Desktop/>} />
        <Route path="/MOBILE" element={<Mobile/>} />
     </Routes>
    </>
  );
}

export default App;
