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

onStarClick(nextValue, prevValue, name) {
  this.setState({rating: nextValue});
}

onWaterClick(nextValue, prevValue, name) {
  this.setState({water: nextValue});
}
  render(props){
    return this.props.dayInfo?(
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
                 renderStarIcon={() =>  <Icon size='big' name='tint' />}
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
  :
  null

  }
}
