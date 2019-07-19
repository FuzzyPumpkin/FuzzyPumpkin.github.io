import React, { Component } from 'react';

class Thumb extends Component {
    render(){
        return (
            <svg className="flip__icon flip__icon--thumb">
                <use xlinkHref={this.props.thumb === "up" ? "symbol-defs.svg#icon-thumbs-o-up" : 
                    "symbol-defs.svg#icon-thumbs-o-down"}>
                </use>
            </svg>
        )
    }
}



export default Thumb;