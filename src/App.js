
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux'

import Home from './components/Pages/Home/Home';
import Advantages from './components/Pages/Advantages/Advantages';
import Dealernetwork from './components/Pages/Dealernetwork/Dealernetwork';
import Contact from './components/Pages/Contact/Contact';
import Signup from './components/Pages/Signup/Signup';
import Login from './components/Pages/Login/Login';
import { keepLoginAction} from "./store/actions"


function App() {
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false)
  const dispatch = useDispatch();

  useEffect(() =>{
    const userLocalStorage = localStorage.getItem("userData");
    if(userLocalStorage){
        const userData = JSON.parse(userLocalStorage)

        const {id, username, role} = userData
    
        keepLoginAction({dispatch, id, username, role})
    }

    setIsLocalStorageChecked(true);
  }, [])

  if (isLocalStorageChecked) {

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
            <Route path='login' element={<Login/>}/>
          </Routes>
        </Router>
        
      </div>
    );
    
  } else {
    return <h1>Loading ...</h1>
  }

 
}

export default App;
