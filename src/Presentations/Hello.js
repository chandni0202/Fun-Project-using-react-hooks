import React from 'react';
import './Hello.css';


const Hello = (props) => {
        return (
            <div className="f1 tc">
    <div>Hello</div>
    <div>{props.greetings}</div>
    </div>
        
        )
    }


export default Hello;