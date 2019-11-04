import React, { Component } from 'react'

class Nav extends Component {
    render(){
        return(
            <section className="section-nav">
                <nav className="nav__container">
                    <h1 className="nav__title">Api Happi</h1>
                    <p className="nav__user-greeting">Hi, <span className="nav__username">Kari</span></p>
                    <svg className="nav__icon">
                        <use xlinkHref="symbol-defs.svg#icon-cog"></use>
                    </svg>
                </nav>
            </section>
        )
    };
};



export default Nav;