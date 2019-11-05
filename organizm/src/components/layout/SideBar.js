import React from 'react';

export default function SideBar() {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="Inbox">Inbox</li>
                <li data-testid="Today">Today</li>
                <li data-testid="Week">Week</li>
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
