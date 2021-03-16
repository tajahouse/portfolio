import React from 'react';

import styles from 'styled-components'
import './styles/About.css'

//images
import Daughters from '../assets/imgs/Daughters.jpg';
import Husband from '../assets/imgs/Husband.jpg';
import FamilyHike from '../assets/imgs/FamilyHike.jpg';


const AboutMe = () =>{
    return (
        <div>
            <h2>Who am I?</h2>
            <p>I am a military wife and mother of 3. my initial background was in education, and later I found a love for web development. Or, to be honest, technology as a whole. My goals and aspirations are to be an example to my daughters. Today's society is full of toxicicity. Everywhere we turn there is some sort of sad or disturbing news on the media. My goal is to create settings, not only in my home, but also on the web, where people can go and get away from the negative. I mostly want to focus on this for my daughters' futures and eventially the futures of our generation. Who I am matters not for myself, but for the impressionable minds that have been placed in my care. I am someone who will put her best foot foward in anything I do in order to achieve the best possible outcome for my code, my family, and myself.
             </p>


            <section className= 'pictures'>
                <img className='girls' src={Daughters} width='200px' length = '200px' alt='Tajas Daughters'/>
                <img src={Husband} width='200px' length = '200px' alt='Tajas Husband'/>
                <img src={FamilyHike} width='200px' length = '200px' alt='Taja and Family hike'/>
             </section>
        </div>
    )
}



export default AboutMe;