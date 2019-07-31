// current date
    // let date = new Date();

// the hour in your current time zone
    // alert( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
    // alert( date.getUTCHours() );

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
    // alert( new Date().getTimezoneOffset() );


// getHours(), getMinutes(), getSeconds(), getMilliseconds()
import React, { Component } from 'react';

class Timezone extends Component {
    constructor(props){
        super(props);
        this.state = {
            otherZone: "EST"
        }; 
    }

    render(){
        let time = new Date();
        let hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        let amPm = time.getHours() > 12 ? "PM" : "AM";
        return (
        <section className="section-timezone app">
            <svg className="timezone__bgicon">
                <use xlinkHref="symbol-defs.svg#icon-clock-o"></use>
            </svg>
            <div className="timezone__container">
                <div className="timezone__row">
                    <h2 className="timezone__title">Time</h2>
                </div>
                <div className="timezone__column">
                    <div className="timezone__local">
                        <p><span className="timezone__time">{hour}:{minutes}</span> <span className="timezone__am-pm">{amPm}</span></p>
                        <p className="timezone__timezone">Local</p>
                    </div>
                    <div className="timezone__other">
                        <p><span className="timezone__time">12:{minutes}</span> <span className="timezone__am-pm">PM</span></p>
                        <p className="timezone__timezone">{this.state.otherZone}</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}



export default Timezone;