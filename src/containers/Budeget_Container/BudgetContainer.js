import React, { Component } from 'react';
import '../../style.css';
import { connect } from 'react-redux';

class BudgetContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: 0

        }
    }

    showBudget() {
        let num = 0;
        let type;

        num = this.props.data.totalInc - this.props.data.totalExp;
        num > 0 ? type = 'inc' : type = 'exp';
        if (!isNaN(num)) {
            console.log(this.formateNumber(num, type));
            return this.formateNumber(num, type);
        }

        else {
            return this.formateNumber(0, type);
        }

    }
    showPercentage() {
        if(this.props.data.totalInc){
            let per = 0;
            let newNum = 0;
            console.log(this.props.data.totalInc + ' this is the totalInc');
            if (this.props.data.totalInc > 0) {
                newNum = this.props.data.totalExp / this.props.data.totalInc;
                per = Math.round((this.props.data.totalExp / this.props.data.totalInc) * 100);
               
            } else {
                per = -1;
            }
            return per + '%';
        }
        else
            return  '---';
    }

    formateNumber(num, type) {
        if (!isNaN(num)) {
            num = Math.abs(num);
            num = num.toFixed(2);
            console.log(num + ' this num has 2 00')
            let numSplit, int, dec = '';
            numSplit = num.split('.');

            int = numSplit[0];

            dec = numSplit[1];
            if (int.length > 3) {
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length) // input 1234, output 1,234
            }
            let result = (type === 'exp' ? "-" : '+') + ' ' + int + '.' + dec;
            console.log(result + ' this is result')
            return result;
        } else
            return (type === 'exp' ? "-" : '+') + ' ' + 0 + '.00';
    }


    render() {

        // console.log(JSON.stringify(this.props) + "this is props");
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[new Date().getMonth()];
        const year = new Date().getFullYear();


        return (

            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">{month} {year} </span>:
                </div>
                    <div className="budget__value">{this.showBudget()}</div>
                    <div className="budget__income clearfix">
                        <div className="budget__income--text">Income</div>
                        <div className="right">
                            <div className="budget__income--value">{this.formateNumber(this.props.data.totalInc, 'inc')}</div>
                            <div className="budget__income--percentage">&nbsp;</div>
                        </div>
                    </div>

                    <div className="budget__expenses clearfix">
                        <div className="budget__expenses--text">Expenses</div>
                        <div className="right clearfix">
                            <div className="budget__expenses--value">{this.formateNumber(this.props.data.totalExp, 'exp')}</div>
                            <div className="budget__expenses--percentage">{this.showPercentage()}</div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }

}

function mapStateToProps(state) {
    // console.log(state);
    // console.log("this is mapStateToProps in budget contatiner show part")
    return {
        data: state.show
    };
}


export default connect(mapStateToProps)(BudgetContainer);