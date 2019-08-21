import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render(){
        return (
            <article className="card">
                <div className="card-imageContainer">
                    {this.props.imgURL.length === 0 ? 
                        <img src="./images/noimage.jpg" 
                         alt={this.props.name} className="card-image"/> :
                         <img src={this.props.imgURL} alt={this.props.name} className="card-image"/>
                    }
                </div>
                <div className="card-info">
                    <a href={this.props.siteURL} className="card-link">{this.props.name}</a>
                    <p className="card-blurb">{this.props.description}</p>
                </div>
                <div className="card-tagContainer">
                    {this.props.tags.map(tag => (
                        <Link exact to={`/${tag}`} className="card-tag" key={tag}>{tag}</Link>       
                    ))}
                </div>
            </article>
        )
    }
}

export default Card;