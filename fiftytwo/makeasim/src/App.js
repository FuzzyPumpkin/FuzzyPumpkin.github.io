import React, {useState} from 'react';
import Options from "./Options.js";
import Roller from "./Roller.js";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [showOptions, setShowOptions] = useState(false);
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

  return (
    <div className="App">
      <button type="button" className="App__button" onClick={() => setShowOptions(!showOptions)}>
        <svg className="App__button__icon">
		      <use xlinkHref="./images/symbol-defs.svg#icon-settings"></use>
	      </svg>
      </button>
      {showOptions && <Options togglePack={togglePack} packs={packs} showOptions={showOptions}/>}
      <Roller packs={packs}/>
    </div>
  );
}

export default App;
