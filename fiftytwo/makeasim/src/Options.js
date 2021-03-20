import React from 'react';


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
            <div className="options__pack">
              <button 
                key={ep.initials}
                alt={ep.name}
                className={packs.includes(ep.initials)? "options__button options__button--pressed": "options__button"} 
                type="button"
                onClick={() => togglePack(ep.initials)}>
                  <img 
                    className={packs.includes(ep.initials)? "options__pack__icon options__pack__icon--disabled": "options__pack__icon"}
                    src={`./images/${ep.initials}.png`} 
                    alt={ep.name} />
                </button>
              <p className="options__pack__name">{ep.name}</p>
            </div>
            ))}
      </div>
      <h2>Game Packs</h2>
      <div className="options__packList">
          {gamePacks.map(gp => (
            <div className="options__pack">
              <button 
                key={gp.initials}
                alt={gp.name}
                className={packs.includes(gp.initials)? "options__button options__button--pressed": "options__button"} 
                type="button" 
                onClick={() => togglePack(gp.initials)}>
                  <img 
                      className={packs.includes(gp.initials)? "options__pack__icon options__pack__icon--disabled": "options__pack__icon"}
                      src={`./images/${gp.initials}.png`} 
                      alt={gp.name} />
                </button>
              <p className="options__pack__name">{gp.name}</p>
            </div>
            ))}
      </div>
      <h2>Stuff Packs</h2>
      <div className="options__packList">
          {stuffPacks.map(sp => (
            <div className="options__pack">
              <button 
                key={sp.initials}
                alt={sp.name}
                className={packs.includes(sp.initials)? "options__button options__button--pressed": "options__button"} 
                type="button" 
                onClick={() => togglePack(sp.initials)}>
                  <img 
                      className={packs.includes(sp.initials)? "options__pack__icon options__pack__icon--disabled": "options__pack__icon"}
                      src={`./images/${sp.initials}.png`} 
                      alt={sp.name} />
                </button>
              <p className="options__pack__name">{sp.name}</p>
            </div>
            ))}
      </div>
    </div>
  );
}

export default Options;
