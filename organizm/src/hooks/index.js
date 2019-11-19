import 'firebase/database';
import {firebaseApp} from "../firebase.js";
// import moment from "moment"; when we have dates added


const firebaseDatabase = firebaseApp.database().ref().child('tasks');

export function useTasks(userId){
  console.log(firebaseDatabase);

};
