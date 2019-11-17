import React from 'react';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import {ProjectsProvider, SelectedProjectProvider} from "./context";
import { ThemeProvider } from './context/theme-context';

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <ThemeProvider>
          <div className="App">
            <Header />
            <Content />
            <Footer />
          </div>
        </ThemeProvider>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
