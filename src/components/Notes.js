import React from 'react'
import { Icon } from 'semantic-ui-react'
import NoteUpdateForm from './NoteUpdateForm'


export default class Notes extends React.Component{
  constructor(){
    super()
    this.state={
      clicked: false,
      note: ""
    }
  }

  componentDidMount(){
    this.setState({
      note:this.props.note
    })
  }

  handleClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  editNote=(editInfo)=>{
    fetch(`http://localhost:3000/notes/${editInfo.noteId}`,{
     method: "PATCH",
     headers:{
       "Content-Type" : "application/json",
       "Accept" : "application/json"
     },
     body: JSON.stringify({
       name: editInfo.title,
       body: editInfo.body
     })
   })
   .then(res=>res.json())
   .then(this.setState({
     clicked: false
   }))
   .then(editInfo=>{
     this.setState({
       note: editInfo
     })
     })
  }

  render(props){
    return(
      <div className="note">
        {!this.state.clicked?<div>
            <div>
              <h4>{this.state.note.name}:</h4>
              <p>{this.state.note.body}</p>
            </div>
              <div className="delete-update">
                <div className="icon" onClick={()=>this.props.deleteNote(this.props.note)}>delete</div>
                <Icon onClick={this.handleClick} size='small' name='sync alternate' />
            </div>
          </div>:
        <div>
          <NoteUpdateForm
            noteInfo={this.props.note}
            editNote={this.editNote}
            />
        </div>
      }
        </div>
    )
  }
}
