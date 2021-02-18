import React from 'react';
import Header from './components/Header'
import './App.css';
import {  Route, Switch } from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import BG from './assets/imgs/anastasia-zhenina-E4XARZNDjzI-unsplash.jpg'


var sectionStyle = {
  width: '100%',
  height: '100%%',
  backgroundImage: 'url(' + { BG } + ")"
  
}

function App() {
  return (
    <div className="App">
      <section style={ sectionStyle }></section>
      <Header/>
      <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/projects' component={Projects}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/contact" component={Contact}/>
      </Switch>

    </div>
  );
}

export default App;
