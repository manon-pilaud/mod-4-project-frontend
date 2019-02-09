import React from 'react'
import TaskList from './TaskList'
import EventList from './EventList'
import EventForm from './EventForm'
import TaskForm from './TaskForm'
import { Button, Checkbox, Form} from 'semantic-ui-react'

export default class DayView extends React.Component{

  render(props){
    let {tasks,events,date} = this.props.dayInfo
    return this.props.dayInfo?(
      <div>
      <h1>{date}</h1>
      <br/>
      <EventForm handleEventSubmit={this.props.handleEventSubmit}/>
      <TaskForm handleTaskSubmit={this.props.handleTaskSubmit}/>
      <div className="card-container">
      <TaskList tasks={tasks}/>
      <br/>
        <EventList events={events}/>
      </div>
    </div>)
  :
  null

  }
}
