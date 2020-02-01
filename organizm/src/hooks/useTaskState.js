import useLocalStorage from './useLocalStorage';
import uuid from "uuid";

export default initialTasks => {
    const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);
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
        deleteComplete: () => {
            const updatedTasks = tasks.filter(task => !task.completed);
            setTasks(updatedTasks);
        }
    };
}