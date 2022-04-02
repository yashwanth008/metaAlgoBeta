import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../Images/ezz.jpg';
import Login from '../components/Login.js'
import '../App.css';
export default function Nav(){
    return(
        <header className='Header'>
            <nav className='nav'>
            

                 <img src={logo} className="Nav-logo" />
                <a href="#" className='title-nav'>Meta Algo</a> 
                <a href="#">Metaal</a>
                <a href="#">About Us</a>
                <a href="/login">Login</a> 
            </nav>
        </header>
    );
}