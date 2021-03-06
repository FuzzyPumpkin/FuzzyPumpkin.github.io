import React, { Component } from 'react';
import Nav from "./Nav";
import CardGrid from "./CardGrid";
import resources from "./Resources";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tagList: [],
        sortedResources: []
    };
    this.compare = this.compare.bind(this);
  }

  compare(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    let comparison = 0;

    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  componentDidMount(){
    let freshTagList = [];
    resources.map(r => (
      r.tags.forEach(function(tag){
        if(!freshTagList.includes(tag)){freshTagList.push(tag)};
      })  
    ));
    this.setState({
      tagList: freshTagList.sort()
    });  
    this.setState({
      sortedResources: resources.sort(this.compare) 
    });
  }

  render(){
    const getTag = props => {
      let tag = props.match.params.tag;
      return <CardGrid {...props} tag={tag} resources={this.state.sortedResources} />;
    }

    return (
      <div className="u-flex-row">
        <Nav tags={this.state.tagList}/>
        <main>
          <h1>ReSOURCEd</h1>
          <p className="main-blurb">A collection of websites, courses, blogs and articles relating to web development, 
            focusing on front end and design. Created and shared by Kari Minger, aka FuzzyPumpkin, in hopes of bettering 
            the community.</p>
        <Switch>
          <Route exact path="/" render={() => <CardGrid resources={this.state.sortedResources} tag="all"/>} />
          <Route exact path='/:tag' render={getTag} />
        </Switch>
        </main>
      </div>
  );
}
}

export default App;
