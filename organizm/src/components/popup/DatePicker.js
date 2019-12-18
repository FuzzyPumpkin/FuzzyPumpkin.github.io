import React, {useState} from 'react';



export default function DatePicker(props) {
    let currDate = new Date();
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth() + 1;
    let currYear = currDate.getFullYear(); 
    const [chosenDate, setChosenDate] = useState({month: currMonth, day: currDay, year: currYear});

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
    
    return (
        <div className="datepicker">
            <div className="datepicker__container">
                <p className="datepicker__chosen">
                    <span className="datepicker__chosen-dateDisplay"> {chosenDate.month}/{chosenDate.day}/{chosenDate.year}</span>
                    <button className="datepicker__button datepicker__button--save" aria-label="Save Date" onClick={() => props.updTaskDate(chosenDate)}>
                        <svg className="tasks__button-icon">
                            <use xlinkHref="./images/symbol-defs.svg#icon-save"></use>
                        </svg>
                    </button>
                </p>
                <div className="datepicker__calendar">
                    <div className="datepicker__month">
                        <button className="datepicker__button" aria-label="Go Back" onClick={dateBack}>
                            &lt;
                        </button>
                        <span className="datepicker__monthText">{monthNames[chosenDate.month - 1]}</span>
                        <button className="datepicker__button" aria-label="Go Forward" onClick={dateForward}>
                            &gt;
                        </button>
                    </div>
                    <div className="datepicker__days">
                        <div className="datepicker__day">1</div>
                        <div className="datepicker__day">2</div>
                        <div className="datepicker__day">3</div>
                        <div className="datepicker__day">4</div>
                        <div className="datepicker__day">5</div>
                        <div className="datepicker__day">6</div>
                        <div className="datepicker__day">7</div>
                        <div className="datepicker__day">1</div>
                        <div className="datepicker__day">2</div>
                        <div className="datepicker__day">3</div>
                        <div className="datepicker__day">4</div>
                        <div className="datepicker__day">5</div>
                        <div className="datepicker__day">6</div>
                        <div className="datepicker__day">7</div>
                        <div className="datepicker__day">1</div>
                        <div className="datepicker__day">2</div>
                        <div className="datepicker__day">3</div>
                        <div className="datepicker__day">4</div>
                        <div className="datepicker__day">5</div>
                        <div className="datepicker__day">6</div>
                        <div className="datepicker__day">7</div>
                        <div className="datepicker__day">1</div>
                        <div className="datepicker__day">2</div>
                        <div className="datepicker__day">3</div>
                        <div className="datepicker__day">4</div>
                        <div className="datepicker__day">5</div>
                        <div className="datepicker__day">6</div>
                        <div className="datepicker__day">7</div>
                        <div className="datepicker__day">1</div>
                        <div className="datepicker__day">2</div>
                        <div className="datepicker__day">3</div>
                        <div className="datepicker__day">4</div>
                        <div className="datepicker__day">5</div>
                        <div className="datepicker__day">6</div>
                        <div className="datepicker__day">7</div>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
