import React from 'react';


type InputType={
    inputValue: number|string
    inputClassName:string
    error:boolean
}
const InputCount = (props:InputType) => {
    return (
        <input
placeholder={props.error? "ERROR" : ""}
            value={props.inputValue}
            className={props.inputClassName}
        />
    );
};

export default InputCount;