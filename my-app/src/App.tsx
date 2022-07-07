import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import SpaceNews from './Components/SpaceNews';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar/>
         <SpaceNews/>
      {/*<Route path='/Details:id' element={<Details/>}/>*/}
    </div>

  );
}

export default App;
