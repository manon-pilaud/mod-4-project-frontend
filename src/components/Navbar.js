import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{
  return(
    <div>
    <Link to={`/`}>
      <span className="nav-link">
        Home
      </span>
    </Link>
    <Link to={`/calendar`}>
      <span className="nav-link">
        Calendar
      </span>
    </Link>
    <div id="logo">
      <span className="icon">view_list</span>
      <span>
        Bullet<b>Journal</b>
      </span>

    </div>
    </div>
  )
}

export default Navbar
