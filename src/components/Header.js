import React, { useState, useEfect, useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';



const Header = () =>{
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() =>{
        const date =  moment().format('YYYY-MM-DD hh:mm:ss a')
        setCurrentDate(date)
    }, []);
    return (
        <div className="header-wrapper">   
            <div>
                {currentDate}
            </div>
                    <Link to="/home">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact Me</Link>  
        </div>
    )
}

export default Header;