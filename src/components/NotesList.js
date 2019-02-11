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
            <Notes key={note.id} note={note}/>
        )
        }
        <NoteForm
        dayId={this.props.notes.id}
        submitQuote={this.props.submitQuote}/>
        </div>
    )
  }
}
