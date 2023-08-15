import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} =this.props;
    return (
      <>
      {/* Adding card bootstrap */}
      <div className="card" >
  <img src={imageUrl} className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
        

 
    {/* adding upper button */}

    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zindex:1}}>{source}</span>
    {/* added */}
  
    <h5 className="card-title">{title}
    
    {/* adding upper button */}

    
    {/* added */}
    
    </h5>
    <p className="card-text">
    {description}.
    </p>



    {/* adding time */}

    <p className="card-text"><small className="text-muted">By {!author? "unknown":author} on {new Date(date).toGMTString()}</small></p>
    {/* added time */}
    <a ref="noreferrer" href={newsUrl} className="btn btn-sm btn-primary">
      Read More
    </a>
  </div>
</div>

      {/* Finishing Adding card Bootstrap */}
      </>
    )
  }
}
