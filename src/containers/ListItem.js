import React from 'react';

export default (props) => (
    
    <div>
        <div className="item__description">{props.item.text}</div>
        <div className="right clearfix">
            <div className="item__value">{props.item.type==='inc'?'+':'-'}<span> </span>{props.item.number} </div>
            <div className="item__delete">
                <button className="item__delete--btn" onClick={()=>props.onDelete(props.item)} ><i className="ion-ios-close-outline"></i></button>
            </div>
        </div>
    </div>

);