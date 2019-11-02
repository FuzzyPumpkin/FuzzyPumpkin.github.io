import React from 'react';

export default function Header() {
    return (
        <header className="header" data-testid="header">
            <nav>
                <svg className="header__icon header__icon--logo">
				    <use xlinkHref="./images/symbol-defs.svg#icon-organizm"></use>
				</svg>
                <div className="header__settings">
                    <ul>
                        <li>
                            <svg className="header__icon">
                                <use xlinkHref="./images/symbol-defs.svg#icon-user"></use>
                            </svg>
                            Kari
                        </li>
                        <li>
                            <svg className="header__icon">
				                <use xlinkHref="./images/symbol-defs.svg#icon-settings"></use>
				            </svg>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
