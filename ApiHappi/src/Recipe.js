import React, { Component } from 'react'
import axios from "axios";

// https://www.food2fork.com/api/get?key=cf84275fc95108a351fb7c5035b53ba7&rId=35382
// ID 700 - 5000 safe
// do something with date to determine number


class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            linkUrl: "",
            imgURL: "",
            name: "",
            sourceName: "",
            id: 35382
        };
    }
    componentDidMount(){
        const recipeAPI = `https://www.food2fork.com/api/get?key=cf84275fc95108a351fb7c5035b53ba7&rId=${this.state.id}`;
        axios.get(recipeAPI).then(response => {
            console.log(response.data);
            this.setState({
                linkUrl: response.data.recipe.source_url,
                imgURL: response.data.recipe.image_url,
                name: response.data.recipe.title,
                sourceName: response.data.recipe.publisher
            });
        });
    }


    render(){
        return (
            <section className="section-recipe app">
                <div className="recipe__container">
                    <h2 className="recipe__headline">Recipe of the Day</h2>
                    <p>{this.state.name}</p>
                    <img className="recipe__image" src={this.state.imgURL} alt={this.state.name}/>
                    <p>Source: <a href={this.state.linkUrl}>{this.state.sourceName}</a></p>
                </div>

            </section>
        )
    }
}

export default Recipe;