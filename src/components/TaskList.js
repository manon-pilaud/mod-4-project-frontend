import React from 'react'
import TaskCard from './TaskCard'
import {Card,Image} from 'semantic-ui-react'

export default class TaskList extends React.Component{
  render(props){
    return(
      <div>
        <center>
          <h2>Tasks:</h2>
        </center>
        {this.props.tasks.map((task,index)=>
          <TaskCard
            key={index} task={task}
            deleteTask={this.props.deleteTask}/>
          )
        }
      </div>
    )
  }
}
