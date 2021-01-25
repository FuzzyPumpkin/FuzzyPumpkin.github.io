import React, {useState} from 'react';
import aspirations from "./dictionaries/aspirations.js";
import careers from "./dictionaries/careers.js";
import traits from "./dictionaries/traits.js";
import toddlerTraits from "./dictionaries/toddlerTraits.js";
import childTraits from "./dictionaries/childTraits.js";
import ages from "./dictionaries/ages.js";

function Roller() {

  const [simList, setSimList] = useState([{
    age: "",
    aspiration: "",
    career: [""],
    traits: [""],
    gender: "",
    sexualOrientation: "",
    isSpawn: false, 
    key: 1
  }]);

  const rollOptions = () => {
    console.log("clicked");
    let simSetup = {};
    simSetup.key = Math.floor(Math.random() * 1000);
    let randAge = Math.floor(Math.random() * ages.length);
    simSetup.age = ages[randAge];

    if(simSetup.age === "toddler"){
      let newTrait = [];
      let randTraitNum = Math.floor(Math.random() * toddlerTraits.length);
      newTrait.push(toddlerTraits[randTraitNum]);
      simSetup.traits = newTrait;
      simSetup.isSpawn = true;
    } else if(simSetup.age === "child"){
      let newTrait = [];
      let randTraitNum = Math.floor(Math.random() * childTraits.length);
      newTrait.push(childTraits[randTraitNum].trait);
      simSetup.traits = newTrait;
      simSetup.isSpawn = true;
    } else {
      let newTraits = [];
      for(let i = 0; i < 3; i++){
        console.log("firing trait roll");
        for(let j = 0; j < i; j++){
          let randTraitNum = Math.floor(Math.random() * traits.length);
          if(newTraits.includes(traits[randTraitNum].trait) || traits[randTraitNum].conflicts.includes(newTraits[j])){
              j--;
          } else{
              newTraits.push(traits[randTraitNum].trait);
          }
        }
      }
      if(simSetup.age === "teen"){newTraits.pop()};
      simSetup.traits = newTraits;
      simSetup.isSpawn = false;
      let randCareerNum = Math.floor(Math.random() * careers.length);
      simSetup.career = careers[randCareerNum].career;
      let randAspirationNum = Math.floor(Math.random() * aspirations.length);
      simSetup.aspiration = aspirations[randAspirationNum].aspiration;
      let randOrientationNum = Math.floor(Math.random() * 100);
      if(randOrientationNum <= 75){
        simSetup.sexualOrientation = "straight";
      } else if(randOrientationNum <= 90){
        simSetup.sexualOrientation = "gay";
      } else{simSetup.sexualOrientation = "bisexual";}
    };
    let randGender = Math.floor(Math.random() * 2);
    if(randGender === 0){
      simSetup.gender = "female";
    } else{simSetup.gender = "male";};
    console.log(simSetup);
    setSimList([simSetup]);
   };
  
  return (
    <div className="Roller">
      <h1>Sim Roller</h1>
      <button type="button" onClick={rollOptions}>Roll</button>
      <h3>Result:</h3>
      {simList.map(sim => (
        <div key={sim.key}>
        <p>Age: {sim.age}</p>
        <p>Gender: {sim.gender}</p>
        <p>Traits:</p>
        <ul>
          {sim.traits.map(trait => (
            <li key={trait}>
              {trait}
            </li>))}
          </ul>
       { sim.isSpawn ? null : (
          <div>
            <p>Aspiration: {sim.aspiration}</p>
            <p>Career: {sim.career}</p>
            <p>Sexual Orientation: {sim.sexualOrientation}</p>
          </div>
        )
      }
        </div>
      ))}
    </div>
  );
}

export default Roller;