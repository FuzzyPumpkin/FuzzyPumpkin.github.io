import React, {useState} from 'react';

export default function Tasks(props) {
    const initialTasks = [
        {id: 1, task: "Make Task List", completed: true},
        {id: 2, task: "???", completed: false},
        {id: 3, task: "Profit!", completed: false}
    ];
    const [tasks, setTasks] = useState(initialTasks);
    return (
        <div className="tasks">
            {/* task entry component */}
            <div className="tasks__container">
                <ul className="tasks__list">
                {tasks.map(task => (
                    <li className={`tasks__item ${task.completed && 'tasks__item--completed'}`} key={task.id}>
                        {task.task}
                    </li>
                ))}
                </ul>
            </div>
            {/* search/sort component */}
        </div>
    )
}
