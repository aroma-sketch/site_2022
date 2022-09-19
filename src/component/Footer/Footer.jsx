import React from 'react'
import "./Footer.scss"
import { useEffect, useState } from "react";
import {AiOutlineEye,AiOutlineCopyrightCircle} from 'react-icons/ai';

 
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
                <p>Copyright&copy; <span> {getYear()} </span> All Rights Reserved.</p>
            </div>
            
            </div>
        </div>
    )
}

export default Footer
