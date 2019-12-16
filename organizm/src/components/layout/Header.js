import React from 'react';
// holding until dark/light theme implementation
// import Options from '../Options';

export default function Header() {
    
    return (
        <header className="header" data-testid="header">
            <h1 className="header__title">Organizm</h1>
            <div className="header__settings">
                <svg className="header__icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-settings"></use>
	            </svg>
                {/* <Options /> */}
            </div>
        </header>
    )
}
