import React, {useState} from 'react';
import './App.css';
import aspirations from "./dictionaries/aspirations.js";
import careers from "./dictionaries/careers.js";
import traits from "./dictionaries/traits.js";

function App() {
  const [career, setCareer] = useState([""]);
  const [traitList, setTraitList] = useState([""]);
  const [aspiration, setAspiration] = useState([""]);

  const rollOptions = () => {
    //TRAITS - NEED CHECK FOR CONFLICT, CHECK FOR EP
    let newTraits = [];
    for(let i = 0; i < 3; i++){
      let randTraitNum = Math.floor(Math.random() * traits.length);
      if(newTraits.includes(traits[randTraitNum].trait)){
        i--;
      } else {
        newTraits.push(traits[randTraitNum].trait);
      }
    }
    setTraitList(newTraits);
    //CAREER - NEED TO CHECK FOR EP
    let randCareerNum = Math.floor(Math.random() * careers.length);
    setCareer(careers[randCareerNum].career);
    //ASPIRATION - NEED TO CHECK FOR EP
    let randAspirationNum = Math.floor(Math.random() * aspirations.length);
    setAspiration(aspirations[randAspirationNum].aspiration);
    
  };
  // should be components: one to choose EP you have, one to display results and roll
  return (
    <div className="App">
      <h1>Make-a-Sim</h1>
      <button type="button" onClick={rollOptions}>Roll</button>
      <h3>Result:</h3>
      <p>Aspiration: {aspiration}</p>
      <p>Career: {career}</p>
      <p>Traits:</p>
        <ul>
        {traitList.map(trait => (
          <li key={trait}>
            {trait}
          </li>))}
        </ul>
    </div>
  );
}

export default App;
