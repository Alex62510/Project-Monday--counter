import React from 'react';

type InputType={
    inputvalue: number
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