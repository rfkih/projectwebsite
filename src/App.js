
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Advantages from './components/Pages/Advantages/Advantages';
import Dealernetwork from './components/Pages/Dealernetwork/Dealernetwork';
import Contact from './components/Pages/Contact/Contact';
import Signup from './components/Pages/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="advantages" element={<Advantages />}/>
          <Route path='dealernetwork' element={<Dealernetwork/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
