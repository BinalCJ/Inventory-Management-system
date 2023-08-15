import './App.css';
import React from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import AboutUs from './components/AboutUs';
import UpdateItemDetails from './components/UpdateItemDetails'
import ManageItems from './components/ManageItems'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import GeneratePDF from './components/GeneratePDF'
import Home from './components/Home';
import Footer from "./footer/footer"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <div className='components'>
        <Routes>
        <Route path = "/add" element={<AddItem/>} />
        <Route path = "/Update/:id" element={<UpdateItemDetails/>} />
        <Route path = "/ManageItems" element={<ManageItems/>} />
        <Route path = "/about" element={<AboutUs/>} />
        <Route path="/GeneratePDF" element={<GeneratePDF/>}/>
        <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

    </div>
  );
}

export default App;
