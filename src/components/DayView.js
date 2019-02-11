import React from 'react'
import TaskList from './TaskList'
import EventList from './EventList'
import EventForm from './EventForm'
import TaskForm from './TaskForm'
import { Button, Checkbox, Form} from 'semantic-ui-react'

export default class DayView extends React.Component{

  render(props){
    return this.props.dayInfo?(
      <div>
        <h1 className="date-header">{this.props.dayInfo.date}</h1>
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
