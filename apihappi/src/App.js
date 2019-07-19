import React from 'react';
import "./style.css"
import Flip from "./Flip"
import Nav from "./Nav"
import Weather from "./Weather"

function App() {
  return (
    <div className="App page-container">
      <Nav />
      <main className="main-content">
        <section className="section-news app"></section>
        <Weather />
        <section className="section-word app"></section>
        <section className="section-tasks app"></section>
        <section className="section-notes app"></section>
        <section className="section-recipe app"></section>
        <Flip />
        <section className="section-budget app"></section>
        <section className="section-timezone app"></section>
        <section className="section-currency app"></section>
        <section className="section-calculator app"></section>
      </main>
    </div>
  );
}

export default App;
