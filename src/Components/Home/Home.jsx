import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'

const Home = () => {

    const [state, setState] = useState({
        title: "Hey!",
        titleTwo: "I'm",
        titleThree: "Arturo"
    })


  return (
    <div className="about">
        <div className="about_container">
            <h2>
                <div className='title'>{state.title}</div>
                <div className='titleTwo'>{state.titleTwo}</div>
                <div className='titleThree'>{state.titleThree}</div>
            </h2>
            <div className='text'>
                <Typewriter
                options={{ 
                autoStart: true,
                loop: true,
                delay: 40,
                strings:[
                "I'm a Web Developer",
                "I'm a Tech Enthusiast",
                "I'm a Videogamer"
                 ]
                 }}
                />
            </div>
        </div>
        <div className="about_desc">
            <h2>About me</h2>
            <p className='p1'>Hard working, quick learner and <span> Proactive.</span></p>
            <p className="p2"> Highly <span>motivated,</span>  <span> adaptable</span> to new technologies and enviroments.</p>
            <p className="p3">Excellent management skills with a focus on <span> teamwork</span> and ongoing learning.</p>
        </div>
    </div>
  )
}

export default Home