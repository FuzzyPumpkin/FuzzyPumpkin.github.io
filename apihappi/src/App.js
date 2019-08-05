import React from 'react';
import "./style.css"
import Calculator from "./Calculator"
// import Currency from "./Currency"
import Flip from "./Flip"
import Nav from "./Nav"
// import News from "./News"
// import Recipe from "./Recipe"
// import Weather from "./Weather"
import Tasks from "./Tasks"
import Timezone from "./Timezone"
// import Word from "./Word"

// function randRecipeID(){
//   const today = new Date();
//   const day = today.getUTCDate();
//   const month = today.getUTCMonth() + 1;
//   const year = today.getUTCFullYear() - 2000;
//   return Math.floor((day * month * year) / 2) + 500;
// }

function App() {
  return (
    <div className="App page-container">
      <Nav />
      <main className="main-content">
        {/* <News />
        <Weather /> */}
        {/* <Word /> */}
        <Tasks />
        {/* <Recipe recipeID = {randRecipeID()}/> */}
        <Flip />
        <section className="section-budget app"></section>
        <Timezone />
        {/* <Currency /> */}
        <Calculator />
      </main>
    </div>
  );
}

export default App;
