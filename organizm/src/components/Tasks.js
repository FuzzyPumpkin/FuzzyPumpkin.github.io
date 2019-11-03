import React from 'react';
import Checkbox from "./Checkbox";
import {useTasks} from '../hooks';

export default function Tasks() {
    const {tasks} = useTasks("1");
    let projectName = '';


    return (
        <div className="tasks" data-testid="tasks">
            <h1 data-testid="project-name">{projectName}</h1>
            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`$task.id`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
