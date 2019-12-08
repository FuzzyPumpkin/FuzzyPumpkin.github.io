import React, {useState} from 'react';
import TasksAdd from "./TasksAdd";
import TasksSearch from "./TasksSearch";

export default function Tasks(props) {
    const initialTasks = [
        {id: 1, task: "Make Task List", completed: true},
        {id: 2, task: "???", completed: false},
        {id: 3, task: "Profit!", completed: false}
    ];
    const [tasks, setTasks] = useState(initialTasks);
    return (
        <div className="tasks">
            <svg className="tasks__background">
		        <use xlinkHref="./images/symbol-defs.svg#icon-logo"></use>
	        </svg>
            <TasksAdd />
            <div className="tasks__layout">
                <div className="tasks__container">
                    <ul className="tasks__list">
                    {tasks.map(task => (
                        <li className={`tasks__item ${task.completed && 'tasks__item--completed'}`} key={task.id}>
                            {task.task}
                            <button className="tasks__item-delete">
                                <svg className="tasks__button-icon tasks__button-icon--miniTrash">
                                    <use xlinkHref="./images/symbol-defs.svg#icon-trashcan"></use>
                                </svg>
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <button className="tasks__deleteAll">
                    <svg className="tasks__button-icon tasks__button-icon--trash">
		                <use xlinkHref="./images/symbol-defs.svg#icon-trashcan"></use>
	                </svg>
                    Delete Completed
                </button>
            </div>
            <TasksSearch />
        </div>
    )
}
