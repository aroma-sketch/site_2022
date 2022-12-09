import React from 'react'
import "./Abt.scss";
import pic from "../../Assets/pic.jpg";

const Abt = () => {
    return (
        <div className='abt' id="abt">
            <h1 className='aji'>about me</h1>
            <div className="inner">
                <div className="rig">
                    <div>
                        <p>Hi! My name is Aroma Gupta and currently, I am enrolled in Bachelor's Degree. I am a <span id="highlight">fourth-year student </span> studying <span id ="highlight">Information Technology</span>at<span  id="highlight"> D.Y Patil College Of Engineering,Pune</span>.</p>
                        <p>I'm a passionate, hardworking coder with a penchant for development.
                        </p>
                        <p>I have experience developing and designing software for the web, from simple landing pages to progressive web.<br /> I strive to create software that not only functions efficiently under the hood but also provides intuitive, pixel-perfect user experiences.</p>
                           <p>I love learning new and better ways to <span id="highlight">create seamless user experiences</span>  with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always <span id='highlight'> looking for opportunities</span> to work with those who are willing to share their knowledge as much as I want to learn.</p>
                            <p id="j">Here are a few technologies I’ve been working with recently:</p>
                            
                    </div>
                    <ul className='skill'>
                        <li>javascript(ES6+)</li>
                        <li>react.js</li>
                        <li>node.js</li>
                        <li>express.js</li>
                        <li>mysql</li>
                        <li>sql</li>
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
