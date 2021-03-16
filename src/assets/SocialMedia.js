import React from 'react';
import  {SocialIcon}  from 'react-social-icons'
import '../components/styles/Contact.css'


const SocialMedia = () =>{
    return(
        <div className='icons'>
            <SocialIcon url='https://twitter.com/tajtaj91' />
            <SocialIcon url='https://www.linkedin.com/in/taja-house-090303184' />
            <SocialIcon url='https://github.com/tajahouse' />
            <SocialIcon url='https://www.twitch.tv/settings/profile'/>

        </div>
    )
}

export default SocialMedia;