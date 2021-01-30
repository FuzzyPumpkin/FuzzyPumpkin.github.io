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
  const [householdFunds, setHouseholdFunds] = useState(0);

  const rollOptions = () => {
    //need check to make sure there is at least a teen/ya/a/elder
    let familySimList = [];
    let randFamilySize = Math.floor(Math.random() * 8);
    for(let i = 0; i <= randFamilySize; i++){
      familySimList.push(addSim());
    }
    setSimList(familySimList);
    setHouseholdFunds(Math.floor(Math.random() * 60000) + 18000);
   };

  const addSim = () => {
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
          <div className="roller_simdata" key={sim.key}>
            <p className="roller_label">this is a...</p>
            <p className="roller_data"> {sim.gender} {sim.age}</p>
        { sim.isSpawn ? null : (
            <div>
              <p className="roller_label">their aspiration is...</p>
              <p className="roller_data"> {sim.aspiration}</p>
              <p className="roller_label">they want to be a...</p>
              <p className="roller_data"> {sim.career}</p>
              <p className="roller_label">their ideal mate is...</p>
              <p className="roller_data"> {sim.sexualOrientation}</p>
            </div>
          )
        }
        <p><span className="roller_label">their personality is...</span></p>
          <ul className="roller_traits_list">
            {sim.traits.map(trait => (
              <li key={trait}>
                {trait}
              </li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roller;