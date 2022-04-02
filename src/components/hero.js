import React from "react";
import  ReactDOM  from "react-dom";
import pic from '../Images/Cover.png';


export default function Hero(){
    return (
        <div className="Hero">
            <img className = "Hero-img" src= {pic} alt="CrypotHero" />
            <div class="Hero-caption">
                <h2>Manage your investments like the ultra-rich do</h2>
                <p>Stratzy is your virtual investment guide with no learning curve. Easy, user-friendly, and a smooth flowing interface that anyone can use.</p>
            </div>
            
        </div>
    );
}