import React from 'react';
import SideBar from "./SideBar";
import Tasks from "../Tasks";

export default function Content() {
    return (
        <div className="content">
            <SideBar />
            <Tasks />
        </div>
    )
}