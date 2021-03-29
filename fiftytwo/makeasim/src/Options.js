import React from 'react';
import OptionsButton from "./OptionsButton.js";

function Options({togglePack, packs}) {
    const expansionPacks = [
      {initials: "CD", name: "Cats and Dogs"},    
      {initials: "CL", name: "City Living"},
      {initials: "DU", name: "Discover University"},
      {initials: "EL", name: "Eco Living"},
      {initials: "GF", name: "Get Famous"},
      {initials: "GT", name: "Get Together"},
      {initials: "GW", name: "Get to Work"},
      {initials: "IL", name: "Island Living"},
      {initials: "SEA", name: "Seasons"},
      {initials: "SE", name: "Snowy Escape"}
    ];
    const gamePacks = [
      {initials: "JA", name: "Jungle Adventure"},
      {initials: "OR", name: "Outdoor Retreat"},
      {initials: "PH", name: "Parenthood"}, 
      {initials: "RM", name: "Realm of Magic"}, 
      {initials: "SV", name: "Strangerville"}, 
      {initials: "VA", name: "Vampires"}
    ];
    const stuffPacks =[
      {initials: "MS", name:"Moschino Stuff"},
      {initials: "NK", name:"Nifty Knitting"},
      {initials: "PS", name:"Paranormal Stuff"}  
    ];
    
  return (
    <div className="options">
      <h1>Options</h1>
      <h2>Expansions</h2>
      <div className="options__packList">
        {expansionPacks.map(ep => (
            <OptionsButton packType={ep} packs={packs} togglePack={togglePack} />
            ))}
      </div>
      <h2>Game Packs</h2>
      <div className="options__packList">
          {gamePacks.map(gp => (
              <OptionsButton packType={gp} packs={packs} togglePack={togglePack} />
            ))}
      </div>
      <h2>Stuff Packs</h2>
      <div className="options__packList">
          {stuffPacks.map(sp => (
              <OptionsButton packType={sp} packs={packs} togglePack={togglePack} />
            ))}
      </div>
    </div>
  );
}

export default Options;
