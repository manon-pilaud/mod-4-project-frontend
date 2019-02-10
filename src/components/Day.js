import React from 'react'


export default class Day extends React.Component{
  render(props){
    return(
        <div className="events">
          {this.props.dayInfo.events.map(event=>
          <h6 key={event.id}>{event.name}<br/>{event.time}</h6>)}
        </div>
    )
  }
}
