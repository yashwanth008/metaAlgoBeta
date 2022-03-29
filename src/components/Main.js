import React from "react";
import ReactDOM from "react-dom";
import pic from "../Images/main.png"

export default function Main(){
    return (
        <div className="Main">
            <div class="Main-caption">
                <h2>Manage your investments like the ultra-rich do</h2>
                <p>Stratzy is your virtual investment guide with no learning curve. Easy, user-friendly, and a smooth flowing interface that anyone can use.</p>
            </div>
            <img className="Main-img" src={pic} alt="CrypotMain" />
        </div>
    );
}