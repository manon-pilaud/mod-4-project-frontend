import React from 'react'

export default class DayView extends React.Component{
  render(props){
    let dateObj = this.props.date
    let dateString = dateObj.toString().split(" ").splice(0,4).join(" ")
    console.log(dateString)
    return(
      <div>{dateString}</div>
    )
  }
}
