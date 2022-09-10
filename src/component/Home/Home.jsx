import React from 'react'
import "./Home.scss";
import { useEffect , useRef } from "react";
import { init} from 'ityped';

const Home = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: [" Frontend Web-Developer 👩‍💻. ", "Web-Designer 🌈.","Engineer 🎓.", "You-tuber . " , "Gamer 🎮." ,"Digital creator 🎥."],
          });
    }, []);

    return (
        <div className="home">
           
           <div className="home" id="home">

             

             <div className="right">

             <div className="wrapper" >
                    <h2 id="halo" >Hi, my name is</h2>
                    <h1>Aroma Gupta.</h1>
                    <h4>i build things for the web ; i am independent ,creative</h4>
                    <h3><span ref={textRef}></span></h3>
                </div>

             </div>

<div className="left">
                <div className="imgcont">
                    <img  src="" alt="dp"></img> 
                    </div>
             </div>

        </div>
            {/* <span className="line1"></span> */}
        </div>
    )
}

export default Home;
