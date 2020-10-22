import React from 'react';
import Slider from 'infinite-react-carousel'
import Iframe  from 'react-iframe'
// import {ParticlesBg} from 'particles-bg'; Figure out why this is bugging out

const Projects = () =>{
    return (
        <div>
            <h2>My projects are everchanging.</h2>
            <p>I am big on going back and updating my work based upon <br/>
            what I have learned or am learning.</p>
            <Slider dots>

                
                <div className='carousel'>
                    <Iframe url='https://marketing-page-3.now.sh/'></Iframe>
                    <a href='https://github.com/BW-Kids-Fly-2/Marketing-Page/tree/Taja-House'>Kids Fly</a>
                </div>
                <div className='carousel'>
                    <Iframe url="https://react-redux-app-flame-sigma.vercel.app/"></Iframe>
                    <a href="https://github.com/tajahouse/React-Redux-App/tree/Taja-House">Breaking Bad API React Redux</a>
                </div>
                <div className='carousel'>
                    <Iframe url='https://react-todo-zeta-neon.vercel.app/'></Iframe>
                    <a href="https://github.com/tajahouse/React-Todo/tree/Taja-House">React-Todo</a>
                </div>
                <div className='carousel'>
                    <Iframe url='https://projects.raspberrypi.org/en/projects/?interests[]=robotics'></Iframe>
                    <a href=""></a>
                </div>
            </Slider>
        </div>
    )
}

export default Projects;