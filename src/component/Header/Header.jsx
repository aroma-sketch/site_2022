import React from 'react'
import "./Header.scss"

export default function Header({ menuOpen, setMenuOpen}) {
  return (
      <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">

          <div className="left">
              {/* name-logo */}
          <a aria-current="page" 
          class="logo active" 
          tag="[object Object]"
           href="#intro">
               <span> &lt;</span>
                <span  className="logo-name">Aroma gupta</span>
                <span >/&gt;</span>
          </a>
         </div>

         <div className="right">
                 <div className="hamburger" 
               onClick={() => setMenuOpen(!menuOpen)} >
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                  </div>
         </div>


      </div>
      </div>
  );
}
