import React, {useState} from 'react';
import aspirations from "./dictionaries/aspirations.js";
import careers from "./dictionaries/careers.js";
import traits from "./dictionaries/traits.js";
import toddlerTraits from "./dictionaries/toddlerTraits.js";
import childTraits from "./dictionaries/childTraits.js";
import ages from "./dictionaries/ages.js";

function Roller() {
  const [simList, setSimList] = useState([""]);


  const rollOptions = () => {
    let randSimCount = Math.floor(Math.random() * 8);
    let simFamily = [];
    for (let i = 0; i < randSimCount; i++){
      simFamily.push(rollSim());
      console.log("sim created");
    }
    console.log(simFamily);
    setSimList(simFamily);
  };
   const rollSim = () => {
    let tempsimList = [];
    let simSetup = {};
    let randAge = Math.floor(Math.random() * ages.length);
    let rolledSimAge = ages[randAge];
    let newTraits = [];
    let genderOfSim = "";
    let simIsSpawn = false;
    let simCareer = [];
    let simAspiration = "";
    let simOrientation = "";
    let randKey = Math.floor(Math.random() * 1000);
    //TRAITS - NEED CHECK FOR EP
    if(rolledSimAge === "toddler"){
      let randTraitNum = Math.floor(Math.random() * toddlerTraits.length);
      newTraits.push(toddlerTraits[randTraitNum]);
      simIsSpawn = true;
    } else if(rolledSimAge === "child"){
      let randTraitNum = Math.floor(Math.random() * childTraits.length);
      newTraits.push(childTraits[randTraitNum].trait);
      simIsSpawn = true;
    } else {
      let traitNum = rolledSimAge === "teen" ? 2 : 3;
      for(let i = 0; i < traitNum; i++){
        for(let j = 0; j < i; j++){
          let randTraitNum = Math.floor(Math.random() * traits.length);
          if(newTraits.includes(traits[randTraitNum].trait) || traits[randTraitNum].conflicts.includes(newTraits[j])){
              j--;
          } else{
              newTraits.push(traits[randTraitNum].trait);
          }
        }
      }
      //CAREER - NEED TO CHECK FOR EP
      let randCareerNum = Math.floor(Math.random() * careers.length);
      simCareer = careers[randCareerNum].career;
      //ASPIRATION - NEED TO CHECK FOR EP
      let randAspirationNum = Math.floor(Math.random() * aspirations.length);
      simAspiration = aspirations[randAspirationNum].aspiration;
      let randOrientationNum = Math.floor(Math.random() * 100);
      if(randOrientationNum <= 75){
        simOrientation = "straight";
      } else if(randOrientationNum <= 90){
        simOrientation ="gay";
      } else{simOrientation = "bisexual";}
    };
    let randGender = Math.floor(Math.random() * 2);
    if(randGender === 0){
      genderOfSim = "female";
    } else{genderOfSim = "male";};
    simSetup = {age: rolledSimAge,
                gender: genderOfSim,
                traits: newTraits,
                spawn: simIsSpawn,
                aspiration: simAspiration,
                career: simCareer,
                orientation: simOrientation,
                key: randKey};
    tempsimList.push(simSetup);
    return tempsimList;
   }
 
  return (
    <div className="Roller">
      <h1>Sim Roller</h1>
      <button type="button" onClick={rollOptions}>Roll</button>
      <h3>Result:</h3>
      <div className="roller_siminfo">
        {simList.map(sim => (
          <div key={sim.key}>
            <p><span className="roller_label">Age:</span> {sim.age}</p>
            <p><span className="roller_label">Gender:</span> {sim.gender}</p>
            <p className="roller_traits"><span className="roller_label">Traits:</span></p>
            {/* <ul className="roller_traits_list">
              {sim.traits.map(trait => (
                <li key={trait}>
                  {trait}
                </li>))}
            </ul> */}
        { sim.spawn ? null : (
          <div>
            <p><span className="roller_label">Aspiration:</span> {sim.aspiration}</p>
            <p><span className="roller_label">Career:</span> {sim.career}</p>
            <p><span className="roller_label">Sexual Orientation:</span> {sim.orientation}</p>
          </div>
          )
        }
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default Roller;
