import React, { Component } from 'react';
import Card from "./Card";

class CardGrid extends Component {
    render(){
        return (
            <section className="cardgrid">
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        )
    }
}

export default CardGrid;