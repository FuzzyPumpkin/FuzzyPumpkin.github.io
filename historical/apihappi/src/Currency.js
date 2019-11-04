import React, { Component } from 'react';
import axios from "axios";

class Currency extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: "",
            usdVal: "",
            countries: [],
            notLoaded: true
        }; 
        this.handleChange = this.handleChange.bind(this);
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
                countries: response.data.results,
                notLoaded: false
            });
        });
    }

    handleChange(){
        
    }
   
    render(){
        return (
        <section className="section-currency app">
            {this.state.notLoaded ? <div></div>
                : <div className="currency__container">
                    <h2 className="currency__headline">Currency</h2>
                    <label htmlFor="amount" className="currency__from"> 
                        <input 
                            type="number" 
                            placeholder="amount" 
                            name="amount" 
                            id="amount" 
                            className="currency__fromEntry"
                            value={this.state.amount} 
                            onChange={this.handleChange}/>
                    </label>
                </div> }

        </section>
        )
    }
}



export default Currency;