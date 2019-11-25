import React from 'react';
import {useTasks} from '../hooks';

export default function Tasks(props) {
    
    const tasksDB = useTasks();
    console.log(tasksDB);
    //this doesn't seem to be functioning. May have to go to a class component with a traditional componentDidMount...
    //for some reason the task array isn't updating until after loading = false.
    //tasksLoading is not being returned as true, has to be a timing issue. Can useEffect be used here?
    if(tasksDB.tasksLoading){
        return(
            <div className="tasks" data-testid="tasks">
                <h1>Loading</h1>
            </div>
        )
    }
    return (
        <div className="tasks" data-testid="tasks">
            <h1>Hello</h1>
            {/* {tasksDB.tasks[0].task} */}
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
