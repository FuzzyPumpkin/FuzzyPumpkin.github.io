import React from 'react';

function SimCard({sim}) {

  return (
    <div className="simcard">
          <p className="simcard_label">this is a...</p>
          <p className="simcard_data"> {sim.gender} {sim.age}</p>
      { sim.isSpawn ? null : (
          <div>
            <p className="simcard_label">{sim.gender === "male" ? (<span>his</span>) : (<span>her</span>)} aspiration is...</p>
            <p className="simcard_data"> {sim.aspiration}</p>
            <p className="simcard_label">{sim.gender === "male" ? (<span>he</span>) : (<span>she</span>)} wants to be a...</p>
            <p className="simcard_data"> {sim.career}</p>
            <p className="simcard_label">{sim.gender === "male" ? (<span>his</span>) : (<span>her</span>)} ideal mate is...</p>
            <p className="simcard_data">{sim.matePreference}</p>
          </div>
        )
      }
      <p><span className="simcard_label">{sim.gender === "male" ? (<span>his</span>) : (<span>her</span>)} personality is...</span></p>
        <ul className="simcard_traits_list">
          {sim.traits.map(trait => (
            <li key={trait}>
              {trait}
            </li>))}
          </ul>
    </div>
  );
}

export default SimCard;