import React from 'react';


function Options({togglePack, packs}) {
    const expansionPacks = ["SE","EL", "DU", "IL", "GF", "CD", "CL", "GT", "SEA", "GW"];
    const gamePacks = ["RM", "SV", "JA", "PH", "VA", "OR"];
    const stuffPacks =["PS", "NK", "MS"];
    
  return (
    <div className="options">
      <h1>Options</h1>
      <h2>Expansions</h2>
      <div>
          {expansionPacks.map(ep => (
              <button 
                key={ep}
                className={packs.includes(ep)? "options__button options__button--pressed": "options__button"} 
                type="button"
                onClick={() => togglePack(ep)}>{ep}</button>
            ))}
      </div>
      <h2>Game Packs</h2>
      <div>
          {gamePacks.map(gp => (
              <button key={gp}className="options__button" type="button" onClick={() => togglePack(gp)}>{gp}</button>
            ))}
      </div>
      <h2>Stuff Packs</h2>
      <div>
          {stuffPacks.map(sp => (
              <button key={sp}className="options__button" type="button" onClick={() => togglePack(sp)}>{sp}</button>
            ))}
      </div>
    </div>
  );
}

export default Options;
