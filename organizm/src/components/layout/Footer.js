import React from 'react';

export default function Footer() {
    return (
        <footer className="footer" data-testid="footer">
            <nav className="footer__container">
                <div className="footer__current">
                    <h1 className="footer__title">Tasks</h1>
                </div>
                <div className="footer__nav">
                    <div className="footer__nav--left">
                        <div className="footer__nav--row">
                            <svg className="footer__icon footer__icon--calendar">
                                <use xlinkHref="./images/symbol-defs.svg#icon-calendar"></use>
                            </svg>
                        </div>
                        <div className="footer__nav--row">
                            <svg className="footer__icon footer__icon--tasks footer__icon--active">
                                <use xlinkHref="./images/symbol-defs.svg#icon-tasks"></use>
                            </svg>
                            <svg className="footer__icon footer__icon--list">
                                <use xlinkHref="./images/symbol-defs.svg#icon-list"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="footer__nav--right">
                        <div className="footer__nav--row">
                            <svg className="footer__icon">
                                <use xlinkHref="./images/symbol-defs.svg#icon-tracker"></use>
                            </svg>
                            <svg className="footer__icon">
                                <use xlinkHref="./images/symbol-defs.svg#icon-travel"></use>
                            </svg>
                        </div>
                        <div className="footer__nav--row">
                            <svg className="footer__icon">
                                <use xlinkHref="./images/symbol-defs.svg#icon-menu"></use>
                            </svg>
                            <svg className="footer__icon">
                                <use xlinkHref="./images/symbol-defs.svg#icon-budget"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    )
}