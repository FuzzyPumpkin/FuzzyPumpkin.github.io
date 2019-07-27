import React from 'react';
import "./style.css"
import Calculator from "./Calculator"
import Flip from "./Flip"
import Nav from "./Nav"
import Recipe from "./Recipe"
import Weather from "./Weather"
import Tasks from "./Tasks"

function randRecipeID(){
  const today = new Date();
  const day = today.getUTCDate();
  const month = today.getUTCMonth() + 1;
  const year = today.getUTCFullYear() - 2000;
  return Math.floor((day * month * year) / 2) + 500;
}

function App() {
  return (
    <div className="App page-container">
      <Nav />
      <main className="main-content">
        <section className="section-news app"></section>
        <Weather />
        <section className="section-word app"></section>
        <Tasks />
        <section className="section-notes app"></section>
        <Recipe recipeID = {randRecipeID()}/>
        <Flip />
        <section className="section-budget app"></section>
        <section className="section-timezone app"></section>
        <section className="section-currency app"></section>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
