import React from 'react'


export default class Day extends React.Component{
  render(props){
    return(
        <div className="events">
          {this.props.dayInfo.events.map(event=>
          <p key={event.id}>{event.name}-{event.time}</p>)}
        </div>
    )
  }
}
