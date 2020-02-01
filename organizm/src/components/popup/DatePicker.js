import React, {useState} from 'react';
import uuid from "uuid";


export default function DatePicker(props) {
    let currDate = new Date();
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth() + 1;
    let currYear = currDate.getFullYear(); 
    const [chosenDate, setChosenDate] = useState({month: currMonth, day: currDay, year: currYear});

    const monthNames = [{month: "January", days: 31},
                        {month: "February", days: 28},
                        {month: "March", days: 31},
                        {month: "April", days: 31},
                        {month: "May", days: 31},
                        {month: "June", days: 30},
                        {month: "July", days: 31},
                        {month: "August", days: 31},
                        {month: "September", days: 30},
                        {month: "October", days: 31},
                        {month: "November", days: 30},
                        {month: "December", days: 31}];
    const chooseDate = (date) => {
        const month = chosenDate.month;
        const year = chosenDate.year;
        setChosenDate({month: month, day: date, year: year});
    }
    const dateBack = () => {
        const lastMonth = chosenDate.month === 1 ? 12 : chosenDate.month - 1;
        const day = chosenDate.day;
        const year = lastMonth === 12 ? chosenDate.year - 1 : chosenDate.year;
        setChosenDate({month: lastMonth, day: day, year: year});
    }

    const dateForward = () => {
        const nextMonth = chosenDate.month === 12 ? 1 : chosenDate.month + 1;
        const day = chosenDate.day;
        const year = nextMonth === 1 ? chosenDate.year + 1 : chosenDate.year;
        setChosenDate({month: nextMonth, day: day, year: year});
    }

    const calendarDates = () => {
        let dates = [];
        let numDays = chosenDate.month === 2 && chosenDate.year % 4 === 0 ? 29 : monthNames[chosenDate.month - 1].days;
        for( let i = 1; i <= numDays; i++){
            dates.push(i);
        }
        return dates;
    }
    const blankDates = () => {
        let blanks = [];
        let dateName = `${chosenDate.month} 1, ${chosenDate.year}`;
        let day = new Date(dateName).getDay();
        if(day !== 0){
            for( let i = 0; i < day; i++){
                blanks.push(i);
            }
        }
        return blanks;
    }
    
    return (
        <div className="datepicker">
            <div className="datepicker__container">
                <p className="datepicker__chosen">
                    <span className="datepicker__chosen-dateDisplay"> {chosenDate.month}/{chosenDate.day}/{chosenDate.year}</span>
                    <button type="button" className="datepicker__button datepicker__button--save" aria-label="Save Date" onClick={() => props.updTaskDate(chosenDate)}>
                        <svg className="tasks__button-icon">
                            <use xlinkHref="./images/symbol-defs.svg#icon-save"></use>
                        </svg>
                    </button>
                    <button type="button" 
                        className="datepicker__button datepicker__button--close" 
                        aria-label="Close Date Picker" 
                        onClick={() => props.showPicker(false)}>X</button>
                </p>
                <div className="datepicker__calendar">
                    <div className="datepicker__month">
                        <button type="button" className="datepicker__button" aria-label="Go Back" onClick={dateBack}>
                            &lt;
                        </button>
                        <span className="datepicker__monthText">{monthNames[chosenDate.month - 1].month}</span>
                        <button type="button" className="datepicker__button" aria-label="Go Forward" onClick={dateForward}>
                            &gt;
                        </button>
                    </div>
                    <div className="datepicker__days">
                        {blankDates().map(date => (
                            <div className="datepicker__day" key={uuid()}></div>
                        ))}
                        {calendarDates().map(date => (
                                <div className="datepicker__day" key={date} onClick={() => chooseDate(date)}>{date}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
