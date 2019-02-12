import React from 'react'

export default class Quote extends React.Component{
  constructor(){
    super()
    this.state={
      text: "",
      dayId: null,
      clicked: false,
      quoteId: null,
    }
  }
handleChange=(e)=>{
  this.setState({
    text: e.target.value,
    dayId: this.props.quote.id,
    quoteId: this.props.quote.quote.id
  })
}

handleEdit=(e)=>{
  e.preventDefault()
    return this.props.editQuote(this.state)
}

handleSubmit=(e)=>{
  e.preventDefault()
  return this.props.submitQuote(this.state)
}

handleClick=()=>{
  this.setState({
    clicked: !this.state.clicked
  })
}


  render(props){
    return(
        <div className="quote-div">
          {this.props.quote.quote?
          <div>
            {!this.state.clicked?
          <div onClick={this.handleClick} className="quote">
            Today's Quote: {this.props.quote.quote.phrase}
          </div>:<form onSubmit={this.handleEdit} ><input onChange={this.handleChange} className="quote-input"></input></form>}
          </div>
          :<form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} className="quote-input" placeholder="Enter Quote"></input>}
          </form>
          }
        </div>
    )
  }
}
