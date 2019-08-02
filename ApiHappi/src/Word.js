import React, { Component } from 'react'
import axios from "axios";

class Word extends Component {
    constructor(props){
        super(props);
        this.state = {
            word: "",
            definition: ""
        };
    }
    componentDidMount(){
        const wordAPI = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=69oiygcdtzcd74aqh7fvlasp5ktfulo1i5fcou8w1v52yn9iz';
        axios.get(wordAPI).then(response => {
            this.setState({
                word: response.data.word,
                definition: response.data.definitions[0].text
            });
        });
    }
    render(){
        return (
            <section className="section-word app">
                <h2 className="word__title">Word of the Day</h2>
                <div className="word__container">                 
                    <h3 className="word__word">{this.state.word}</h3>
                    <p className="word__definition">{this.state.definition}</p>
                </div>
            </section>
        )
    }
}

export default Word;
