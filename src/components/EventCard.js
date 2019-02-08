import React from 'react'

export default class EventCard extends React.Component{
  render(props){
    return(
      <div className="card">
        <h3>{this.props.event.name}</h3>
        <h5>Time:{this.props.event.time}</h5>
        <h5>Location:{this.props.event.location}</h5>
        <input type="checkbox"></input>
      </div>
    )
  }
}

// <img src={this.props.event.image}/>
