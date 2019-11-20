import React from 'react';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from './context/theme-context';

function App() {

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
