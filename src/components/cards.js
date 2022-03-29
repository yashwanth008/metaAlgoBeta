import React from "react";
import ReactDOM from "react-dom";

export default function HeroCards(props){
    return (
        <div className="Hero-cards">
            {<img className="cardimage" src={props.item.img} alt=" Images" />}
            {<span>{props.item.info}</span>}
            {(props.item.coin) && <span> ({props.item.coin})</span>}
            {<span>{props.item.status}</span>}
        </div>

    );
}