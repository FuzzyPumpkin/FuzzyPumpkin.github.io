import React, {Component} from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./addNinja";


class App extends Component {
  state = {ninjas : [
    {name: "Mike", age: 25, belt: "orange", id: 1},
    {name: "Bob", age: 40, belt: "white", id: 2}
  ]};
  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas: ninjas
    })
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };
  render(){
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome.</p>
        <Ninjas ninjas= {this.state.ninjas} deleteNinja = {this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
    };
}

export default App;
