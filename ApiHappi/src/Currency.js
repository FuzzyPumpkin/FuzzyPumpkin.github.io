import React, { Component } from 'react';
import axios from "axios";

class Currency extends Component {
    constructor(props){
        super(props);
        this.state = {
            usdVal: "",
            countries: []
        }; 
    }
    componentDidMount(){
        const usdAPI = "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=8cfb9c9972626e5ee092";
        const countryAPI = "https://free.currconv.com/api/v7/currencies?apiKey=8cfb9c9972626e5ee092";
        axios.get(usdAPI).then(response => {
            this.setState({
                usdVal:response.data.USD_PHP
            });
        });
        axios.get(countryAPI).then(response => {
            this.setState({
                countries: response.data.results
            });
        });
    }
   
    render(){
        return (
        <section className="section-currency app">

        </section>
        )
    }
}



export default Currency;