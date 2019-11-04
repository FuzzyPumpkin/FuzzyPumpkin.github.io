import React, { Component } from 'react';
import Thumb from "./Thumb";

class Flip extends Component {
    constructor(props){
        super(props);
        this.state = {
            thumb: "up"
        }; 
        this.flip = this.flip.bind(this);
    }
    flip(){
        let randNum = Math.floor(Math.random() * 2);
        let newThumb = "";
        randNum === 0 ? newThumb = "up" : newThumb = "down";
        this.setState(curState =>({thumb: newThumb}));
    }
    render(){
        return (
        <section className="section-flip app">
            <div className="flip__container">
                <h2 className="flip__title">Decision Maker</h2>
                <div className="flip__icon-box">
                <Thumb thumb={this.state.thumb}/>
                <button className="flip__button" onClick={this.flip}>
                    <svg className="flip__icon flip__icon--dice">
                        <use xlinkHref="symbol-defs.svg#icon-dice"></use>
                    </svg>
                </button>
                </div>
            </div>
        </section>
        )
    }
}



export default Flip;