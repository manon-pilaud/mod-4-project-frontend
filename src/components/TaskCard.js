import React from 'react'
import {Card} from 'semantic-ui-react'


export default class TaskCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      completed: props.task.completed
    }
  }

  onCheck = (event) => {
      this.setState({completed: event.target.checked},()=>{
      fetch(`http://localhost:3000/tasks/${this.props.task.id}`, {
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
            <Card.Header>{this.props.task.name}</Card.Header>
              <Card.Meta>
                  <button onClick={()=>this.props.deleteTask(this.props.task)}>X</button>
              </Card.Meta>
            <Card.Meta>
                <input type="checkbox" checked={this.state.completed} onChange={this.onCheck}></input>
            </Card.Meta>
          </Card.Content>
        </Card>
  )
}
}

// <img src={this.props.task.image} />
