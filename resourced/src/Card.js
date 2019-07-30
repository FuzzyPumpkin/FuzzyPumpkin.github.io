import React, { Component } from 'react'

class Card extends Component {
    render(){
        return (
            <article className="card">
                <div className="card-imageContainer">
                    <img src="../images/icomoon.jpg" alt="" className="card-image"/>
                </div>
                <div className="card-info">
                    <a href="www.google.com" className="card-link">Site Name</a>
                    <p className="card-blurb">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Assumenda nemo quas ea officiis dolore id. </p>
                </div>
                <div className="card-tagContainer">
                    <button className="card-tag">HTML</button>
                    <button className="card-tag">CSS</button>
                    <button className="card-tag">JavaScript</button>
                </div>
            </article>
        )
    }
}

export default Card;