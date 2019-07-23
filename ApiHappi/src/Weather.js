import React, { Component } from 'react'
import axios from "axios";


class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityID: 3582383,
            todayMin: "",
            todayMax: "",
            tomMin: "",
            tomMax: "",
            todaySky: "",
            tomSky: ""
        };
    }
    componentDidMount(){
        const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${this.state.cityID}&APPID=80a26f17e4473520b354e9b8cedcacbd`;
        axios.get(weatherAPI).then(response => {
            this.setState({
                todayMin: response.data.list[0].main.temp_min,
                todayMax: response.data.list[0].main.temp_max,
                tomMin: response.data.list[0].weather[0].main,
                tomMax: response.data.list[0].main.temp_min,
                todaySky: response.data.list[1].main.temp_max,
                tomSky: response.data.list[1].weather[0].main
            });
        });
    }

    render(){
        
        return(
            
            <section className="section-weather app">
                <div className="weather__container">
                    <h2 className="weather__title">Weather</h2>
                    <h3 className="weather__location">
                        <svg className="weather__icon--map">
                            <use xlinkHref="symbol-defs.svg#icon-map-marker"></use>
                        </svg>
                        <span className="weather__city">Chicago, IL</span>
                    </h3>
                <div className="weather__forecast">
                    <div className="weather__today">
                        <div className="weather__col1">
                            <svg className="weather__icon">
                                <use xlinkHref="symbol-defs.svg#icon-cloudy"></use>
                            </svg>
                            <svg className="weather__therm">
                                <use xlinkHref="symbol-defs.svg#icon-thermometer-2"></use>
                            </svg>
                        </div>
                        <div className="weather__col2">
                            <p className="weather__high">65 
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                            <p className="weather__high">65 
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className="weather__tomorrow">
                        <div className="weather__col1">
                            <svg className="weather__icon">
                                <use xlinkHref="symbol-defs.svg#icon-lightning"></use>
                            </svg>
                            <svg className="weather__therm">
                                <use xlinkHref="symbol-defs.svg#icon-thermometer-2"></use>
                            </svg>
                        </div>
                        <div className="weather__col2">
                            <p className="weather__high">65 
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                            <p className="weather__high">65 
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    };
};



export default Weather;