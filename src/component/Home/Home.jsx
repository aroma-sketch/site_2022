import React from 'react'
import "./Home.scss";
import { useEffect , useRef } from "react";
import { init} from 'ityped';
import pic from "../../Assets/pic.jpg";

const Home = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: [" Frontend Web-Developer 👩‍💻. ", "Web-Designer 🌈.","Engineer 🎓.", "You-tuber  " , "Gamer 🎮." ,"Digital creator 🎥."],
          });
    }, []);

    return (
        // <div className="home">
           
           <div className="home" id="home">
             {/* <div className="right"> */}

             <div> <h2 id="haloo" >Hi, my name is</h2></div>
           <div> <h1 className='big_heading'>paloma Gupta.</h1></div> 
                <div> <h4 className='big_headingg'>I build things for the web.</h4></div>
                <div><p >I'm independent ,creative ,self-motivated Developer currently in 4th year of graduation ,i'm passionate about </p></div>
                <div> <h3><span ref={textRef}></span></h3></div>
                   
                   
        

             {/* </div> */}

{/* <div className="left">
                <div className="imgcont">
                    <img  src={pic} alt="dp"></img> 
                    </div>
             </div> */}

        {/* </div> */}
            {/* <span className="line1"></span> */}
        </div>
    )
}

export default Home;
