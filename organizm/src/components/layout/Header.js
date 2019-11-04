import React from 'react';

export default function Header() {
    return (
        <header className="header" data-testid="header">
            <h1 className="header__title">Organizm</h1>
            <div className="header__settings">
                <div>
                    <svg className="header__icon">
                        <use xlinkHref="./images/symbol-defs.svg#icon-user"></use>
                    </svg>
                    <span className="header__username">Kari</span>
                </div>
                <svg className="header__icon">
		            <use xlinkHref="./images/symbol-defs.svg#icon-settings"></use>
	            </svg>
            </div>
        </header>
    )
}
