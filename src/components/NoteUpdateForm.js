import React from 'react'
import { Button, Checkbox, Form} from 'semantic-ui-react'

export default class NotesUpdateForm extends React.Component{

  constructor(){
    super()
    this.state={
      clicked: false,
      title:"",
      body:"",
      dayId: null,
      noteId: null
    }
  }

  componentDidMount(){
    this.setState({
      dayId: this.props.noteInfo.day_id,
      noteId: this.props.noteInfo.id,
      title:this.props.noteInfo.name,
      body: this.props.noteInfo.body
    })
  }

  handleNoteChange=(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    return this.props.editNote(this.state)
  }

  render(props){
    return(
      <div>

        <Form className="create-form" onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Name</label>
                  <input onChange={this.handleNoteChange} placeholder='Name' value={this.props.noteInfo.name} id="title"/>
                </Form.Field>

                <Form.Field>
                  <label>Enter Text</label>
                  <input onChange={this.handleNoteChange} placeholder='Text'value={this.props.noteInfo.body}  id="body"/>
                </Form.Field>
                <Button type='submit'>Create Note</Button>
          </Form>
      </div>
    )
  }
}
