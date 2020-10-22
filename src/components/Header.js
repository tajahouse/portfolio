import React, { useState, useEfect, useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment'
import Clock from 'react-clock'
import './styles/Header.css'

const Header = () =>{
  //Handles date and time at the top of the page. Will consider adding a digital clock
    const [currentDate, setCurrentDate] = useState('');
    var d = new Date();
    var n = d.getHours();
    const [value, setValue] = useState('');

    useEffect(() =>{
        const date =  moment().format('YYYY-MM-DD',)
        setCurrentDate(date)

    }, []);

    useEffect(() => {
        var d = new Date();
        var n = d.getHours();
        const interval = setInterval(
          () => setValue(new Date()),
          1000
        );
        return () => {
          clearInterval(interval);
        }
      }, []);

    return (
        <div className="header-wrapper">   
            <div className= "clock-date">
                    <Clock />
                {currentDate}
            </div>
            <div className='links'>
                    <Link to="/home">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact Me</Link>  
            </div>
        </div>
    )
}

export default Header;