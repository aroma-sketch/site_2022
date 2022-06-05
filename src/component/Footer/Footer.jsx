import React from 'react'
import "./Footer.scss"
import { useEffect, useState } from "react";

 
const Footer = () => {

    let getYear= () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };

    
    return (
        <div className="footer">
        
            {/* ................Copyright area .......................*/}
            <p> Build &amp; Developed by AromaGupta 
            <br />
            {/* ................githubstars & fork stats .............*/}

            <br />
             Copyright &copy; <span> {getYear()} </span> All Rights Reserved.
           </p>

        
        </div>
    )
}

export default Footer
