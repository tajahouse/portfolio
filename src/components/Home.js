import React, { useState, useEffect } from 'react';
import { Fade, Bounce } from 'react-awesome-reveal'
import me from '../assets/imgs/me.jpg'



const Home = () =>{
    const pic = me
    return(
        <div>
            <Fade>
                <Bounce>
                  <h1> Taja House</h1>
                </Bounce>
            </Fade>
            <img src={me} alt="Taja" width="300px"></img>
        </div>
    )
}

export default Home;