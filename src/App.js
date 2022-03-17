import Navigation from './component/Navigation';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


export default class App extends Component {
  render() {
    return <div>
      <BrowserRouter>
        <Navigation />
          <Routes >
            
            
            
          </Routes>
      </BrowserRouter>
    </div>;
  }
}
