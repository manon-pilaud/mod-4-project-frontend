import React from 'react'
import TaskCard from './TaskCard'
import {Card,Image} from 'semantic-ui-react'

export default class TaskList extends React.Component{
  render(props){
    return(
      <div>
    <Card.Group>
        {this.props.tasks.map((task,index)=>
          <TaskCard key={index} task={task}/>
          )
        }
    </Card.Group>
      </div>
    )
  }
}
