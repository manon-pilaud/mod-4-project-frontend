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
  postEvent=(stateInfo)=>{
    fetch('http://localhost:3000/events',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        time: stateInfo.eventTime,
        name: stateInfo.eventName,
        completed:false,
        image:"",
        day_id: this.state.clickedDay.id,
        location: stateInfo.eventLocation
      })
    })
    .then(res=>res.json())
  }

  postTask=(stateTaskInfo)=>{
    fetch('http://localhost:3000/tasks',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        name: stateTaskInfo,
        completed:false,
        image:"",
        day_id: this.state.clickedDay.id,
        category: "not urgent"
      })
    })
    .then(res=>res.json())
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>

      {this.state.clickedDay?
        <Route path="/days" render={()=>(
            <DayView
                dayInfo={this.state.clickedDay}
                postEvent={this.postEvent}
                postTask={this.postTask}
            />
               )}
        />:
      null}

      <Route path="/calendar" render={()=>(
            this.state.clickedDay?(
                <Redirect to="/days"/>
            ):(
                <Calendar
                  viewDay={this.viewDay}
                  mapDays={this.state.days}
                  />
              )
          )}
        />
        </main>
      </div>
    );
  }
}


export default App;
