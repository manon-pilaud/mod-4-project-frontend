import React from 'react'
import { Button, Form} from 'semantic-ui-react'

export default class EventForm extends React.Component{
  constructor(){
    super()
      this.state={
        taskForm: false,
        task: "",
        dayId: null
      }
  }
  componentDidMount(){
    this.setState({
      dayId: this.props.dayId
    })
  }
  handleTaskClick=()=>{
    this.setState({
      taskForm: !this.state.taskForm
    })
  }


  handleTaskChange=(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleTaskSubmit=(e)=>{
    e.preventDefault()
    this.props.handleTaskSubmit(this.state)
  }
  render(){
    return(
      <div>
      <button onClick={this.handleTaskClick}>CreateTask</button>
      <br/>

      {this.state.taskForm?
      <Form onSubmit={this.handleTaskSubmit} className="create-form">
        <Form.Field>
          <label>Name</label>
          <input onChange={this.handleTaskChange} id="task" placeholder='Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>:null}
      </div>
    )
  }

}
