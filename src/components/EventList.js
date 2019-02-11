import React from 'react'
import EventCard from './EventCard'

export default class EventList extends React.Component{
  render(props){
    return(
      <div>
        <center>
          <h2>Events:</h2>
        </center>
        {this.props.events.map((event,index)=>
          <EventCard
            key={index} event={event}
            deleteEvent={this.props.deleteEvent}/>
          )
        }
      </div>
    )
  }
}
