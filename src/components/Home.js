import React from 'react';
import { Fade, Bounce } from 'react-awesome-reveal'
import './styles/Home.css'

import me from '../assets/imgs/me.jpg';


const Home = () =>{
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
            <p>Welcome to my website! My name is Taja House and I am a full stack web developer. My goals are to be a big contributer to the tech industry learning inovative ways to solving world problems. I am excited to become a part of a company whose goals are just that. Take a look at the navigation bar above to learn more about me and what I can contribute! </p>
        </div>
    )
}

export default Home;