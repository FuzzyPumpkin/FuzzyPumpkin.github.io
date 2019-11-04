import React, { Component } from 'react';

class Timezone extends Component {
    constructor(props){
        super(props);
        this.state = {
            otherZone: "Eastern",
            timezoneList: {
                "Atlantic": 3,
                "Eastern": 4,
                "Central": 5,
                "Mountain": 6,
                "Pacific": 7,
                "Alaska": 8,
                "Hawaii": 9
            }
        }; 
        this.timeConversion = this.timeConversion.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    timeConversion(timezone){
        const date = new Date();
        const utcHour = date.getUTCHours();
        const utcOffset = this.state.timezoneList[timezone];
        const convHour = utcHour - utcOffset;
        if(convHour < 0){return convHour + 12} else if(convHour > 12){return convHour - 12} else{return convHour};
    }

    handleChange(){}
    render(){
        let time = new Date();
        let hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        let amPm = time.getHours() > 12 ? "PM" : "AM";

        const timezones = Object.keys(this.state.timezoneList).map(timezone => {
            return (
                <option value={timezone}>{timezone}</option>
            )
        });
        console.log(Object.keys(this.state.timezoneList));

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
                        <p><span className="timezone__time">{this.timeConversion(this.state.otherZone)}:{minutes}</span> <span className="timezone__am-pm">PM</span></p>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="otherZone">
                                {/* options are populating! but cannot click to change */}
                                <select name="otherZone" onChange={this.handleChange}>
                                    {timezones}
                                </select>
                            </label>
                            <button className="timezone__btn">
                                <svg className="timezone__btnIcon"><use xlinkHref="symbol-defs.svg#icon-check"></use></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}



export default Timezone;