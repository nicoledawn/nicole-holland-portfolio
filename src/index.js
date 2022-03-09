import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ScrollToTop from './Components/ScrollToTop';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <ScrollToTop />
  <Routes>
  
    <Route path="/*" element={<App />}>
       
    </Route>
  </Routes>
    
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

