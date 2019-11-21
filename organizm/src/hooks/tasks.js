import React from 'react';
import 'firebase/database';
import 'firebase/firestore';
import {firebaseApp} from "../firebase.js";


// import moment from "moment"; when we have dates added

const firebaseTasksDB = firebaseApp.firestore().collection('tasks');

export function showTasks(){
    const firebaseTasks = firebaseTasksDB.orderBy('id').limit(100);
    const tasks = [];
    firebaseTasks.onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change){
            let task = change.doc.data();
            tasks.push(task);
        })
    })
    return tasks;
};
  // firebaseTasks.add(initialTasks[0]); something like this to add

// see https://codelabs.developers.google.com/codelabs/firebase-web/?authuser=0#7