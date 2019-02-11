import React from 'react'


export default class Notes extends React.Component{

  render(props){
    return(
        <div className="note">
          <div>
          <h4>{this.props.note.name}</h4>
          <p>{this.props.note.body}</p>
          </div>
          <div className="delete-update">
          <div className="icon">delete</div>
          <div className="icon">update</div>
          </div>
        </div>
    )
  }
}
