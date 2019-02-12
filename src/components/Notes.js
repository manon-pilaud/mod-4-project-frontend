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
          <div className="icon" onClick={()=>this.props.deleteNote(this.props.note)}>delete</div>
          </div>
        </div>
    )
  }
}
