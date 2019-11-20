import 'firebase/database';
import 'firebase/firestore';
import {firebaseApp} from "../firebase.js";

// import moment from "moment"; when we have dates added

const firebaseTasks = firebaseApp.firestore().collection('tasks');

export function useTasks(){
  // placeholder, work on actual code tomorrow. Path & method confirmed! finally.
  // firebaseTasks.add(initialTasks[0]);
};


// see https://codelabs.developers.google.com/codelabs/firebase-web/?authuser=0#7