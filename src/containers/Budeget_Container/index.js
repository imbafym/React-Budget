import React, { Component } from 'react';
import BudgetContainer from './BudgetContainer';
import BudgetListContainer from './BudegetListContainer';


class Budeget_Container extends Component {

    render() {
        return (
            <div className="App">
                <BudgetContainer />
                <BudgetListContainer />
            </div>
        );

    }

}
export default Budeget_Container;