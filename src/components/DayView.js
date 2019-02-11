import React from 'react'
import TaskList from './TaskList'
import EventList from './EventList'
import EventForm from './EventForm'
import TaskForm from './TaskForm'
import { Button, Checkbox, Form} from 'semantic-ui-react'

export default class DayView extends React.Component{
  constructor(props){
    super(props)
      if (props.dayInfo){
      this.state = {
        tasksCollection: props.dayInfo.tasks,
        eventsCollection: props.dayInfo.events
      }
      }
  }


  render(props){
    return this.props.dayInfo?(
      <div>
      <h1>{this.props.dayInfo.date}</h1>
      <br/>
      <EventForm
        handleEventSubmit={this.props.handleEventSubmit}
        dayId={this.props.dayInfo.id}
        />
      <TaskForm
        handleTaskSubmit={this.props.handleTaskSubmit}
        dayId={this.props.dayInfo.id}/>
      <div className="card-container">
      <TaskList
        tasks={this.props.dayInfo.tasks}
        deleteTask={this.props.deleteTask}
        />
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
