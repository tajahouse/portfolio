import React, { useState, useEffect } from 'react';
import SocialMedia from '../assets/SocialMedia'
import { Fade, Bounce } from 'react-awesome-reveal'


import me from '../assets/imgs/me.jpg'



const Home = () =>{
    const pic = me
    return(
        <div>
            <Fade>
                <Bounce>
                  <SocialMedia />
                  <h1> Taja House</h1>
                  <h2>Full Stack Web Developer</h2>
                </Bounce>
            </Fade>
            <img src={me} alt="Taja" width="300px"></img>
            {/* <ParticlesBg type='circle'/> */}
        </div>
    )
}

export default Home;