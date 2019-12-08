import React from 'react'

export default function TasksAdd() {
    return (
        <div className="tasks__form-container">
            <form className="tasks__form">
                <svg className="tasks__button-icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-pencil"></use>
	            </svg>
                <input className="tasks__form-input" type="text"></input>
                <svg className="tasks__button-icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-calendar"></use>
	            </svg>
                <svg className="tasks__button-icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-save"></use>
	            </svg>
            </form>
        </div>
    )
}
