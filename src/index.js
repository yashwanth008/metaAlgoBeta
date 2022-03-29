import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero.js';
import Main from './components/Main.js'
import './App.css';
import Content1 from './components/content1.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';


function Temp(){
  return (
    <div>
      <Nav/>
      <Hero />
      <Main />
      <Content1/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(
  <Temp/>,
  document.getElementById('root')
);

