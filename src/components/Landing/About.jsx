import React from 'react'

function About(props) {
  return (
    <div id={props.id}>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p> Mobile Friendly UI </p>
        </div>
        {/* <button className='cv-btn'>{props.button}</button> */}
    </div>
  )
}

export default About