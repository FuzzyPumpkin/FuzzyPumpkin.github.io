import {useState, useEffect} from "react";
import {firebase} from "../firebase";
import {collatedTasksExist} from '../helpers';
import moment from "moment";

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
  //Don't fully understand this. Why "unsubscribe"? Everything else consists of Firebase methods, easily IDed in 
  //docs.
  //More research and reading of Firebase docs needed so that I can refactor this to be clearer and follow
  //project constraints.
    useEffect(() => {
      let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', '12345');
        //eventual refactor needed when multiple users are available.
  
      unsubscribe =
        selectedProject && !collatedTasksExist(selectedProject)
          ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
          : selectedProject === 'TODAY'
          ? (unsubscribe = unsubscribe.where(
              'date',
              '==',
              moment().format('DD/MM/YYYY')
            ))
          : selectedProject === 'INBOX' || selectedProject === 0
          ? (unsubscribe = unsubscribe.where('date', '==', ''))
          : unsubscribe;
  
      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }));
  //for final, will need today/week/month. V1 does not need this.
        setTasks(
          selectedProject === 'WEEK'
            ? newTasks.filter(
                task =>
                  moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                  task.archived !== true
              )
            : newTasks.filter(task => task.archived !== true)
        );
        setArchivedTasks(newTasks.filter(task => task.archived !== false));
      });
  
      return () => unsubscribe();
    }, [selectedProject]);
  
    return { tasks, archivedTasks };
  };

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('projects')
            .where('userId', '==', '12345')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id
                }));
            if(JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
            }
            });
        }, [projects]);
        return {projects, setProjects};
};

