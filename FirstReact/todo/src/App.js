import React, {Component} from 'react';
import Todos from "./Todos";
import AddTodo from "./AddForm";


class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy milk"},
      {id: 2, content: "clean house"}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos : todos})
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({todos : todos});
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
