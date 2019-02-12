import React from 'react'
import TaskList from './TaskList'
import EventList from './EventList'
import EventForm from './EventForm'
import TaskForm from './TaskForm'
import { Button, Checkbox, Form} from 'semantic-ui-react'
import Quote from './Quote'
import NotesList from './NotesList'
import StarRatingComponent from 'react-star-rating-component';
import WaterRatingComponent from 'react-star-rating-component';
import { Icon } from 'semantic-ui-react'
export default class DayView extends React.Component{
  constructor() {
  super();
  this.state = {
    rating: 1,
    water: 1
  };
}
componentDidMount(){
  this.setState({
    rating: this.props.dayInfo.happiness,
    water: this.props.dayInfo.water
  })
}

onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue},()=>{
    console.log(this.state.rating)
    fetch(`http://localhost:3000/days/${this.props.dayInfo.id}`,{
     method: "PATCH",
     headers:{
       "Content-Type" : "application/json",
       "Accept" : "application/json"
     },
     body: JSON.stringify({
       happiness: this.state.rating
     })
   })
 .then(response=>response.json())
  });
}

onWaterClick(nextValue, prevValue, name) {
  this.setState({water: nextValue},
    ()=>{
      fetch(`http://localhost:3000/days/${this.props.dayInfo.id}`,{
       method: "PATCH",
       headers:{
         "Content-Type" : "application/json",
         "Accept" : "application/json"
       },
       body: JSON.stringify({
         water: this.state.water
       })
     })
   .then(response=>response.json())
   .then(console.log("hi"))
    });
}

  render(props){
    return (
      <div>
        <h1 className="date-header">{this.props.dayInfo.date}</h1>
        <Quote
          quote={this.props.dayInfo}
          submitQuote={this.props.submitQuote}
          editQuote={this.props.editQuote}/>
        <br/>
        <center>
          <StarRatingComponent
               name="rate1"
               starCount={5}
               renderStarIcon={() =>  <Icon size='big' name='smile' />}
               value={this.state.rating}
               onStarClick={this.onStarClick.bind(this)}
            />
          <br/>
            <WaterRatingComponent
                 name="rate1"
                 starCount={10}
                 value={this.state.water}
                 starColor={`#1e91ff`}
                 renderStarIcon={() =>  <Icon size='large' name='tint' />}
                 onStarClick={this.onWaterClick.bind(this)}
              />

        </center>

        <br/>
        <NotesList
          notes={this.props.dayInfo}
          submitNote={this.props.submitNote}
          deleteNote={this.props.deleteNote}
          />

      <div className="task-container">
        <center>
          <h2>Tasks:</h2>
          <TaskForm
            handleTaskSubmit={this.props.handleTaskSubmit}
            dayId={this.props.dayInfo.id}/>
        </center>
        <br/>
          <TaskList
            tasks={this.props.dayInfo.tasks}
            deleteTask={this.props.deleteTask}
            />
      </div>

      <br/>

      <div className="event-container">
        <center>
          <h2>Events:</h2>
          <EventForm
            handleEventSubmit={this.props.handleEventSubmit}
            dayId={this.props.dayInfo.id}
            />
        </center>
        <br/>
        <EventList
          events={this.props.dayInfo.events}
          deleteEvent={this.props.deleteEvent}
          />
      </div>

    </div>)

  }
}
