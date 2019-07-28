import React, { Component } from 'react';

class NewsStory extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.article);
        return (
            <article className="news__story">
                <h3 className="news__headline">{this.props.article.title.substring(0, 60)}...</h3>
                <p className="news__story">{this.props.article.description.substring(0, 200)}... 
                    <a href={this.props.article.url} className="news__link">{this.props.article.source.name}</a></p>
            </article>
        )
    }
}

export default NewsStory;