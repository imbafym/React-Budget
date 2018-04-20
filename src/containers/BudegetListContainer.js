import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ListItem from './ListItem';
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
            budget: this.totalInc - this.totalExp,
            percentage: 0
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectedChange = this.onSelectedChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(item) {
        // const itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
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
        // console.log(this.state);
    }
    onSelectedChange(event) {
        const target = event.target;
        this.setState({ type: target.value })
        // console.log(this.state);
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
        const totalNumber = this.state.type === 'inc'? this.state.totalInc + parseInt(item.number)  : this.state.totalExp + parseInt(item.number)  ;
        console.log(`${totalNumber} are here...`);
        this.state.type === 'inc' ? this.setState({
            'inc': [...this.state.inc, item],
            text: '',
            number: '',
            totalInc: totalNumber
        }
        ) : this.setState({
            'exp': [...this.state.exp, item],
            text: '',
            number: '',
            totalExp: totalNumber
        }
        );
        this.calculatePercentage();
        // console.log('this is button');
        
    }

    calculateTotal(type) {
        let sum = 0;
        const total = type === 'inc' ? this.state.inc : this.state.exp;
        if (total) {
            total.map((aItem, index) => {
                sum += aItem.number;
            })
        }
        type === 'inc' ? this.setState({ inc: sum }) : this.setState({ exp : sum });
    }
 

    calculatePercentage(){
        let percentage = 0;
        // this.calculateTotal('inc');
        // this.calculateTotal('exp');
        if(this.state.totalInc > 0){
            percentage = Math.round((this.state.totalExp/this.state.totalInc) * 100);
            // console.log(this.state.totalExp + " is total exp");
            // console.log(this.state.totalInc + " is total inc");
            
            // console.log(percentage + " is not -1");
        }else{
            percentage = -1;
            // console.log(percentage + " is  -1");
        }
        this.setState({percentage: this.percentage});
    }


    renderList(type) {
        // console.log('render list');
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
        // const enabled = ()=> {
        //     const firstCondition = text && number;
        //     const secCondition = items.map((aItem,index)=>{        
        //         if(aItem.text=== text && aItem.number === number){
        //             return false;
        //         }
        //     });
        //     console.log(`first condition is ${firstCondition}`);
        //     console.log(`second condition is ${secCondition}`);
        //     return firstCondition&&secCondition;
        // };
        // console.log(enabled());
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


export default BudgetListContainer;