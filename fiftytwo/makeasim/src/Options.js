import React from 'react';
import OptionsButton from "./OptionsButton.js";
import {expansionPacks, gamePacks, stuffPacks} from "./dictionaries/packs.js";

function Options({togglePack, packs, showOptions, householdFundsLimits, changeFundsLimits}) {

  return (
    <div className={!showOptions ? "options" : "options options--fadeIn"}>
      <div className={!showOptions ? "options__container": "options__container options__container--slideIn"}>
        <h1>Options</h1>
        <h2>Expansions</h2>
        <div className="options__packList">
          {expansionPacks.map(ep => (
              <OptionsButton packType={ep} packs={packs} togglePack={togglePack} key={ep.name}/>
              ))}
        </div>
        <h2>Game Packs</h2>
        <div className="options__packList">
            {gamePacks.map(gp => (
                <OptionsButton packType={gp} packs={packs} togglePack={togglePack} key={gp.name}/>
              ))}
        </div>
        <h2>Stuff Packs</h2>
        <div className="options__packList">
            {stuffPacks.map(sp => (
                <OptionsButton packType={sp} packs={packs} togglePack={togglePack} key={sp.name}/>
              ))}
        </div>
        <h2>Roll Limits</h2>
        <div className="options__settings">
          <div><p>Number of Sims:</p></div>
          <div><p>Household Funds:</p>
            <label>
              Minimum:
              <input name="minHouseholdFunds" id="minHouseholdFunds" type="number" min="0" max="1000000" step="1" value={householdFundsLimits[0]} onChange={changeFundsLimits} />
            </label>
            {/* need to have a check so that minimum can't be more than maximum */}
            <label>
              Maximum:
              <input name="maxHouseholdFunds" id="maxHouseholdFunds" type="number" min="0" max="1000000" step="1" value={householdFundsLimits[1]} onChange={changeFundsLimits}/>
            </label>
          </div>
        </div>
        <p className="options__blurb">Click on any pack icon to enable/disable their content from the possible results. Please note that "Journey to Batuu" is not included as an option as it is an insult to both the Star Wars and the Sims fan bases.</p>
        
      </div>
    </div>
  );
}


export default Options;
