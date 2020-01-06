import useLocalStorage from './useLocalStorage';
import uuid from "uuid";

export default initialTasks => {
    const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);
    const helperAlphaSortTasks = key => {
        return function innerSort(a, b) {
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return comparison;
        };
    };
    return {
        tasks,
        addTask: (newTaskText, taskDate, formattedDate) => {
            setTasks([...tasks, {id: uuid(), task: newTaskText, completed: false, date: taskDate, formattedDate: formattedDate}]);
        },
        removeTask: taskId => {
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        },
        toggleTask: taskId => {
            const updatedTasks = tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task);
            setTasks(updatedTasks);
        },
        alphaSortTasks: key => {setTasks(tasks.sort(helperAlphaSortTasks(key)));}
    };
}