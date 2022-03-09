import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Title from './Components/Title';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Tonquin from './Components/Tonquin';
import Blubird from './Components/Blubird';
import Cloud from './Components/Cloud';
import Viewport from './Components/Viewport';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';



function App() {



  return (
    <>
      <Nav />

      <main>
        
        <Routes>
          
          <Route path='/' exact element={<Home />}></Route>
          <Route path='tonquin-vista' exact element={<Tonquin />}></Route>
          <Route path='portfolio-site' exact element={<Portfolio />}></Route>
          <Route path='blubird' exact element={<Blubird />}></Route>
          <Route path='viewport' exact element={<Viewport />}></Route>
          <Route path='cloud-9' exact element={<Cloud />}></Route>

        </Routes>


      </main>
      <Footer />

    </>

  );
}

export default App;
