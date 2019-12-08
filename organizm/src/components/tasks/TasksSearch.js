import React from 'react'

export default function TasksSearch() {
    return (
        <div className="tasks__form-container">
            <form className="tasks__form">
                <svg className="tasks__button-icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-search"></use>
	            </svg>
                <input className="tasks__form-input" type="text"></input>
                <svg className="tasks__button-icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-alpha"></use>
	            </svg>
                <svg className="tasks__button-icon tasks__button-icon--down">
		            <use xlinkHref="./images/symbol-defs.svg#icon-down"></use>
	            </svg>
                <svg className="tasks__button-icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-calendar"></use>
	            </svg>
            </form>
        </div>
    )
}
