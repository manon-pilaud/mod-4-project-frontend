import React from 'react'
import TaskList from './TaskList'
import EventList from './EventList'
import { Button, Checkbox, Form} from 'semantic-ui-react'

export default class DayView extends React.Component{
  constructor(){
    super()
      this.state={
        eventForm: false,
        taskForm: false,
        task: "",
        eventName:"",
        eventTime:"",
        eventLocation:""
      }
  }

  handleEventClick=()=>{
    this.setState({
      eventForm: !this.state.eventForm
    })
  }

  handleTaskClick=()=>{
    this.setState({
      taskForm: !this.state.taskForm
    })
  }

  handleEventChange=(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleEventSubmit=(e)=>{
    e.preventDefault()
    this.props.postEvent(this.state)
  }

  handleTaskChange=(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleTaskSubmit=(e)=>{
    e.preventDefault()
    this.props.postTask(this.state.task)
  }

  render(props){
    let {tasks,events,date} = this.props.dayInfo
    return(
      <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <h1>{date}</h1>

        <button onClick={this.handleEventClick}>CreateEvent</button>
        <br/>
        {this.state.eventForm?
        <Form onSubmit={this.handleEventSubmit} className="event-form">
          <Form.Field>
            <label>Name</label>
            <input onChange={this.handleEventChange} id="eventName" placeholder='Name' />
          </Form.Field>

          <Form.Field>
            <label>Location</label>
            <input onChange={this.handleEventChange} id="eventLocation" placeholder='Location' />
          </Form.Field>

          <Form.Field>
            <label>Time</label>
            <input onChange={this.handleEventChange} id="eventTime" placeholder='time' />
          </Form.Field>

          <Button type='submit'>Submit</Button>
      </Form>:null}

      <button onClick={this.handleTaskClick}>CreateTask</button>
      <br/>

      {this.state.taskForm?
      <Form onSubmit={this.handleTaskSubmit} className="event-form">
        <Form.Field>
          <label>Name</label>
          <input onChange={this.handleTaskChange} id="task" placeholder='Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>:null}

      <br/>
      <div className="card-container">
      <TaskList tasks={tasks}/>
      <br/>
        <EventList events={events}/>
      </div>
      </div>
    )

  }
}
