import React from 'react'

export default class Quote extends React.Component{
  constructor(){
    super()
    this.state={
      text: "",
      dayId: null
    }
  }
handleChange=(e)=>{
  this.setState({
    text: e.target.value,
    dayId: this.props.quote.id
  })
}
handleSubmit=(e)=>{
  e.preventDefault()
  return this.props.submitQuote(this.state)
}


  render(props){
    return(
        <div className="quote-div">
          {this.props.quote.quote?
          <div className="quote">
            Today's Quote: {this.props.quote.quote.phrase}.
          </div>
          :<form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} className="quote-input" placeholder="Enter Quote"></input>}
          </form>
          }
        </div>
    )
  }
}
