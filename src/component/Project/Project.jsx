import React from 'react';
import "./Project.scss";
import { useEffect, useState } from "react";
import { styled } from '@material-ui/core';

const Project = () => {
    const [open, setOPen] = useState();
    const toggle=() => {
        setOPen(!open);
    };
    return (
        <div className='project' id="project">
            <h1 className='pji'>Some Things I've Build</h1>
            <ul className='projects-grid'>

{/* BLOG WEBSITE */}
                <li className="dIMCBf">
                    <div className="project-inner">
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
                                <a href="#">blog website</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
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
                                <a href="#">resume builder</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Web- Application project build using javascript, bootstrap, HTML, CSS
and backend technology is MySQL ,PHP where user puts their detail and can create their resume in a specific template and can also download
a pdf format.
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
                                <a href="#">weather app</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Weather forecast web -application, which provides you weather information of the city, the app is dynamically responsive also its has an adaptable UI, according to the city information</p>
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
                                <a href="#">socio launcher</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Developed an innovative Chrome-Extension package that automated the user all of their social media links, accessible to all browsers</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>json</li>
                                <li>manifest json</li>
                                <li>pjp</li>
                            </ul>
                        </footer>
                    </div>
                </li>

{/* PORTFOLIO WEBSITE */}
                <li className="dIMCBf">
                    <div className="project-inner">
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
                                <a href="#">portfolio website</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
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
                                <a href="#">MUSIC PLAYER</a>
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
                

            </ul>
        
            {open &&
           < div>
             <ul className='projects-grid'>

{/* BLOG WEBSITE */}
                <li className="dIMCBf">
                    <div className="project-inner">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
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
                                <a href="#">Visitor's Count</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
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
                                <a href="#">To-Do-list</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Web- Application project build using javascript, bootstrap, HTML, CSS
and backend technology is MySQL ,PHP where the user puts their detail and can create their resume in a specific template and can download it in
a pdf format.
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
                                <a href="#">Theme-Toggler</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Developed an innovative Chrome-Extension package that automated the user all of their social media links, accessible to all browsers</p>
                            </div>
                        </header>
                        <footer>
                            <ul className='project-tech-list'>
                                <li>json</li>
                                <li>manifest json</li>
                                <li>pjp</li>
                            </ul>
                        </footer>
                    </div>
                </li>

{/* PORTFOLIO WEBSITE */}
                {/* <li className="dIMCBf">
                    <div className="project-inner">
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
                                <a href="#">portfolio website</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
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
                </li> */}

{/* WEATHER APP */}
                {/* <li className="dIMCBf">
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
                                <a href="#">weather app</a>
                            </h3>
                            <div className="project-description">
                                <p id="j">Weather forecast web -application, which provides you weather information of the city, the app is dynamically responsive also its has an adaptable UI, according to the city information</p>
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
                </li> */}


{/* MUSIC PLAYER*/}
                {/* <li className="dIMCBf">
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
                                <a href="#">MUSIC PLAYER</a>
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
                </li> */}
                

            </ul>
            </div>
            }
              <button className="more-button" onClick={toggle}>Show {open ?'Less' : 'More'}</button>
        </div>
    )
}

export default Project;
