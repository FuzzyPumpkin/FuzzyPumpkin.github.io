import {useEffect, useState} from 'react';
import 'firebase/database';
import 'firebase/firestore';
import {firebaseApp} from "../firebase.js";

const firebaseTasksDB = firebaseApp.firestore().collection('tasks');


export function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [tasksLoading, setTasksLoading] = useState(true);
    
    useEffect(() => {
        const tasksTemp = [];
        async function getTasks(){
            firebaseTasksDB.orderBy('id').limit(100).onSnapshot(function(snapshot) {
                snapshot.docChanges().forEach(function(change){
                    let task = change.doc.data();
                    tasksTemp.push(task);
                })
            })
        };
        getTasks();
        setTasks(tasksTemp);
<<<<<<< HEAD:organizm/src/hooks/firebaseTasks.js
        setLoading(false);
    }, [loading]);
    return {loading, tasks};  
};
=======
        setTasksLoading(false);
    }, [tasksLoading]);
    return {tasksLoading, tasks};  
};

   
  // firebaseTasks.add(initialTasks[0]); something like this to add

// see https://codelabs.developers.google.com/codelabs/firebase-web/?authuser=0#7
>>>>>>> 4f69e5e31eba003a3df291b166125c5e89aa6723:organizm/src/hooks/tasks.js
