import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { show_data } from '../../actions';
import ListItem from '../../components/ListItem';
class BudgetListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            number: '',
            type: 'inc',
            inc: [],
            exp: [],
            totalInc: 0,
            totalExp: 0,
            budget: 0,
            percentage: 0,
            totalPercentage: 0
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectedChange = this.onSelectedChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidUpdate(){
        // console.log(JSON.stringify(this.state) + ' === this is the state in compnentDidUpdate')
        this.props.show_data(this.state);
    }
   
    onDelete(item) {
        const type = item.type;
        const budgets = type === 'inc' ? this.state.inc : this.state.exp;
        const dataRemoved = budgets.filter((el) => {
            return el.number !== item.number && el.text !== item.text;
        })
        type === 'inc' ? this.setState({
            'inc': dataRemoved,
            text: '',
            number: '',
            totalInc: this.state.totalInc - item.number

        }
        ) : this.setState({
            'exp': dataRemoved,
            text: '',
            number: '',
            totalExp: this.state.totalExp - item.number
        }
        );
    }

    onInputChange(event) {
        const target = event.target;
        this.setState({
            [target.type]: target.value
        })
    }
    onSelectedChange(event) {
        const target = event.target;
        this.setState({ type: target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const name = this.state.type;
        const item = {
            text: this.state.text,
            number: this.state.number,
            type: this.state.type
        };
        const totalNumber = this.state.type === 'inc' ? this.state.totalInc + parseInt(item.number) : this.state.totalExp + parseInt(item.number);
       
        
        const var1 = this.state.type === 'inc' ? {
            'inc': [...this.state.inc, item],
            text: '',
            number: '',
            totalInc: totalNumber
        }
        : {
            'exp': [...this.state.exp, item],
            text: '',
            number: '',
            totalExp: totalNumber
        };
       
        const per = this.calculatePercentage();
        const budegtPer = this.calculateBudget();
        
        this.func(var1);
      
        console.log(this.state);

    }
    setStateAsunc(nextState){  
        return new Promise(resolve => {
          this.setState(nextState, resolve);
        });
      }
    async func(var1){
       
        await this.setStateAsunc(var1).then(this.calculatePercentage()).then(this.calculateBudget());
        // await this.setStateAsunc(var2);
    }

    calculateTotal(type) {
        let sum = 0;
        const total = type === 'inc' ? this.state.inc : this.state.exp;
        if (total) {
            total.map((aItem, index) => {
                sum += aItem.number;
            })
        }
        type === 'inc' ? this.setState({ inc: sum }) : this.setState({ exp: sum });
    }


    calculateBudget() {
        let sum = 0;
        let per = 0;
        sum = this.state.totalInc - this.state.totalExp;
        if (this.state.totalInc > 0) {
            per = Math.round((this.state.totalExp / this.state.totalInc) * 100);
        } else {
            per = -1;
        }
        console.log(this.state.totalInc+' this is sum'+ sum  )
        this.setState({budget : sum});
       
    }
    calculatePercentage() {
        let percentage = 0;
        // this.calculateTotal('inc');
        // this.calculateTotal('exp');
        if (this.state.totalInc > 0) {
            percentage = Math.round((this.state.totalExp / this.state.totalInc) * 100);
        } else {
            percentage = -1;
        }
        this.setState({percentage : percentage});
        
    }


    renderList(type) {
        const items = type === 'inc' ? this.state.inc : this.state.exp;

        const result = items.map((aItem, index) => {
            return (
                <div className="item clearfix" id="income-0" key={index}>
                    <ListItem {...this.props} item={aItem} totalInc={this.state.totalInc} onDelete={this.onDelete} />
                </div>
            )
        })
        return result;
    }

    render() {
        const items = this.state.type === 'inc' ? this.state.inc : this.state.exp;
        const { text, number } = this.state;
        const enabled = text && number;
       
        
        return (

            <div className="bottom">
                <div className="add">
                    <div className="add__container">

                        <select className="add__type" defaultValue="inc" onChange={this.onSelectedChange} >
                            <option value="inc">+</option>
                            <option value="exp">-</option>
                        </select>

                        <input type="text" className="add__description" value={this.state.text} placeholder={"Add description"} onChange={this.onInputChange} />
                        <input type="number" className="add__value" value={this.state.number} placeholder="Value" onChange={this.onInputChange} />
                        <button className="add__btn" disabled={!enabled} onClick={this.onSubmit}><i className="ion-ios-checkmark-outline"></i></button>

                    </div>
                </div>

                <div className="container clearfix">
                    <div className="income">
                        <h2 className="icome__title">Income</h2>

                        <div className="income__list">
                            {this.renderList('inc')}
                        </div>
                    </div>



                    <div className="expenses">
                        <h2 className="expenses__title">Expenses</h2>

                        <div className="expenses__list">
                            {this.renderList('exp')}
                        </div>
                    </div>
                </div>
            </div>

        );
    }






}


export default connect(null, { show_data })(BudgetListContainer);