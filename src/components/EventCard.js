import React from 'react'
import {Card} from 'semantic-ui-react'

export default class EventCard extends React.Component{
  //Need to update,delete complete
  render(props){
    return(
      <div className="card">
            <h3>{this.props.event.name}</h3>
            <p>
              Time:{this.props.event.time}
            </p>
            <p>
              Location:{this.props.event.location}
            </p>
            <input type="checkbox"></input>
        </div>
    )
  }
}



// <img src={this.props.event.image}/>
