import React from 'react'
import PropTypes from 'prop-types'
// import { link} from 'react-router-dom'



export default function Navbar(props) {
  return (
    <div>
         
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#bout">{props.data}</a>
      </li>
      
    </ul>
    {/* <form className="d-flex">
     
    </form> */}

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
</div>
  </div>
  </div>
</nav>
    </div>
  )
}

Navbar.prototype={title:PropTypes.string.isRequired,
                       data:PropTypes.string.isRequired}

Navbar.defaultProps ={
  title :"faizan",     data:"About"
}