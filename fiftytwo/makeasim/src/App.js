import React from 'react';
import Options from "./Options.js";
import Roller from "./Roller.js";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  // const [packs, setPacks] = useState([]);
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
      <Options togglePack={togglePack} packs={packs}/>
      <Roller packs={packs}/>
    </div>
  );
}

export default App;
