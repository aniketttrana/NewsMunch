
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
 

  render() {
    return (
      <>

{/* ADDING NAVbAR OF BOOTSTRAP AFTER CONVERTING IT TO HTML TO JSXz */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="./NewsMunch">
      News Munch
    </Link>
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
      
      <li className="nav-item" ><Link className="nav-link" to="/home">Home</Link></li>   

      <li className="nav-item" ><Link className="nav-link" to="/business">Business</Link></li>   
      <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>     
      <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li> 
      <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>  
      <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li> 
      <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>      
       
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