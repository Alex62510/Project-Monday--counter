import React from 'react';

type InputType={
    inputvalue: number|string
    inputclassName:string
}
const Input = (props:InputType) => {
    return (
        <input
            value={props.inputvalue}
            className={props.inputclassName}
        ></input>
    );
};

export default Input;