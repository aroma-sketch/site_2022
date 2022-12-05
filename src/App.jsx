import React from 'react';
import { useEffect, useState } from "react";

import LeftSide from './component/side_bar/left_side';
import RightSide from './component/side_bar/right_side';
import Header from "./component/Header/Header";
import Home from './component/Home/Home';
import Abt from "./component/About/Abt";
import Project from "./component/Project/Project";
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact'
import Menu from "./component/Menu/Menu";
import Exp from './component/Experience/Exp';

import './App.scss';

import {FaArrowCircleUp} from 'react-icons/fa';


const App = () => {

  const[menuOpen,setMenuOpen] =  useState(false);

   // .........................................scroll-btn........................................
  const [showButton, setShowButton] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
}, []);

// This function will scroll the window to the top 
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};
//  .........................................scroll btn ends....................................

  return (
    <div className="app">

<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <RightSide/>
       <LeftSide/>
       <main className='fill_height'>
       <div className="sections">
      
      <Home/>
      <Abt/>
      <Exp/>
      <Project/>
      <Contact/>
      <Footer/>
     

      </div>
      </main>
       {/* <p style={{marginTop:"150vh"}}>bottom</p>  */}

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaArrowCircleUp/>
        </button>
      )}

      

    </div>
  )
}

export default App;
