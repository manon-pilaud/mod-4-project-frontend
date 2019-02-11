import React from 'react'
import {Card} from 'semantic-ui-react'

export default class EventCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      completed: props.event.completed
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

  render(props){
    return(
      <Card className="card">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
          <Card.Content>
            <Card.Header>{this.props.event.name}</Card.Header>
              <Card.Meta>
                  <button id="delete-button"
                    onClick={()=>this.props.deleteEvent(this.props.event)}>X</button>
              </Card.Meta>
            <Card.Meta>
                <input type="checkbox" checked={this.state.completed} onChange={this.onCheck}></input>
            </Card.Meta>
            <Card.Meta>
                Time:{this.props.event.time}
            </Card.Meta>
            <Card.Meta>
                Location:{this.props.event.location}
            </Card.Meta>
          </Card.Content>
        </Card>
    )
  }
}



// <img src={this.props.event.image}/>
