import React from 'react';

export default function DatePicker(props) {
    return (
        <div className="datepicker">
            <div className="datepicker__container">
                <p className="datepicker__chosen">
                    <span className="datepicker__chosen-dateDisplay"> 11/26/1978</span>
                    <button className="datepicker__button datepicker__button--save" aria-label="Save Date">
                        <svg className="tasks__button-icon">
                            <use xlinkHref="./images/symbol-defs.svg#icon-save"></use>
                        </svg>
                    </button>
                </p>
                <div className="datepicker__calendar">
                    <div className="datepicker__month">
                        <button className="datepicker__button" aria-label="Go Back">
                            &lt;
                        </button>
                        <span className="datepicker__monthText">Month</span>
                        <button className="datepicker__button" aria-label="Go Forward">
                            &gt;
                        </button>
                    </div>
                    <div className="datepicker__days">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
