import React, { Component } from 'react'
import uuid from "uuid/v4";

class FullTasksForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.create({...this.state, id: uuid(), completed: false});
        this.setState({task: ""});
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task" className="full-tasks__new">New Task: 
                    <input 
                        type="text" 
                        placeholder="new task" 
                        name="task" 
                        id="task" 
                        className="full-tasks__taskEntry"
                        value={this.state.task} 
                        onChange={this.handleChange}/>
                </label>
                <button className="full-tasks__btn">
                    <svg className="full-tasks__icon"><use xlinkHref="symbol-defs.svg#icon-plus"></use></svg>
                </button>
            </form>
        )
    }
}

export default FullTasksForm;