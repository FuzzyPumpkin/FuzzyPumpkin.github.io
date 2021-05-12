import React, {useState} from 'react';
import SimCard from "./SimCard";
import aspirations from "./dictionaries/aspirations.js";
import careers from "./dictionaries/careers.js";
import traits from "./dictionaries/traits.js";
import toddlerTraits from "./dictionaries/toddlerTraits.js";
import childTraits from "./dictionaries/childTraits.js";
import {ages, firstSimAges} from "./dictionaries/ages.js";

function Roller({packs, householdFundsLimits, simCountLimits}) {
  const [firstRun, setFirstRun] = useState(true);
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
  const weightedFamilySize = [0,0,0,0,0,0,1,1,1,1,1,2,2,2,3,3,4,4,5,6,7];
  const minFamilySize = weightedFamilySize.filter( num => num >= simCountLimits[0]);
  const familySize = minFamilySize.filter( num => num <= simCountLimits[1]);
  const filteredTraits = traits.filter(trait => !packs.includes(trait.expansion));
  const filteredChildTraits = childTraits.filter(trait => !packs.includes(trait.expansion));
  const filteredAspirations = aspirations.filter(aspiration => !packs.includes(aspiration.expansion));
  const filteredCareers = careers.filter(career => !packs.includes(career.expansion));

  const rollOptions = () => {
    let familySimList = [];
    console.log(familySize);
    let randFamilySize = aspectFinder(familySize);
    let upperFundsLimit = householdFundsLimits[1]-householdFundsLimits[0];
    familySimList.push(addSim(aspectFinder(firstSimAges)));
    for(let i = 1; i <= randFamilySize; i++){
      familySimList.push(addSim(aspectFinder(ages)));
    }
    setFirstRun(false);
    setSimList(familySimList);
    setHouseholdFunds(formatter.format(Math.floor(Math.random() * upperFundsLimit) + householdFundsLimits[0]));
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
      <h1 className="roller_title"><span className="roller_title--main"> Sims</span> <span className="roller_title--accent"></span> <span className="roller_title--main"> Family Roller</span></h1>
      <button className="roller_button" type="button" onClick={rollOptions}>
        <span className="roller_button_text">Roll It!</span>
      </button>
      <h2 className="roller_funds">Household Funds: {householdFunds}</h2>
      <div className="roller_simList">
        {!firstRun && simList.map(sim => (
          <SimCard sim={sim} key={sim.key} />
        ))}
      </div>
    </div>
  );
}

export default Roller;