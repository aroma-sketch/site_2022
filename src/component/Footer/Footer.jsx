import React from 'react'
import "./Footer.scss"
import { useEffect, useState } from "react";
import {AiOutlineEye,AiOutlineCopyrightCircle} from 'react-icons/ai';
// import {FaInstagram,FaFacebook,FaLinkedinIn,FaGithub} from 'react-icons/fa';
import {FiTwitter,FiLinkedin,FiGithub,FiFacebook,FiInstagram} from 'react-icons/fi';
 
const Footer = () => {
    const [count, setCount] = useState(null);
    useEffect(() => {
      fetch("https://api.countapi.xyz/update/aromagupta/mysite/?amount=1")
        .then((res) => res.json())
        .then((json) => setCount(json.value));
    }, []);

    let getYear= () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };

    
    return (
        <div className="footer">
<div className="center-part">
<div className='ritt'>
  <ul className='right-side-align connect'>
    <li><a href="https://www.linkedin.com/in/aroma-g-429595203/" target="_blank" className='hjj'><FiLinkedin /></a></li>
    <li><a href="https://github.com/aroma-sketch" target="_blank" className='hjj'><FiGithub/></a></li>
    <li><a href="https://twitter.com/AromaGupta" target="_blank" className='hjj'> <FiTwitter/> </a></li>
    
    <li><a href="https://www.instagram.com/_aromagupta_/" target="_blank" className='hjj'> <FiInstagram/> </a></li>
    <li><a href="https://www.facebook.com/aroma.gupta.9210" target="_blank" className='hjj'><FiFacebook/></a></li>
  </ul>
     
    </div>
        <div className="first-line">
             {/* ................Copyright area .......................*/}
            <p>Build &amp; Developed by AromaGupta</p>
        </div>
          

            <div className="second-line">
 {/* ................githubstars & fork stats ...*/}
 <span>
    <div className="ded">
 <AiOutlineEye/>
      {count && <h3> {count} </h3>} 
      </div>
 </span>
            </div>

            <div className="third-line">
                <p>designed by &amp; brittany chiang</p>
                {/* <p>Copyright&copy; <span> {getYear()} </span> All Rights Reserved.</p> */}
            </div>
            
            </div>
        </div>
    )
}

export default Footer
