import React, {useState} from 'react';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from './context/theme-context';
import {useTasks} from "./hooks/index";

function App() {
  const initialTasks = [
    {id: 1, task: "Clean Fishtank", completed: false},
    {id: 2, task: "Wash Car", completed: true}
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const tempTasks = useTasks("12345", tasks);
  console.log(tasks);
  console.log(tempTasks);

  return (
        <ThemeProvider>
          <div className="App">
            <Header />
            <Content />
            <Footer />
          </div>
        </ThemeProvider>
  );
}

export default App;
