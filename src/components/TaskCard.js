import React from 'react'
import {Card} from 'semantic-ui-react'


export default class TaskCard extends React.Component{
  render(props){
    return(

      <Card className="card">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
          <Card.Content>
            <Card.Header>{this.props.task.name}</Card.Header>
            <Card.Meta>
                <input type="checkbox"></input>
            </Card.Meta>
          </Card.Content>
        </Card>
  )
}
}

// <img src={this.props.task.image} />
