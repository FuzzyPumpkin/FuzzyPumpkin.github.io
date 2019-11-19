import React from 'react';
import {useTasks} from '../hooks';

export default function Tasks() {
    // const {tasks} = useTasks("12345");

    return (
        <div className="tasks" data-testid="tasks">
            {/* <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`$task.id`}>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul> */}
            {useTasks("12345")}
        </div>
    )
}
