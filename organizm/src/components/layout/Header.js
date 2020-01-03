import React, {useState} from 'react';
import Options from '../popup/Options';

export default function Header(props) {
    
    const [showOptions, setShowOptions] = useState(false);

    return (
        <header className="header" data-testid="header">
            <h1 className="header__title">Organizm</h1>
            <button type="button" className="header__settings" onClick={() => setShowOptions(true)}>
                <svg className="header__icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-settings"></use>
	            </svg>
            </button>
            {showOptions && <Options module={props.module} setShowOptions={setShowOptions}/>}
        </header>
    )
}
