import React from 'react';
import TasksAdd from "./TasksAdd";
import useTaskState from '../../hooks/useTaskState';

export default function Tasks(props) {
    const initialTasks = [{id: 1, task: "Use the form above to add tasks", completed: false}];
    const {tasks, addTask, removeTask, toggleTask, deleteComplete} = useTaskState(initialTasks);
    

    return (
        <div className="tasks">
            <svg className="tasks__background">
		        <use xlinkHref="./images/symbol-defs.svg#icon-logo"></use>
	        </svg>
            <TasksAdd addTask={addTask}/>
            <div className="tasks__layout">
                <div className="tasks__container">
                    <ul className="tasks__list">
                    {tasks.map(task => (
                        <li className={`tasks__item ${task.completed && 'tasks__item--completed'}`} key={task.id}>
                            <span onClick={() => toggleTask(task.id)}>{task.task}</span>
                            <span className="tasks__item--date">{task.formattedDate}</span>
                            <button className="tasks__item--delete" aria-label="Delete task" onClick={() => removeTask(task.id)}>
                                <svg className="tasks__button-icon tasks__button-icon--miniTrash">
                                    <use xlinkHref="./images/symbol-defs.svg#icon-trashcan"></use>
                                </svg>
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <button className="tasks__deleteAll" type="button" onClick={() => deleteComplete()}>
                    <svg className="tasks__button-icon tasks__button-icon--trash">
		                <use xlinkHref="./images/symbol-defs.svg#icon-trashcan"></use>
	                </svg>
                    Delete Completed
                </button>
            </div>
        </div>
    )
}
