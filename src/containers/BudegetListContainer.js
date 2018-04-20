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
            exp: []
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectedChange = this.onSelectedChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(item) {
        // const itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        const type = this.state.type;
        const budgets = type === 'inc' ? this.state.inc : this.state.exp;
        const dataRemoved = budgets.filter((el)=>{
            return el.number!==item.number&&el.text!==item.text;
        })


        type === 'inc' ? this.setState({
            'inc': dataRemoved,
            text: '',
            number: ''
        }
        ) : this.setState({
            'exp': dataRemoved,
            text: '',
            number: ''
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

        this.state.type === 'inc' ? this.setState({
            'inc': [...this.state.inc, item],
            text: '',
            number: ''
        }
        ) : this.setState({
            'exp': [...this.state.exp, item],
            text: '',
            number: ''
        }
        );
        console.log('this is button')
    }

    renderList(type) {
        // console.log('render list');
        const items = type === 'inc' ? this.state.inc : this.state.exp;
        const result = items.map((aItem, index) => {
            return (
                <div className="item clearfix" id="income-0" key={index}>
                    <ListItem {...this.props} item={aItem} onDelete={this.onDelete} />
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