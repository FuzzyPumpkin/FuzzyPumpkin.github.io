import React, { Component } from 'react';
import FullTasksList from "./FullTasksList";

class Tasks extends Component {
    constructor(props){
        super(props);
        this.state = {fullTask: false};
        this.fullscreenToggle = this.fullscreenToggle.bind(this);
    }

    fullscreenToggle(){
        this.state.fullTask === true ? this.setState({fullTask: false}) : this.setState({fullTask: true});
    }

    render(){
        return (
            <section className="section-tasks app">
                <svg className={this.state.fullTask === true ? "condenseIcon" : "noscreen"} onClick={this.fullscreenToggle}>
                    <use xlinkHref="symbol-defs.svg#icon-search-minus"></use>
                </svg>
                <FullTasksList fullTask={this.state.fullTask}/>
                <div className="tasks__container">
                    <svg className="expandIcon" onClick={this.fullscreenToggle}>
                        <use xlinkHref="symbol-defs.svg#icon-search-plus"></use>
                    </svg>
                    <svg className="tasks__bgicon">
                        <use xlinkHref="symbol-defs.svg#icon-pencil"></use>
                    </svg>
                    <h2 className="tasks__headline">Tasks</h2>
                    <p>This section will be filled in once the database is initiated.</p>
                    <ul className="tasks__list">
                    </ul>
                </div>
            </section>
        )
    }
}

export default Tasks;