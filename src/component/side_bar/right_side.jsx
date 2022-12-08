import React from 'react';
import "./right_side.scss";
//  import {FaInstagram,FaFacebook,FaLinkedinIn,FaGithub} from 'react-icons/fa';
 import {FiTwitter,FiLinkedin,FiGithub,FiFacebook,FiInstagram} from 'react-icons/fi';
 
 

const RightSide = () => {
  return (
    <div className='rit'>
  <ul className='right-side-align connect'>
    <li><a href="https://www.linkedin.com/in/aroma-g-429595203/" target="_blank" className='hjj'><FiLinkedin /></a></li>
    <li><a href="https://github.com/aroma-sketch" target="_blank" className='hjj'><FiGithub/></a></li>
    <li><a href="https://twitter.com/AromaGupta" target="_blank" className='hjj'> <FiTwitter/> </a></li>
    
    <li><a href="https://www.instagram.com/_aromagupta_/" target="_blank" className='hjj'> <FiInstagram/> </a></li>
    <li><a href="https://www.facebook.com/aroma.gupta.9210" target="_blank" className='hjj'><FiFacebook/></a></li>
  </ul>
     
    </div>
  );
}

export default RightSide;
