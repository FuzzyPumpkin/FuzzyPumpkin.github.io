import React from 'react';

export default function Tasks(props) {
<<<<<<< HEAD
=======
    
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
>>>>>>> 4f69e5e31eba003a3df291b166125c5e89aa6723
    return (
        <div className="tasks">
            <h1>Hello</h1>
<<<<<<< HEAD
=======
            {/* {tasksDB.tasks[0].task} */}
            {/* <ul className="tasks__list">
                {tasksDB.tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul> */}
>>>>>>> 4f69e5e31eba003a3df291b166125c5e89aa6723
        </div>
    )
}
