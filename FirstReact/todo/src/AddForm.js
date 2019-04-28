import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();//prevents page refresh as is normal submit functionality
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new task:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo;