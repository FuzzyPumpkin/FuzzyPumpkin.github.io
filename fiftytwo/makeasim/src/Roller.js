import React, {useState} from 'react';
import aspirations from "./dictionaries/aspirations.js";
import careers from "./dictionaries/careers.js";
import traits from "./dictionaries/traits.js";
import toddlerTraits from "./dictionaries/toddlerTraits.js";
import childTraits from "./dictionaries/childTraits.js";
import ages from "./dictionaries/ages.js";

function Roller() {
  const [career, setCareer] = useState([""]);
  const [traitList, setTraitList] = useState([""]);
  const [aspiration, setAspiration] = useState("");
  const [simAge, setSimAge] = useState("");
  const [simGender, setSimGender] = useState("");
  const [orientation, setOrientation] = useState("");
  const [isSpawn, setIsSpawn] = useState(false);

  const rollOptions = () => {
    let randAge = Math.floor(Math.random() * ages.length);
    let rolledSimAge = ages[randAge];
    setSimAge(rolledSimAge);
    console.log(rolledSimAge);
    //TRAITS - NEED CHECK FOR EP
    if(rolledSimAge === "toddler"){
      let newTrait = [];
      let randTraitNum = Math.floor(Math.random() * toddlerTraits.length);
      newTrait.push(toddlerTraits[randTraitNum]);
      setTraitList(newTrait);
      setIsSpawn(true);
    } else if(rolledSimAge === "child"){
      let newTrait = [];
      let randTraitNum = Math.floor(Math.random() * childTraits.length);
      newTrait.push(childTraits[randTraitNum].trait);
      setTraitList(newTrait);
      setIsSpawn(true);
    } else {
      console.log("in adult roll");
      let traitNum = simAge === "teen" ? 2 : 3;
      let newTraits = [];
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
      setTraitList(newTraits);
      setIsSpawn(false);
      //CAREER - NEED TO CHECK FOR EP
      let randCareerNum = Math.floor(Math.random() * careers.length);
      setCareer(careers[randCareerNum].career);
      //ASPIRATION - NEED TO CHECK FOR EP
      let randAspirationNum = Math.floor(Math.random() * aspirations.length);
      setAspiration(aspirations[randAspirationNum].aspiration);
      let randOrientationNum = Math.floor(Math.random() * 100);
      if(randOrientationNum <= 75){
        setOrientation("straight");
      } else if(randOrientationNum <= 90){
        setOrientation("gay");
      } else{setOrientation("bisexual");}
    };
    let randGender = Math.floor(Math.random() * 2);
    if(randGender === 0){
      setSimGender("female");
    } else{setSimGender("male");};
   };

  return (
    <div className="Roller">
      <h1>Sim Roller</h1>
      <button type="button" onClick={rollOptions}>Roll</button>
      <h3>Result:</h3>
      <p>Age: {simAge}</p>
      <p>Gender: {simGender}</p>
      <p>Traits:</p>
        <ul>
        {traitList.map(trait => (
          <li key={trait}>
            {trait}
          </li>))}
        </ul>
      { isSpawn ? null : (
        <div>
          <p>Aspiration: {aspiration}</p>
          <p>Career: {career}</p>
          <p>Sexual Orientation: {orientation}</p>
        </div>
        )
      }
    
    </div>
  );
}

export default Roller;
