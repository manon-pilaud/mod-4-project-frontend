import React from 'react'

const Day=(props)=>{
    return(
        <div className="events">
          {props.dayInfo.events.map(event=>
          <p key={event.id}>{event.name}-{event.time}</p>)}
        </div>
    )
}
export default Day
