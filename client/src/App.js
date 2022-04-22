import React from 'react';
import './App.css';
import Main from './pages/Main';
import AddMaterial from './pages/AddMaterial';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/add-material' element={<AddMaterial/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
