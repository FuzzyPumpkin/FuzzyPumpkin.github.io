import React from 'react';
import {useTasks} from '../hooks';

export default function Tasks(props) {
    const tasksDB = useTasks();

    return (
        <div className="tasks" data-testid="tasks">
            <h1>Hello</h1>
            {/* <ul className="tasks__list">
                {tasksDB.tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
