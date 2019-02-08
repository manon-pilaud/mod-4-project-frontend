import React from 'react'

export default class TaskCard extends React.Component{
  render(props){
    return(
      <div>
        <h3>{this.props.task.name}</h3>
        <input type="checkbox"></input>
        <img src={this.props.task.image}/>
      </div>
    )
  }
}
