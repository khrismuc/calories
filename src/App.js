import React, { Component } from 'react';

import Data from './Data';
import Bars from './Bars';
import Colors from './Colors';

import './App.css';

import Ing from './Ing';

class App extends Component {

  constructor(props) {
    super(props);
    const amounts = Data.ingredients.map(d => d.ini);
    this.state = {
      amounts: amounts
    }
  }

  updateApp = (id, newVal) => {
    var amounts = this.state.amounts.map(val => val);
    amounts[id] = Math.round(newVal);
    this.setState({ amounts: amounts });
  }

  render() {
    return (
      <div className="App">
        {Data.ingredients.map((data, i) => <Ing key={i} id={i} color={Colors[i] || "grey"} {...data} updateApp={this.updateApp} amount={this.state.amounts[i]} />)}
        <Bars amounts={this.state.amounts.map(a => a / 100.0)} />
      </div>
    );
  }
}

export default App;
