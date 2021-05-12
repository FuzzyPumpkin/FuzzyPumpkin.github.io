import React from 'react';


function OptionsButton({packType, packs, togglePack}) {    
  return (
        <div className="options__pack">
              <button 
                key={packType.initials}
                alt={packType.name}
                className={packs.includes(packType.initials)? "options__button options__button--pressed": "options__button"} 
                type="button"
                onClick={() => togglePack(packType.initials)}>
                  <img 
                    className={packs.includes(packType.initials)? "options__pack__icon options__pack__icon--disabled": "options__pack__icon"}
                    src={`./images/${packType.initials}.png`} 
                    alt={packType.name} />
                </button>
            <p className="options__pack__name">{packType.name}</p>
        </div> 
  );
}

export default OptionsButton;
