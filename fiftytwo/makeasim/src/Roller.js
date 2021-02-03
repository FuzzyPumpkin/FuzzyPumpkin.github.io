import React, {useState} from 'react';
import SimCard from "./SimCard";
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
    matePreference: "",
    isSpawn: false, 
    key: 1
  }]);
  const [householdFunds, setHouseholdFunds] = useState(0);

  const rollOptions = () => {
    //need check to make sure there is at least a teen/ya/a/elder
    let familySimList = [];
    let randFamilySize = Math.floor(Math.random() * 8);
    for(let i = 0; i <= randFamilySize; i++){
      familySimList.push(addSim());
    }
    setSimList(familySimList);
    setHouseholdFunds(Math.floor(Math.random() * 82000) + 18000);
   };

  const addSim = () => {
    let simSetup = {};
    simSetup.key = Math.floor(Math.random() * 1000);
    simSetup.age = aspectFinder(ages);
    let randGender = Math.floor(Math.random() * 2);
    randGender === 0 ? simSetup.gender = "female" : simSetup.gender = "male";
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
        randGender === 0 ? simSetup.matePreference = "male" : simSetup.matePreference = "female";
      } else if(randOrientationNum <= 90){
        randGender === 0 ? simSetup.matePreference = "female" : simSetup.matePreference = "male";
      } else{simSetup.matePreference = "male or female";}
    };
    return simSetup;
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
      <h1>Sim Family Roller</h1>
      <button className="roller_button" type="button" onClick={rollOptions}>Roll It!</button>
      <h2>Household Funds: ${householdFunds}</h2>
      <div className="roller_simList">
        {simList.map(sim => (
          <SimCard sim={sim} key={sim.key} />
        ))}
      </div>
    </div>
  );
}

export default Roller;