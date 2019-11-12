import React from 'react';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import {ProjectsProvider, SelectedProjectProvider} from "./context";

function App() {
  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
