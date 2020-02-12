import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Pages/HomePage/app';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './components/Pages/AboutUs/aboutus';
import Landowner from './components/Pages/Landowners/landowners'

ReactDOM.render(
  <BrowserRouter>
  <Route path='/' exact component={Home}/>
  <Route path='/aboutUs' exact component={AboutUs}/>
  <Route path='/landowner' component={Landowner}/>

  </BrowserRouter>
  , document.getElementById('root'));
