import React from 'react'

const Navbar=()=>{
  return(
    <div>
    <span className="nav-link">
    <a>Home</a>
    </span>
    <span className="nav-link">
    <a>Calendar</a>
    </span>
    <span className="nav-link">
    <a>Today</a>
    </span>
    <div id="logo">
      <span className="icon">date_range</span>
      <span>
        Bullet<b>Journal</b>
      </span>

    </div>
    </div>
  )
}

export default Navbar
