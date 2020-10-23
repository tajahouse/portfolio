import React, { useState, useEffect } from 'react';
import { Fade, Bounce } from 'react-awesome-reveal'
import './styles/Home.css'

import me from '../assets/imgs/me.jpg';
import StarfieldAnimation from 'react-starfield-animation'


const Home = () =>{
    const pic = me
    return(
        <div className="home-wrapper">
            {/* <StarfieldAnimation/> */}
            <Fade>
                <Bounce>
                  <h1> Taja House</h1>
                  <h2>Full Stack Web Developer</h2>
                </Bounce>
            </Fade>
                <img src={me} alt="Taja" className="me" width="300px" height="400px"></img>
            {/* <ParticlesBg type='circle'/> */}
        </div>
    )
}

export default Home;