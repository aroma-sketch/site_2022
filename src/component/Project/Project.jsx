import React from 'react';
import "./Project.scss";
import { useEffect, useState } from "react";
import { styled } from '@material-ui/core';
import pic from "../../Assets/pic.jpg";

const Project = () => {
    const [open, setOPen] = useState();
    const toggle=() => {
        setOPen(!open);
    };
    return (
        <div className='project' id="project">
            <h1 className='pji'>Some Things I've Build</h1>
            <ul className='projects-grid'>
{/* ARDUINO ROBOT */}
                <li className="dIMCBf">
                    <div className="project-inner">
                    {/* <div className='project-image'>
                        <div className="image-wrapper">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={pic} alt="image " />
                            </a>
                        
                        </div>
                        </div> */}
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">landmine detecting arduino robot</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Arduino-based controlled car, using Arduino Uno-3, L298N light driver module board with ultrasonic sensors to perceive the surroundings and act wisely.</p>
                                {/* <p>This project is designed as a robotic vehicle for remote operation. This kind of robot can be helpful for mobility aid for elderly and also for military purpose.</p> */}
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>arduino Uno-3</li>
                                <li>c++</li>
                                <li>sensors</li>
                            </ul>
                        </footer>
                    </div>
                  
                </li>

{/* BLOG WEBSITE */}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="#project">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="#project">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">blog website</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">A backend web application builds using Node.js with Express.js framework, where one can post its blog to the world.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>node.js</li>
                                <li>Express.js</li>
                               
                            </ul>
                        </footer>
                    </div>
                </li>

{/* RESUME BUILDER */}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/resume_builder-js">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="https://aroma-sketch.github.io/resume_builder-js/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">resume builder</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Web- Application project build using javascript, bootstrap, HTML, CSS
and backend technology is MySQL, PHP where the user puts their detail and can create their resume in a specific template and can also download
a pdf format.
</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>html</li>
                                <li>css</li>
                                <li>jquery</li>
                                <li>javascript</li>
                            </ul>
                        </footer>
                    </div>
                </li>

{/* WEATHER APP */}
<li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/Weather-app">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="https://aroma-weatherweb.netlify.app/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">weather app</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Weather forecast web -an application, which provides you with weather information about the city, the app is dynamically responsive also its has an adaptable UI, according to the city information.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                                <li>api fetching</li>
                            </ul>
                        </footer>
                    </div>
                </li>

{/* SOCIO LAUNCHER */}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/Socio-launcher">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    {/* <a class="external" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a> */}
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">socio launcher</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Developed an innovative Chrome-Extension package that automated the user all of their social media links, accessible to all browsers</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>javascript</li>
                                <li>manifest json</li>
                                
                            </ul>
                        </footer>
                    </div>
                </li>
                
{/* PORTFOLIO WEBSITE 2 */}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/site_2022">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="#home">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">personal website</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Second integration of my portfolio website built with react.js and hosted on netlify.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>react.js</li>
                                <li>javascript</li>
                                <li>sass</li>
                            </ul>
                        </footer>
                    </div>
                </li>

                
            </ul>
        

            {open &&
           < div>
             <ul className='projects-grid'>
{/* PORTFOLIO WEBSITE 1 */}
<li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/website_repo">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="https://guptaaromav3.netlify.app/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">portfolio  website</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">A portfolio website built with the help of HTML, CSS,SASS, JavaScript, Bootstrap, react.js, material-UI,framer-motion, and additional react libraries.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>react.js</li>
                                <li>javascript</li>
                                <li>sass</li>
                            </ul>
                        </footer>
                    </div>
                </li>
                
{/* MUSIC PLAYER*/}
<li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/music_player">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="https://aroma-musicplayer.netlify.app/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">MUSIC PLAYER</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Building a custom using simple javascript ,html ,css created a MUSIC-PLAYER</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>pjp</li>
                                <li>pjp</li>
                                <li>pjp</li>
                            </ul>
                        </footer>
                    </div>
                </li>
{/* visitor count*/}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/Visitors-count-">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    </a>
                                    <a class="external" href="https://aroma-sketch.github.io/Visitors-count-/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">Visitor's Count</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">created a counterApi for a website</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>node.js</li>
                                <li>Express.js</li>
                               
                            </ul>
                        </footer>
                    </div>
                </li>

{/* to do list */}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/To-do-list-app">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="https://aroma-todolist.netlify.app/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">To-Do-list</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">a beautifully styled to-do-list app using react library
</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                            </ul>
                        </footer>
                    </div>
                </li>
                
{/* theme toggler */}
<li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/aroma-sketch/theme-toggler">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a class="external" href="https://aroma-sketch.github.io/theme-toggler/">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                      stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg> 

                                        </a>
                              
                                </div>
                            </div>
                            <h3 className='project-title'>
                                <a href="#project">Theme toggler</a>
                            </h3>
                            <div className="project-description">
                                <p id="j"> A theme switcher functionality for any website</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                            </ul>
                        </footer>
                    </div>
                </li>
 

            </ul>
            </div>
            }
              <button className="more-button" onClick={toggle}>Show {open ?'Less' : 'More'}</button>
        </div>
    )
}

export default Project;
