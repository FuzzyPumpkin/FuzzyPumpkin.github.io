import React from 'react';
import Nav from "./Nav";
import CardGrid from "./CardGrid";
import resources from "./Resources";

function App() {
  return (
    <div className="u-flex-row">
      <Nav />
      <main>
        <h1>ReSOURCEd</h1>
        <p className="main-blurb">A collection of websites, courses, blogs and articles relating to web development, 
          focusing on front end and design. Created and shared by Kari Minger, aka FuzzyPumpkin, in hopes of bettering 
          the community.</p>
        <CardGrid resources={resources}/>
      </main>
    </div>
  );
}

export default App;
