import {useEffect, useState} from 'react';
import 'firebase/database';
import 'firebase/firestore';
import {firebaseApp} from "../firebase.js";


// import moment from "moment"; when we have dates added

const firebaseTasksDB = firebaseApp.firestore().collection('tasks');

export function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true)

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
        setLoading(false);
    }, [loading]);
    console.log(tasks);
    return {loading, tasks};  
};

   
  // firebaseTasks.add(initialTasks[0]); something like this to add

// see https://codelabs.developers.google.com/codelabs/firebase-web/?authuser=0#7