import React from 'react'

const Quote=(props)=>{
    return(
        <div className="quote-div">
          <div className="quote">
            Today's Quote: {props.quote.quote}.
          </div>
        </div>
    )
}

export default Quote
