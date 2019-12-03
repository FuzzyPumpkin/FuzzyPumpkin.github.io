import {useEffect, useState} from 'react';
import 'firebase/database';
import 'firebase/firestore';
import {firebaseApp} from "../firebase.js";

const firebaseTasksDB = firebaseApp.firestore().collection('tasks');


export function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
    return {loading, tasks};  
};
