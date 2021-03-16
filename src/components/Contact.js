import React from 'react';
import SocialMedia from '../assets/SocialMedia';
import './styles/Contact.css'
import Water from '../assets/imgs/water.jpg'


const Contact = () =>{
    return(
        <div className='content'>
            <section className='contact'>
                    <img src={Water} alt="Water image"/>
                    <button>
                        <a href="mailto: 'ahlliahtaja@yahoo.com'">ahlliahtaja@yahoo.com</a>
                    </button>
                    <button>
                         <a href='tel:409-998-4579'>409-998-4579</a>
                    </button>

            </section>
            <section className='social'>
                <SocialMedia/>
            </section>

        </div>
    )
}

export default Contact;