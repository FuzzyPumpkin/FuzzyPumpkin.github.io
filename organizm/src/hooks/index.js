import 'firebase/database';
import {firebaseApp} from "../firebase.js";
// import moment from "moment"; when we have dates added


//move argument to ref(), remove child method as a test to see if it will pull from db. See https://css-tricks.com/intro-firebase-react/
const firebaseTasks = firebaseApp.database().ref().child('tasks');

export function useTasks(userId, tasks){
  const userTasks = tasks;
  //this is not working. Cleared FB database. Need to put add form in and try adding, may be how I'm referencing the collection.
  for(let i=0; i < firebaseTasks.length; i++){
    if (firebaseTasks[i].userId === userId){
      userTasks.push(firebaseTasks[i]);
    }
  }
  return userTasks;
};
