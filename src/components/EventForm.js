import React from 'react'
import { Button, Checkbox, Form} from 'semantic-ui-react'

export default class EventForm extends React.Component{

  constructor(){
    super()
      this.state={
        eventForm: false,
        eventName:"",
        eventTime:"",
        eventLocation:"",
        dayId: null
      }
  }
  componentDidMount(){
    this.setState({
      dayId: this.props.dayId
    })
  }

  handleEventClick=()=>{
    this.setState({
      eventForm: !this.state.eventForm
    })
  }

    handleEventChange=(e)=>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleEventSubmit=(e)=>{
      e.preventDefault()
      this.props.handleEventSubmit(this.state)
    }
  render(props){

    return(
      <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <button onClick={this.handleEventClick}>CreateEvent</button>
        {this.state.eventForm?
        <Form onSubmit={this.handleEventSubmit} className="create-form">
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
    </div>
    )
  }
}
