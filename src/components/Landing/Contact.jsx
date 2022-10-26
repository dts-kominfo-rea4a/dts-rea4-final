import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h3>Send me email</h3>
        <div className='contact-input'>
            <input type='email' placeholder='dtsmovie@gmail.com'/>
            <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default Contact