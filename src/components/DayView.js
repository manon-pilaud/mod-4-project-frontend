import React from 'react'
import TaskList from './TaskList'
import EventList from './EventList'

export default class DayView extends React.Component{
  render(props){
    let {tasks,events,date} = this.props.dayInfo
    return(
      <div>
        <h1>{date}</h1>
        Create Task:<input type="text"></input>
      <br/>
        Create Event:<input type="text"></input>
      <TaskList tasks={tasks}/>
        <EventList events={events}/>
      </div>
    )

  }
}
