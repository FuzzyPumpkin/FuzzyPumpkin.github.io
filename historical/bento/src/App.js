import React, {useState}  from 'react';
import Box from "./Box";
import BoxList from "./BoxList";
import {Route, Switch} from "react-router-dom";

function App() {
  const starterBoxes = [
    {id: 1, fruit: "strawberries", veg: "asparagus", side: "chips", main: "fried rice"},
    {id: 2, fruit: "banana", veg: "peas", side: "celery", main: "pbj"}
  ];
  const [boxes, setBoxes] = useState(starterBoxes);

  return (
    <div className="App">
      <div className="app__headline">
        <h1 className="app__title">Build My Bento</h1>
        <a href="/new" className="app__link">New Box Design</a>
      </div>
      <p className="app__instructions">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi et ea, ratione blanditiis 
        illo eaque doloribus ipsa omnis veniam quo eos quas obcaecati, harum nulla maiores, incidunt 
        laboriosam placeat esse.</p>
      <Switch>
        <Route exact path="/" render={(routeProps) => 
          <BoxList {...routeProps} boxes={boxes}/>} />
        <Route exact path="/new" render={(routeProps) => 
          <Box {...routeProps} />} />
      </Switch>
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