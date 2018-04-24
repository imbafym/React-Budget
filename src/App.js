import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BudgetContainer from './containers/Budeget_Container/BudgetContainer';
import BudgetListContainer from './containers/Budeget_Container/BudegetListContainer';

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
