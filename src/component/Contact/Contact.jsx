import React from 'react'
import "./Contact.scss";
import {FiCalendar} from 'react-icons/fi';


const Contact = () => {
    return (
        <div className='contact' id="contact">
    
          <h2 className='hrd'>what's next? </h2>
            <h2 className='title'>let's work together !</h2>
          <p className='jhjk'>Got a question or a proposal or just wanna talk about a project, or just wanna hello, drop me a message! ^_~
          </p>
          {/* I'm currently Available for any design systems projects, dashboard designs or landing pages gigs. */}
          <div className="sesf">
              <a href="https://calendly.com/connect-aromagupta/30min" target="_blank" rel="noopener noreferrer" className='egng'>
                <FiCalendar/> Meet</a>
              <a href="mailto:connect.aromagupta@gmail.com" rel="noreferrer" target="_blank" className='tre'>Say hello !</a> </div>
          
        </div>
    )
}

export default Contact
