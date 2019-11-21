import React from 'react';
import {showTasks} from '../hooks';

export default function Tasks(props) {
    const tasks = showTasks();
    console.log(tasks); //this works
    return (
        <div className="tasks" data-testid="tasks">
            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.task}</span>
                    </li>
                ))}
                {/* this returns undefined. WHY??? Scope should be good. */}
            </ul>
        </div>
    )
}
