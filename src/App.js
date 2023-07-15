import React from 'react'
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './components/UserHome';
import Details from './components/Details';
import Help from './components/Help';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Help" element={<Help />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;