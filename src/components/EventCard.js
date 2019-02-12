import React from 'react'
import {Card} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import EventUpdateForm from './EventUpdateForm'
export default class EventCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      completed: props.event.completed,
      clicked:false
    }
  }

    onCheck = (e) => {
        this.setState({completed: e.target.checked},()=>{
        fetch(`http://localhost:3000/events/${this.props.event.id}`, {
          method:"PATCH",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({completed: this.state.completed})
        })
      })
    }

    handleClick=()=>{
      this.setState({
        clicked: !this.state.clicked
      })
    }

    editEvent=(eventInfo)=>{
      console.log(eventInfo)
    }

  render(props){
    return(
      <Card className="card">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
      {!this.state.clicked?<div>
          <Card.Content>
            <div className="delete">
            <div className="icons">
              <div className="icon"
                onClick={()=>this.props.deleteEvent(this.props.event)}>delete</div>
              <Icon onClick={this.handleClick} size='small' name='sync alternate' />
            </div>
            </div>
            <Card.Header>{this.props.event.name}</Card.Header>
            <br/>
            <Card.Meta>
                Time:{this.props.event.time}
            </Card.Meta>
            <Card.Meta>
                Location:{this.props.event.location}
            </Card.Meta>
            <br/>
            <Card.Meta>
              <input type="checkbox" checked={this.state.completed} onChange={this.onCheck}></input>
            </Card.Meta>
          </Card.Content>
    </div>:<EventUpdateForm
      eventInfo={this.props.event}
      editEvent={this.editEvent}
    />}
        </Card>
    )
  }
}



// <img src={this.props.event.image}/>
