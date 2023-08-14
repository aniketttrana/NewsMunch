
import React, { Component } from 'react'

export class Navbar extends Component {
 

  render() {
    return (
      <>

{/* ADDING NAVbAR OF BOOTSTRAP AFTER CONVERTING IT TO HTML TO JSXz */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="./NewsMunch">
      News Munch
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      


      <li className="nav-item"  aria-current="page"><a className="nav-link" href="/about">Business</a></li>   
      <li className="nav-item"><a className="nav-link" href="/about">Entertainment</a></li>   
      <li className="nav-item"><a className="nav-link" href="/about">General</a></li>   
      <li className="nav-item"><a className="nav-link" href="/about">Health</a></li> 
      <li className="nav-item"><a className="nav-link" href="/about">Science</a></li>  
      <li className="nav-item"><a className="nav-link" href="/about">Sports</a></li> 
      <li className="nav-item"><a className="nav-link" href="/about">Technology</a></li>      
       
     </ul>
     
    </div>
  </div>
</nav>
{/* ADDING FINISHED */}

      </>
    )
  }
}

export default Navbar