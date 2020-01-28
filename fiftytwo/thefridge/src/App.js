import React from 'react';
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Board />
      <div className="controls">
        <div className="controls__row">
        <h1>The Fridge</h1>
        <button className="controls__button" type="button">
          <span className="controls__buttonText">new words</span>
          <svg className="controls__buttonSvg">
            <use xlinkHref="./images/symbol-defs.svg#icon-splat"></use>
          </svg>
        </button>
        </div>
      <p className="controls__attribution">Emoji icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a>
      </p>
      </div>
    </div>
  );
}

export default App;


