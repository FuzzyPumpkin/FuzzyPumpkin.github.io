import React, { Component } from 'react'
import FullTasksTask from "./FullTasksTask";
import FullTasksForm from "./FullTasksForm";

class FullTasksList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.removeComplete = this.removeComplete.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    create(newTodo){
        this.setState({todos:[...this.state.todos, newTodo]});
    }
    remove(id){
        this.setState({todos: this.state.todos.filter(t => t.id !== id)});
    }
    removeComplete(){
        this.setState({todos: this.state.todos.filter(t => t.completed === false)});
    }
    update(id, updTask){
        const updTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updTask};
            }
            return todo;
        });
        this.setState({todos: updTodos});
    }
    toggleComplete(id){
        const updTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({todos: updTodos});
    }
    render(){
        const todos = this.state.todos.map(todo => {
            return (
            <FullTasksTask 
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                completed={todo.completed}
                remove={this.remove} 
                updTodo={this.update}
                toggleComplete={this.toggleComplete}
            />
            )
        })
        return (
            <div className="fullscreen">
                <svg className="condenseIcon">
                    <use xlinkHref="symbol-defs.svg#icon-search-minus"></use>
                </svg>
                <svg className="tasks__bgicon tasks__bgicon--full">
                    <use xlinkHref="symbol-defs.svg#icon-pencil"></use>
                </svg>
                <div className="tasks__container">
                    <h2 className="full-tasks__headline">Tasks</h2>
                    <FullTasksForm create={this.create} />
                    <ul className="full-tasks__list">
                        {todos}
                    </ul>
                    <button onClick={this.removeComplete} className="full-tasks__btn full-tasks__list">Remove Completed</button>
                </div>
            </div>
        )
    }
}

export default FullTasksList;