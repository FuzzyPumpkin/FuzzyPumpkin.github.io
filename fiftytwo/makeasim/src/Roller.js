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
    simSetup.age = aspectFinder(ages);

    if(simSetup.age === "toddler"){
      simSetup.traits = spawnTraitFinder(toddlerTraits);
      simSetup.isSpawn = true;
    } else if(simSetup.age === "child"){
      simSetup.traits = spawnTraitFinder(childTraits);
      simSetup.isSpawn = true;
    } else {
      let newTraits = [];
      for(let i = 0; i < 3; i++){
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
      simSetup.career = aspectFinder(careers).career;
      simSetup.aspiration = aspectFinder(aspirations).aspiration;
      let randOrientationNum = Math.floor(Math.random() * 100);
      if(randOrientationNum <= 75){
        simSetup.sexualOrientation = "straight";
      } else if(randOrientationNum <= 90){
        simSetup.sexualOrientation = "gay";
      } else{simSetup.sexualOrientation = "bisexual";}
    };
    let randGender = Math.floor(Math.random() * 2);
    randGender === 0 ? simSetup.gender = "female" : simSetup.gender = "male"; 
    //REMOVE THIS BEFORE DONE!!
    console.log(simSetup);
    setSimList([simSetup]);
   };

   const spawnTraitFinder = (ageGroupTraits) => {
    let newTrait = [];
    let randTraitNum = Math.floor(Math.random() * ageGroupTraits.length);
    newTrait.push(ageGroupTraits[randTraitNum].trait);
    return newTrait;
   };

   const aspectFinder = (aspect, aspectKey) => {
    let randNum = Math.floor(Math.random() * aspect.length);
    return aspect[randNum];
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