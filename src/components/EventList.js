import React from 'react'
import EventCard from './EventCard'

export default class EventList extends React.Component{
  render(props){
    return(
      <div>
        {this.props.events.map((event,index)=>
          <EventCard key={index} event={event}/>
          )
        }
      </div>
    )
  }
}
