import useLocalStorage from './useLocalStorage';
import uuid from "uuid";

export default initialTasks => {
    const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);
    return {
        tasks,
        addTask: (newTaskText, taskDate) => {
            setTasks([...tasks, {id: uuid(), task: newTaskText, completed: false, date: taskDate}]);
        },
        removeTask: taskId => {
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        },
        toggleTask: taskId => {
            const updatedTasks = tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task);
            setTasks(updatedTasks);
        }

    }
}