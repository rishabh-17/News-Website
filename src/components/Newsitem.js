import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,url} = this.props;
    return (
        <div className="card my-3" style={{width: "18rem",height:'34em'}}>
        <img src={url} className="card-img-top" alt="..." style={{height:'16em'}}/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,45)}...</h5>
          <p className="card-text">{description.slice(0,88)}...</p>
          <a href="/newsdetail" className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
