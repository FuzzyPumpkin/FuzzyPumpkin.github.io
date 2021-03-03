import React, {useState} from 'react';
import SimCard from "./SimCard";
import aspirations from "./dictionaries/aspirations.js";
import careers from "./dictionaries/careers.js";
import traits from "./dictionaries/traits.js";
import toddlerTraits from "./dictionaries/toddlerTraits.js";
import childTraits from "./dictionaries/childTraits.js";
import {ages, firstSimAges} from "./dictionaries/ages.js";

function Roller({packs}) {
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
  const [householdFunds, setHouseholdFunds] = useState("0");
  const familySize = [0,0,0,0,0,0,1,1,1,1,1,2,2,2,3,3,4,4,5,6,7,8];
  const filteredTraits = traits.filter(trait => !packs.includes(trait.expansion));
  const filteredChildTraits = childTraits.filter(trait => !packs.includes(trait.expansion));
  const filteredAspirations = aspirations.filter(aspiration => !packs.includes(aspiration.expansion));
  const filteredCareers = careers.filter(career => !packs.includes(career.expansion));

  const rollOptions = () => {
    let familySimList = [];
    let randFamilySize = aspectFinder(familySize);
    familySimList.push(addSim(aspectFinder(firstSimAges)));
    for(let i = 1; i <= randFamilySize; i++){
      familySimList.push(addSim(aspectFinder(ages)));
    }
    setSimList(familySimList);
    setHouseholdFunds(formatter.format(Math.floor(Math.random() * 82000) + 18000));
   };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const addSim = (ageStage) => {
    let simSetup = {};
    simSetup.key = Math.floor(Math.random() * 1000);
    simSetup.age = ageStage;
    let randGender = Math.floor(Math.random() * 2);
    randGender === 0 ? simSetup.gender = "female" : simSetup.gender = "male";
    if(simSetup.age === "toddler"){
      simSetup.traits = spawnTraitFinder(toddlerTraits);
      simSetup.isSpawn = true;
    } else if(simSetup.age === "child"){
      simSetup.traits = spawnTraitFinder(filteredChildTraits);
      simSetup.isSpawn = true;
    } else {
      let newTraits = [];
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < i; j++){
          let randTraitNum = Math.floor(Math.random() * filteredTraits.length);
          if(newTraits.includes(filteredTraits[randTraitNum].trait) || traits[randTraitNum].conflicts.includes(newTraits[j])){
              j--;
          } else{
              newTraits.push(filteredTraits[randTraitNum].trait);
          }
        }
      }
      if(simSetup.age === "teen"){newTraits.pop()};
      simSetup.traits = newTraits;
      simSetup.isSpawn = false;
      simSetup.career = aspectFinder(filteredCareers).career;
      simSetup.aspiration = aspectFinder(filteredAspirations).aspiration;
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
      <h2>Household Funds: {householdFunds}</h2>
      <div className="roller_simList">
        {simList.map(sim => (
          <SimCard sim={sim} key={sim.key} />
        ))}
      </div>
    </div>
  );
}

export default Roller;