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
                  <a href="mailto: 'ahlliahtaja@yahoo.com'">ahlliahtaja@yahoo.com</a>
                  <a href='tel:409-998-4579'>409-998-4579</a>


                </Bounce>
            </Fade>
            <img src={me} alt="Taja" width="300px"></img>
        </div>
    )
}

export default Home;