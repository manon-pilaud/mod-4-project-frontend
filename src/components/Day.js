import React from 'react'
import {Link} from 'react-router-dom'

export default class Day extends React.Component{
  render(props){
    //Not sure why link only works on one of the days
    return(
      <Link to={`/days/${this.props.dayInfo.id}`}>
        <div className="events">
          {this.props.dayInfo.events.map(event=>
          <h6 key={event.id}>{event.name}<br/>{event.time}</h6>)}
        </div>
      </Link>
    )
  }
}
