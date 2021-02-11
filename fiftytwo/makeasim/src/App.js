import React, {useState} from 'react';
import Options from "./Options.js";
import Roller from "./Roller.js";

function App() {

  const [packs, setPacks] = useState([]);
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
      <Options togglePack={togglePack} packs={packs}/>
      <Roller packs={packs}/>
    </div>
  );
}

export default App;
