import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NEWS MUNCH -TOP HEADLINES</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem item="mytitle" description="mydesc" />
            </div>

            <div className="col-md-4">
              <NewsItem item="mytitle" description="mydesc" />
            </div>

            <div className="col-md-4">
                {/* on medium devices it will take 4 col */}
              <NewsItem item="mytitle" description="mydesc" />
            </div>

          
          </div>
        </div>
      </>
    );
  }
}
