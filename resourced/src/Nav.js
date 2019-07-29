import React, { Component } from 'react'

class Nav extends Component {
    render(){
        return (
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <a href="www.google.com" className="nav-item">Item</a>
                    </li>
                    <li className="nav-li">
                        <a href="www.google.com" className="nav-item">Item</a>
                    </li>
                    <li className="nav-li nav-active">
                        <a href="www.google.com" className="nav-item">Item</a>
                    </li>
                    <li className="nav-li">
                        <a href="www.google.com" className="nav-item">Item</a>
                    </li>
                    <li className="nav-li">
                        <a href="www.google.com" className="nav-item">Item</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;