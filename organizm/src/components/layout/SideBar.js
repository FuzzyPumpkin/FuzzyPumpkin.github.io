import React from 'react';

export default function SideBar() {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li>Inbox</li>
                <li>Today</li>
                <li>Week</li>
            </ul>
            <div className="sidebar__middle">
                <h2>Projects</h2>
            </div>
            <ul className="sidebar__projects">
                Projects here
            </ul>
        </div> 
    )
}
