import React from 'react'

import StarRating from 'react-star-rating'



class FormComponent extends React.Component {

  render() {

    return (

      <form target="_self" method="GET">
      <link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css">
        <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} />

        <button type="submit" className="btn btn-primary">Submit Rating</button>

      </form>

    );

  }

}

export default FormComponent
