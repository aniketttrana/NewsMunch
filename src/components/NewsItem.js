import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} =this.props;
    return (
      <>
      {/* Adding card bootstrap */}
      <div className="card" >
  <img src={imageUrl} className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
    {description}.
    </p>
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
