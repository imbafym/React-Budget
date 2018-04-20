import React from 'react';

export default (props) => {

    if (props.item.type === 'inc') {
        return (
            <div>
                <div className="item__description">{props.item.text}</div>
                <div className="right clearfix">
                    <div className="item__value">{props.item.type === 'inc' ? '+' : '-'}<span> </span>{props.item.number} </div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => props.onDelete(props.item)} ><i className="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        )
    } else {
        
        console.log(props)
        const itemPercentage = props.totalInc>0 ? Math.round((props.item.number / props.totalInc) * 100) : -1;
        const showPercentage = itemPercentage===-1?'N/A' : itemPercentage;
        return (
            <div>
                <div className="item__description">{props.item.text}</div>
                <div className="right clearfix">
                    <div className="item__value">{props.item.type === 'inc' ? '+' : '-'}<span> </span>{props.item.number} </div>
                    <div className="item__percentage">{showPercentage}</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => props.onDelete(props.item)} ><i className="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        )
    }

};



