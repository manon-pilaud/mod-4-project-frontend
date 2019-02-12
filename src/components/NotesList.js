import React from 'react'
import Notes from './Notes'
import NoteForm from './NoteForm'

export default class NotesList extends React.Component{
  render(props){
    return(
        <div className="note-list">
          <center>
            <h2>NOTES:</h2>
          </center>
        {this.props.notes.notes.map(note=>
            <Notes key={note.id} note={note}
              deleteNote={this.props.deleteNote}/>
        )
        }
        <NoteForm
        dayId={this.props.notes.id}
        submitNote={this.props.submitNote}/>
        </div>
    )
  }
}
