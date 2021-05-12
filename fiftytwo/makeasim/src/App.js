import React, {useState} from 'react';
import Options from "./Options.js";
import Roller from "./Roller.js";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [showOptions, setShowOptions] = useState(false);
  const [householdFundsLimits, setHouseholdFundsLimits] = useState([18000, 100000]);
  const [simCountLimits, setSimCountLimits] = useState([0, 7]);
  const initialPacks = [];
  const [packs, setPacks] = useLocalStorage("packs", initialPacks);
  const togglePack = (packName) => {
    let packList = [...packs];
    if(packList.includes(packName)){
        packList.splice(packList.indexOf(packName), 1);
    } else {
        packList.push(packName);
    }
    setPacks(packList);
  };
  const changeFundsLimits = (e, limDirection) => {
    let currLimits = householdFundsLimits;
    currLimits[limDirection] = e;
    setHouseholdFundsLimits(currLimits);
  }
  const changeSimLimits = (e, limDirection) => {
    let currLimits = simCountLimits;
    currLimits[limDirection] = e - 1;
    setSimCountLimits(currLimits);
    console.log(simCountLimits);
  }

  return (
    <div className="App">
      <button type="button" className="App__button" onClick={() => setShowOptions(!showOptions)}>
        <svg className={!showOptions ? "App__button__icon": "App__button__icon App__button__icon--blue"}>
		      <use xlinkHref="./images/symbol-defs.svg#icon-settings"></use>
	      </svg>
      </button>
      {showOptions && <Options 
        togglePack={togglePack} 
        packs={packs} 
        showOptions={showOptions} 
        householdFundsLimits={householdFundsLimits} 
        changeFundsLimits={changeFundsLimits}
        simCountLimits={simCountLimits} 
        changeSimLimits={changeSimLimits}
        />}
      <Roller packs={packs} householdFundsLimits={householdFundsLimits} simCountLimits={simCountLimits}/>
    </div>
  );
}

export default App;
