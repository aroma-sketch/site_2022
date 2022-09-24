import React from 'react'
import "./Abt.scss";
import pic from "../../Assets/pic.jpg";

const Abt = () => {
    return (
        <div className='abt' id="abt">
            <h1 className='aji'>about</h1>
            <div className="inner">
                <div className="rig">
                    <div>
                        <p>Hi! My name is Aroma Gupta and currently i am enrolled in Bachelor's Of Degree in the field of Information Technology.
                            I am in my 4th year of graduation .</p>
                        <p> i possimus cum corporis esse rem eveniet quia. Eaque voluptatum eum sint aliquam culpa eveniet pariatur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consdol! Alias omnis quisquam aut, magnam excepturi. Nam, expedita voluptates.
                            </p>

                            <p id="j">Here are a few technologies I’ve been working with recently:</p>
                            
                    </div>
                    <ul className='skill'>
                        <li>javascript(ES6+)</li>
                        <li>react</li>
                        <li>node.js</li>
                        <li>express.js</li>
                        <li>mysql</li>
                        <li>php</li>
                    </ul>
                </div>
                <div className="left">
<div className="wrapper">
    <div className="image_wrapper hh">
        
            <img src={pic} alt="dp" />
        

    </div>

</div>
                </div>
            </div>
        </div>
    )
}

export default Abt;
