import React, { Component } from 'react';
import logo from './logo.svg';
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import DayView from './components/DayView'
import {Route, Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentDayView: ""
    }
  }

  viewDay=(dateObj)=>{
    this.setState({
      currentDayView: dateObj
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>
          <DayView date={this.state.currentDayView}/>
          <Route path="/calendar" render={()=>
              <Calendar viewDay={this.viewDay}/> 
              }
          />
        </main>
      </div>
    );
  }
}


export default App;
