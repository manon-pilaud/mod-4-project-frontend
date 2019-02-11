import React from 'react'


export default class Notes extends React.Component{

  render(props){
    return(
        <div className="note">
          <h4>{this.props.note.name}</h4>
          <p>{this.props.note.body}</p>
        </div>
    )
  }
}
