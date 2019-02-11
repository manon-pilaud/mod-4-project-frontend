import React from 'react'
import Notes from './Notes'

export default class NotesList extends React.Component{

  render(props){
    return(
        <div className="note-list">
          <center>
            <h2>NOTES:</h2>
          </center>
        {this.props.notes.map(note=>
            <Notes key={note.id} note={note}/>
        )
        }

        </div>
    )
  }
}
