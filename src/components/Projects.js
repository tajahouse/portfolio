import React from 'react';

//libraries for interactive designs
import Slider from 'infinite-react-carousel';
import Iframe  from 'react-iframe';

//styling
import './styles/Projects.css';

//imgages
import familyPromise from '../assets/imgs/Screenshot_107.png';
// import {ParticlesBg} from 'particles-bg'; Figure out why this is bugging out

const Projects = () =>{
    return (
        <div>
            <h2>My projects are everchanging.</h2>
            <p>I really enjoy going back and updating my work based upon <br/>
            what I have learned or am learning. You will see some changes over time in the presented projects.</p>
                <Slider dots>

                    
                    <div className='carousel'>
                        <Iframe url='https://agitated-morse-a55b40.netlify.app/'></Iframe>
                        <h3>Github <span role='down arrow' aria-label='This is a red triangle pointing downward to point to the AirBnB github repo'>🔻</span> </h3>
                        <a href='https://github.com/AirBnBO-Taja'>AirBnB</a>
                        <p>Position: Project Lead</p>
                    </div>
                    <div className='carousel'>
                        <Iframe url="https://front-end-seven-tau.vercel.app/signin"></Iframe>
                        <h3>Github <span role='down arrow' aria-label='This is a red triangle pointing downward to point to the Pintereach github repo'>🔻</span> </h3>
                        <a href="https://github.com/BW-Pintereach-Aja/back-end">Pintereach</a>
                        <p>Position: Back-end Developer</p>
                    </div>
                    <div className='carousel'>
                        <Iframe url={familyPromise} alt='Image of user Dashboard'/>
                        <h3>Github <span role='img' aria-label='This is a red triangle pointing downward to point to the Family Promise of Spokane github repo'>🔻</span> </h3>
                        <a href="https://github.com/Lambda-School-Labs/family-promise-spokane-be-a">Family Promise of Spokane</a>
                        <p>Position: Front-end Developer</p>
                    </div>
                </Slider>
        </div>
    )
}

export default Projects;