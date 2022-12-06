import React from 'react';
import "./right_side.scss";
 import {FaInstagram,FaFacebook,FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa';
 
 

const RightSide = () => {
  return (
    <div className='rit'>
  <ul className='right-side-align connect'>
    <li><a href="https://www.linkedin.com/in/aroma-g-429595203/" target="_blank" className='hjj'><FaLinkedinIn /></a></li>
    <li><a href="https://github.com/aroma-sketch" target="_blank" className='hjj'><FaGithub/></a></li>
    <li><a href="https://twitter.com/AromaGupta" target="_blank" className='hjj'> <FaTwitter/> </a></li>
    
    <li><a href="https://www.instagram.com/_aromagupta_/" target="_blank" className='hjj'> <FaInstagram/> </a></li>
    <li><a href="https://www.facebook.com/aroma.gupta.9210" target="_blank" className='hjj'><FaFacebook/></a></li>
  </ul>
     
    </div>
  );
}

export default RightSide;
