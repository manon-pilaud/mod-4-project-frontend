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
      clickId: ""
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

  createDay=(dateObj)=>{
    this.setState({
      currentDayView: dateObj
    }, () => {
      let stringDate =  this.state.currentDayView.toString().split(" ").splice(0,4).join(" ")
      let dayInfo =this.state.days.find(day=> day.date===stringDate)
      let doesNotExist = this.state.days.find(day=>day===dayInfo)
      if (!doesNotExist){
      fetch('http://localhost:3000/days',{
        method: "POST",
        headers:{
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          date: stringDate,
          user_id:1
        })
      })
      .then(res=>res.json())
      .then(newDay=>{
        this.setState({
          days: [...this.state.days,newDay]
        })
      })
    }
    else{
      //need a way to redirect to day
      this.setState({
        clickId: dayInfo.id
      })
    }
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
        day_id: stateInfo.dayId,
        location: stateInfo.eventLocation
      })
    })
    .then(res=>res.json())
    .then(newEvent=>this.updateDayEventInfo(newEvent))
  }

  updateDayEventInfo=(newEvent)=>{
    let newDays = this.state.days.map(day=>{
      if(day.id === newEvent.day_id){
        return {...day, events:[...day.events,newEvent]}
      }
      return day
    })
    this.setState({
      days: newDays
    })
  }

  postTask=(stateTaskInfo)=>{
    fetch('http://localhost:3000/tasks',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        name: stateTaskInfo.task,
        completed:false,
        image:"",
        day_id: stateTaskInfo.dayId,
        category: "not urgent"
      })
    })
    .then(res=>res.json())
    .then(newTask=>{ this.updateDayTaskInfo(newTask)
    })
  }

  updateDayTaskInfo=(newTask)=>{
    let newDays = this.state.days.map(day=>{
      if(day.id === newTask.day_id){
        return {...day, tasks:[...day.tasks,newTask]}
      }
      return day
    })
    this.setState({
      days: newDays
    })
  }

  deleteTask=(taskObj)=>{
    fetch(`http://localhost:3000/tasks/${taskObj.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(taskObj=>{
      let copyDays = [...this.state.days]
      let dayToModify = copyDays.find(day=>day.id=== taskObj.day_id)
      let index = dayToModify.tasks.findIndex(ev=>ev.id === taskObj.id)
      dayToModify.tasks.splice(index,1)
      this.setState({
        days: copyDays
      })

    })
  }

  deleteEvent=(eventObj)=>{
    fetch(`http://localhost:3000/events/${eventObj.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(eventObj=>{
      let copyDays = [...this.state.days]
      let dayToModify = copyDays.find(day=>day.id=== eventObj.day_id)
      let index = dayToModify.events.findIndex(ev=>ev.id === eventObj.id)
      dayToModify.events.splice(index,1)
      this.setState({
        days: copyDays
      })
    })
  }

  createQuote=(newQuote)=>{
    fetch('http://localhost:3000/quotes',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        phrase: newQuote.text,
        day_id: newQuote.dayId
      })
    }).then(res=>res.json())
    .then(newQuote=>this.updateDayQuoteInfo(newQuote))
  }

  updateDayQuoteInfo=(newQuote)=>{
    let newDays = this.state.days.map(day=>{
      if(day.id === newQuote.day_id){
        return {...day, quote:newQuote}
      }
      return day
    })
    this.setState({
      days: newDays
    })
  }



  createNewNote=(newNote)=>{
    fetch('http://localhost:3000/notes',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        body: newNote.body,
        name: newNote.title,
        day_id: newNote.dayId
      })
    }).then(res=>res.json())
    .then(newNote=>{ this.updateDayNoteInfo(newNote)
    })
  }

  updateDayNoteInfo=(newNote)=>{
    let newDays = this.state.days.map(day=>{
      if(day.id === newNote.day_id){
        return {...day, notes:[...day.notes,newNote]}
      }
      return day
    })
    this.setState({
      days: newDays
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>

        <Route exact={true} path="/days/:id" render={(props)=>{
            let dayUrlId = props.match.params.id
            let dayUrlIdInt = parseInt(dayUrlId)
            let dayInfo = this.state.days.find(day => day.id === dayUrlIdInt)
            return(
              <DayView
                  dayInfo={dayInfo}
                  handleEventSubmit={this.postEvent}
                  handleTaskSubmit={this.postTask}
                  deleteTask={this.deleteTask}
                  deleteEvent={this.deleteEvent}
                  submitQuote={this.createQuote}
                  submitNote={this.createNewNote}

              />
            )
        }
      }
      />

    <Route exact={true} path="/calendar" render={()=>(
            <Calendar
                  viewDay={this.createDay}
                  mapDays={this.state.days}
            />
      )}
    />

        </main>
      </div>
    );
  }
}


export default App;
