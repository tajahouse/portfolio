import React, { useState, useEfect, useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment'
import Clock from 'react-clock'


const Header = () =>{
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
            <div>
                    <Clock />
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