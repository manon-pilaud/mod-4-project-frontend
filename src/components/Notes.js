import React from 'react'
import { Icon } from 'semantic-ui-react'
import NoteUpdateForm from './NoteUpdateForm'


export default class Notes extends React.Component{
  constructor(){
    super()
    this.state={
      clicked: false
    }
  }

  handleClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  editNote=()=>{
    console.log("hi")
  }
  render(props){
    return(
      <div className="note">
        {!this.state.clicked?<div>
            <div>
              <h4>{this.props.note.name}:</h4>
              <p>{this.props.note.body}</p>
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
