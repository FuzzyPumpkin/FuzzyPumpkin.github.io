import React, {Component} from 'react';
import Ninjas from "./Ninjas";


class App extends Component {
  state = {ninjas : [
    {name: "Mike", age: 25, id: 1},
    {name: "Bob", age: 40, id: 2}
  ]};
  render(){
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome.</p>
        <Ninjas ninjas= {this.state.ninjas} />
      </div>
    );
    };
}

export default App;
