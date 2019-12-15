import React from 'react';
import useInputState from '../../hooks/useInputState';

export default function TasksAdd(props) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <div className="tasks__form-container">
            <form className="tasks__form" 
                onSubmit={e => {
                    e.preventDefault();
                    props.addTask(value);
                    reset();
                    }}
            >
                <button className="tasks__button">
                    <svg className="tasks__button-icon">
                        <use xlinkHref="./images/symbol-defs.svg#icon-pencil"></use>
                    </svg>
                </button>
                <input className="tasks__form-input" type="text" value={value} onChange={handleChange}></input>
                <button className="tasks__button" aria-label="Assign Date">
                    <svg className="tasks__button-icon">
                        <use xlinkHref="./images/symbol-defs.svg#icon-calendar"></use>
                    </svg>
                </button>
                <button type="submit" className="tasks__button" aria-label="Save Task">
                    <svg className="tasks__button-icon">
                        <use xlinkHref="./images/symbol-defs.svg#icon-save"></use>
                    </svg>
                </button>
            </form>
            <p className="tasks__form-datetext"></p>
        </div>
    )
}
