import React, { Component } from 'react';
import NewsStory from "./NewsStory"
import axios from "axios";

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            article1: {},
            article2: {},
            article3: {},
            article4: {},
            article5: {},
            notLoaded: true
        }; 
    }
    componentDidMount(){
        const newsAPI = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=c1fc3b18447a4fc98ac51e8cfde98365";
        axios.get(newsAPI).then(response => {
            this.setState({
                article1: response.data.articles[0],
                article2: response.data.articles[1],
                article3: response.data.articles[2],
                article4: response.data.articles[3],
                article5: response.data.articles[4],
                notLoaded: false
            });
        });
    }
    render(){
        return (
        <section className="section-news app">
            <div className="news__container">
                <h2 className="news__title">News Headlines</h2>
                {this.state.notLoaded ? <div></div>
                    : <div className="news__all-stories">
                        <NewsStory article={this.state.article1} />
                        <NewsStory article={this.state.article2} />
                        <NewsStory article={this.state.article3} />
                    </div>
                }
                <a href="https://newsapi.org/" className="news__link">powered by NewsAPI.org</a>
            </div>
        </section>
        )
    }
}

export default News;