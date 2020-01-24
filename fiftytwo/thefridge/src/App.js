import React, {useState} from 'react';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from './context/theme-context';

function App() {
  const [module, setModule] = useState("tasks");

  return (
        <ThemeProvider>
          <div className="App">
            <Header module={module}/>
            <Content />
            <Footer setModule={setModule} />
          </div>
        </ThemeProvider>
  );
}

export default App;
