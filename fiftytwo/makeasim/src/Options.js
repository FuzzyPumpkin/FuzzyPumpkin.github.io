import React, {useState} from 'react';


function Options() {
    const [packs, setPacks] = useState([]);

    const togglePack = (packName) => {
      console.log("function fire");
        let packList = packs;
        if(packList.includes(packName)){
            packList.splice(packList.indexOf(packName), 1);
        } else {
            packList.push(packName);
        }
        setPacks(packList);
    };
    
  return (
    <div className="options">
      <h1>Options</h1>
      <h2>Expansions</h2>
        <button className="options__button" type="button" onClick={() => togglePack("GW")}>GW</button>
        <button className="options__button" type="button" onClick={() => togglePack("CL")}>CL</button>
        <button className="options__button" type="button" onClick={() => togglePack("SE")}>SE</button>
      <h2>Game Packs</h2>
      <h2>Stuff Packs</h2>
    </div>
  );
}

export default Options;
