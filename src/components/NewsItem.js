import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let { title, description, imageurl ,newurl,author,date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageurl? "https://images.wsj.net/im-841703/social":imageurl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="badge bg-secondary"> New </span> </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By <figcaption>{!author? "Unkonw":author}</figcaption> on <mark>{(new Date(date).toLocaleDateString())}</mark></small></p>
             <a href={newurl}  target="_blank" className="btn btn -sm  btn-dark">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
