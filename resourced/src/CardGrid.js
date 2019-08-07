import React, { Component } from 'react';
import Card from "./Card";
import { logicalExpression, isTSAnyKeyword } from '@babel/types';
// import axios from 'axios'

class CardGrid extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
// Needs the backend. Which is logicalExpression, I just thought I could short-circuit it. Saving code.
    // componentDidMount(){
    //     const MongoClient = require('mongodb').MongoClient;
    //     const databaseURL = "mongodb+srv://kariminger:12mI%94Zzr%94P%2AY@resourced-bunpd.mongodb.net/test?retryWrites=true&w=majority";
    //     const client = new MongoClient(databaseURL, { useNewUrlParser: true });
    //     client.connect(err => {
    //       const collection = client.db("test").collection("devices");
    //       // perform actions on the collection object
    //       client.close();
    //     });

        // const databaseURL = "mongodb+srv://kari:12mI%94Zzr%94P%2AY@cluster0-z1udv.mongodb.net/test?retryWrites=true&w=majority";
        // axios.get(databaseURL).then(response => {
        //     console.log(response);
        //     this.setState({
        //     });
        // });
    // }
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