import React, { Component } from 'react';
import logo from './logo.svg';
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import DayView from './components/DayView'
import {Route, Switch,Redirect} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentDayView: "",
      days: [],
      clickedDay: ""
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/days')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        days: data
      })
    })
  }

  viewDay=(dateObj)=>{
    this.setState({
      currentDayView: dateObj
    }, () => {
      let stringDate =  this.state.currentDayView.toString().split(" ").splice(0,4).join(" ")
      let dayInfo =this.state.days.find(day=> day.date===stringDate)
      this.setState({
        clickedDay: dayInfo
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>


          {this.state.clickedDay?
             <DayView
               dayInfo={this.state.clickedDay}
               />
             :null
          }


          <Route path="/calendar" render={()=>
              <Calendar
                viewDay={this.viewDay}
                />
              }
          />
        </main>
      </div>
    );
  }
}


export default App;
