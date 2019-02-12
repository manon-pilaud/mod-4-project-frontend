import React from 'react'
import { Button, Form} from 'semantic-ui-react'

export default class NotesForm extends React.Component{
  constructor(){
    super()
    this.state={
      clicked: false,
      title:"",
      body:"",
      dayId: null
    }
  }

  componentDidMount(){
    this.setState({
      dayId: this.props.dayId
    })
  }

  handleShowClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

    handleNoteChange=(e)=>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault()
      return this.props.submitNote(this.state)
    }

  render(props){
    return(
        <div>
        <button className="note-button" onClick={this.handleShowClick}>New Note</button>
        {this.state.clicked?
          <Form onSubmit={this.handleSubmit} className="create-form">
                  <Form.Field>
                    <label>Name</label>
                    <input onChange={this.handleNoteChange} placeholder='Name'  id="title"/>
                  </Form.Field>

                  <Form.Field>
                    <label>Enter Text</label>
                    <input  onChange={this.handleNoteChange} placeholder='Text'  id="body"/>
                  </Form.Field>
                  <Button type='submit'>Create Note</Button>
              </Form>:null}
        </div>
    )
  }
}
