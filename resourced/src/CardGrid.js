import React, { Component } from 'react';
import Card from "./Card";


class CardGrid extends Component {
    render(){
         return (
            <section className="cardgrid">
                {this.props.resources.map(r => (
                    this.props.tag === "all" ?
                        <Card 
                            id={r.id} 
                            name={r.name} 
                            siteURL={r.siteURL} 
                            imgURL={r.imgURL} 
                            description={r.description} 
                            tags={r.tags}
                            key={r.id}
                        />
                    :
                        r.tags.includes(this.props.tag) ?
                            <Card 
                                id={r.id} 
                                name={r.name} 
                                siteURL={r.siteURL} 
                                imgURL={r.imgURL} 
                                description={r.description} 
                                tags={r.tags}
                                key={r.id}
                            /> : null
                ))}
            </section>
        )
    }
}

export default CardGrid;
