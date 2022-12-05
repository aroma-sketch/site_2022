import "./Menu.scss";
import React from "react";

export default function Menu({ menuOpen, setMenuOpen}){
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                
                <li onClick={() =>setMenuOpen(false)}> 
                <span id="halo">01.</span> 
                     <a href="#abt">About</a>
                </li >           
                <li onClick={() =>setMenuOpen(false)}>
                     <span id="halo">02.</span>
                     <a href="#exp">Experience</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <span id="halo">03.</span>
                      <a href="#project">Work</a>
                </li >
                <li onClick={() =>setMenuOpen(false)}>
                    <span id="halo">04.</span>
                     <a href="#contact">Contact</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                     <a href="https://drive.google.com/file/d/172SEg7C1qodLcT9tOCqTAKYPiCafCvdf/view?usp=sharing" target="_blank" ><button>Resume</button> </a>
                </li>
            </ul>
        </div>
    );
}

