import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero.js';
import Main from './components/Main.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Content1 from './components/content1.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Nft from './components/content.js';


function Temp(){
  return (
    <div>
      <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router> 
      <Nav/>
      <Hero />
      <Main />
      <Nft/>
      <Content1/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(
  <Temp/>,
  document.getElementById('root')
);

