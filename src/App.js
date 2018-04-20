import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BudgetContainer from './containers/BudgetContainer';
import BudgetListContainer from './containers/BudegetListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BudgetContainer />
        <BudgetListContainer />
      </div>
    );
  }
}

export default App;
