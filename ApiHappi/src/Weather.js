import React, { Component } from 'react'
import axios from "axios";


class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityID: 3582383,
            cityName: "",
            todayMin: "",
            todayMax: "",
            tomMin: "",
            tomMax: "",
            todaySky: "",
            tomSky: ""
        };
    }
    componentDidMount(){
        const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${this.state.cityID}&units=imperial&APPID=80a26f17e4473520b354e9b8cedcacbd`;
        axios.get(weatherAPI).then(response => {
            this.setState({
                todayMin: Math.floor(response.data.list[0].main.temp_min),
                todayMax: Math.floor(response.data.list[0].main.temp_max),
                tomMin: Math.floor(response.data.list[8].main.temp_min),
                tomMax: Math.floor(response.data.list[8].main.temp_max),
                todaySky: response.data.list[0].weather[0].main,
                tomSky: response.data.list[8].weather[0].main,
                cityName: response.data.city.name
            });
        });
    }
    weatherIcon(status){
        if(status === "Thunderstorm"){
            return "symbol-defs.svg#icon-lightning";
        } else if(status === "Drizzle" || status === "Rain"){
            return "symbol-defs.svg#icon-rainy";
        } else if(status === "Snow"){
            return "symbol-defs.svg#icon-snowy";
        } else if(status === "Clouds"){
            return "symbol-defs.svg#icon-cloudy";
        } else{
            return "symbol-defs.svg#icon-sun";
        };
    }

    render(){
        const todaySkyIcon = this.weatherIcon(this.state.todaySky);
        const tomSkyIcon = this.weatherIcon(this.state.tomSky);
        return(
            <section className="section-weather app">
                <div className="weather__container">
                    <h2 className="weather__title">Weather</h2>
                    <h3 className="weather__location">
                        <svg className="weather__icon--map">
                            <use xlinkHref="symbol-defs.svg#icon-map-marker"></use>
                        </svg>
                        <span className="weather__city">{this.state.cityName}</span>
                    </h3>
                <div className="weather__forecast">
                    <div className="weather__today">
                        <div className="weather__col1">
                            <svg className="weather__icon">
                                <use xlinkHref={todaySkyIcon}></use>
                            </svg>
                            <svg className="weather__therm">
                                <use xlinkHref="symbol-defs.svg#icon-thermometer-2"></use>
                            </svg>
                        </div>
                        <div className="weather__col2">
                            <p className="weather__high">{this.state.todayMax} 
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                            <p className="weather__high">{this.state.todayMin} 
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className="weather__tomorrow">
                        <div className="weather__col1">
                            <svg className="weather__icon">
                                <use xlinkHref={tomSkyIcon}></use>
                            </svg>
                            <svg className="weather__therm">
                                <use xlinkHref="symbol-defs.svg#icon-thermometer-2"></use>
                            </svg>
                        </div>
                        <div className="weather__col2">
                            <p className="weather__high">{this.state.tomMax}  
                                <svg className="weather__degree">
                                    <use xlinkHref="symbol-defs.svg#icon-Fahrenheit"></use>
                                </svg>
                            </p>
                            <p className="weather__high">{this.state.tomMin} 
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