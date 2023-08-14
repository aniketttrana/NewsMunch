import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
        articles: [],
        loading: false
      
    }
}
async componentDidMount(){ 
  let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=54d98c847ebd4cc19cc5efc901946097";
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles:parsedData.articles})
}




  render() {
    return (
      
        <div className="container my-3">
          <h2>NEWS MUNCH -TOP HEADLINES</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
          })}
        </div>
      </div>
    )
  }
}
