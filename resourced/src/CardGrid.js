import React, { Component } from 'react';
import Card from "./Card";


class CardGrid extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="cardgrid">
                {this.props.resources.map(r => (
                    <Card 
                        id={r.id} 
                        name={r.name} 
                        siteURL={r.siteURL} 
                        imgURL={r.imgURL} 
                        description={r.description} 
                        tags={r.tags}
                    />        
                ))}
            </section>
        )
    }
}

export default CardGrid;
