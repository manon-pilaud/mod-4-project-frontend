import React from 'react'

export default class DayView extends React.Component{
  render(props){
    return(
      <div>{this.props.dayInfo.date}</div>
    )

  }
}
