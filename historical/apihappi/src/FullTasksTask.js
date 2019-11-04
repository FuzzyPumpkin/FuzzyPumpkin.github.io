import React, { Component } from 'react'


class FullTasksTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            task: this.props.task
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleEdit(e){
        e.preventDefault();
        this.props.updTodo(this.props.id, this.state.task);
        this.setState({editing: false});
    }
    handleRemove(){
        this.props.remove(this.props.id);
    }
    handleToggle(e){
        this.props.toggleComplete(this.props.id);
    }
    toggleForm(){
        this.setState({editing: true});
    }

    render(){
        let result;
        if(this.state.editing){
            result = (
                <div>
                    <form onSubmit={this.handleEdit}>
                        <input type="text" className="full-tasks__taskEntry" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button className="full-tasks__btn">
                            <svg className="full-tasks__icon">
                                <use xlinkHref="symbol-defs.svg#icon-floppy-o"></use>
                            </svg>
                        </button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="full-tasks__task-item">
                    <li 
                        className={this.props.completed ? "full-tasks__list--completed completed full-tasks__list-item" : "full-tasks__list-item"} 
                        onClick={this.handleToggle}>
                            {this.props.task}
                    </li>
                    <div>
                        <button onClick={this.toggleForm} className="full-tasks__btn full-tasks__btn--list-item">
                            <svg className="full-tasks__icon">
                                <use xlinkHref="symbol-defs.svg#icon-pencil"></use>
                            </svg>
                        </button>
                        <button onClick={this.handleRemove} className="full-tasks__btn full-tasks__btn--list-item">
                            <svg className="full-tasks__icon">
                                <use xlinkHref="symbol-defs.svg#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default FullTasksTask;