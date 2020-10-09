import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import {  Route, Switch } from "react-router-dom"
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
                <Route path="/home" component={Home}/>
                <Route/>
                <Route/>
                <Route/>
      </Switch>

    </div>
  );
}

export default App;
