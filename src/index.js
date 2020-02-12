import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Pages/HomePage/app';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './components/Pages/AboutUs/aboutus'

ReactDOM.render(
  <BrowserRouter>
  <Route path='/' exact component={Home}/>
  <Route path='/aboutUs' component={AboutUs}/>

  </BrowserRouter>
  , document.getElementById('root'));
