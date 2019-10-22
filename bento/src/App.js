import React from 'react';
import BoxList from "./BoxList";

function App() {
  return (
    <div className="App">
      <h1>Build My Bento</h1>
      <p>new box link</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi et ea, ratione blanditiis 
        illo eaque doloribus ipsa omnis veniam quo eos quas obcaecati, harum nulla maiores, incidunt 
        laboriosam placeat esse.</p>
      <BoxList />
    </div>
  );
}

export default App;

// APP SETUP
// Components
// 1. box list
// 2. box design (routing to view w/props or new view)
//   3. choice form (1 component, 4 instances)
//   4. save form
// 5. box preview
// start with save to local storage
// pre-populate one box for box list

// NPM packages to use
// 1. form validator (import {ValidatorForm, TextValidator} from "react-material-ui-form-validator")
// 2. dragability (import {SortableContainer} from "react-sortable-hoc")
// 3. react-router-dom

// SASS is probably overkill
// all in hooks/functional components