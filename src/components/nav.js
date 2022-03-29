import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../Images/ezz.jpg';

export default function Nav(){
    return(
        <header className='Header'>
            <nav className='nav'>
                <img src={logo} className="Nav-logo" />
                <a href="#" className='title'>Meta Algo</a>
                <a href="#">Metaal</a>
                <a href="#">About Us</a>
                <a href="#">Login</a>
                {/* <h3>Dynamic proj-1</h3>
                <h3>Login</h3> */}

            </nav>
        </header>
    );
}