import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav className="nav">
                <ul className="nav-ul">
                    <p className="nav-title">Tag List</p>
                    <li className="nav-li">
                        <NavLink exact to='/' className="nav-item" activeClassName="nav-active">All</NavLink>
                    </li>   
                    {this.props.tags.map(tag => (
                        <li className="nav-li" key={tag}>
                            <NavLink exact to={`/${tag}`} className="nav-item" activeClassName="nav-active">{tag}</NavLink>
                        </li>       
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Nav;