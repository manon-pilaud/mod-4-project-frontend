import React from 'react'
import {Form,Button} from 'semantic-ui-react'

export default class EventUpdateForm extends React.Component{
    constructor(){
      super()
      this.state={
        name:"",
        time:"",
        location:"",
        eventId: null
      }
    }

    componentDidMount(){
      this.setState({
        eventId: this.props.eventInfo.id,
        name: this.props.eventInfo.name,
        time: this.props.eventInfo.time,
        location: this.props.eventInfo.location,
      })
    }

    handleEventChange=(e)=>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault()
      return this.props.editEvent(this.state)
    }

  render(props){
    return(
      <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>

        <Form onSubmit={this.handleSubmit}className="create-form">
          <Form.Field>
            <label>Name</label>
            <input  onChange={this.handleEventChange} id="name" value={this.state.name} placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input  onChange={this.handleEventChange} id="location" value={this.state.location} placeholder='Location' />
          </Form.Field>

          <Form.Field>
            <label>Time</label>
            <input  onChange={this.handleEventChange} id="time" placeholder='time'value={this.state.time} />
          </Form.Field>

          <Button type='submit'>Edit Event</Button>
      </Form>
      </div>
    )
  }
}
