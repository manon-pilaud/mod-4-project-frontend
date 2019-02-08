import React from 'react'
import {Card,Image} from 'semantic-ui-react'


export default class TaskCard extends React.Component{
  render(props){
    return(
      <div className="card">
          <h2>{this.props.task.name}</h2>
          <input type="checkbox"></input>
      </div>
  )
}
}

// <img src={this.props.task.image} />
