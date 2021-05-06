import React from 'react';
import OptionsButton from "./OptionsButton.js";
import {expansionPacks, gamePacks, stuffPacks} from "./dictionaries/packs.js";
import NumericInput from 'react-numeric-input';


function Options({togglePack, packs, showOptions, householdFundsLimits, changeFundsLimits, simCountLimits, changeSimLimits}) {

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
          <div ><p className="options__form_label">Number of Sims</p>
            <label className="options__form">
              <span>Minimum:</span>
              <NumericInput 
	              className="form-control options__form_input" 
	              value={simCountLimits[0] + 1} 
              	min={ 1 } 
	              max={simCountLimits[1] + 1} 
	              step={ 1 } 
                onChange={(e) =>changeSimLimits(e, 0)}
              />
            </label>
            <label className="options__form">
              <span>Maximum:</span>
              <NumericInput 
	              className="form-control options__form_input" 
	              value={simCountLimits[1] + 1} 
              	min={simCountLimits[0] + 1} 
	              max={ 8 } 
	              step={ 1 } 
                onChange={(e) =>changeSimLimits(e, 1)}
              />
            </label>
          </div>
          <div><p className="options__form_label">Household Funds</p>
            <label className="options__form">
              <span>Minimum:</span>
              <NumericInput 
	              className="form-control options__form_input" 
	              value={householdFundsLimits[0]} 
              	min={ 0 } 
	              max={householdFundsLimits[1]} 
	              step={ 1 } 
                onChange={(e) =>changeFundsLimits(e, 0)}
              />
            </label>
            <label className="options__form">
              <span>Maximum:</span>
              <NumericInput 
	              className="form-control options__form_input" 
	              value={householdFundsLimits[1]} 
              	min={householdFundsLimits[0]} 
	              max={ 1000000 } 
	              step={ 1 } 
                onChange={(e) =>changeFundsLimits(e, 1)}
              />
            </label>
          </div>
        </div>
        <p className="options__blurb">Click on any pack icon to enable/disable their content from the possible results. Please note that "Journey to Batuu" is not included as an option as it is an insult to both the Star Wars and the Sims fan bases.</p>
        
      </div>
    </div>
  );
}


export default Options;
