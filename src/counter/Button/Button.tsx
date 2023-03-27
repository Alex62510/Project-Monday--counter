import React, {useState} from 'react';

type Buttontype = {
    className: string
    onClickFunc: () => void
    numbersLimit: boolean
    title: string
}
const Button = (props: Buttontype) => {
    const ClickChinge = () => {
        props.onClickFunc()
    }
    return (
        <button
            className={props.className}
            onClick={ClickChinge}
            disabled={props.numbersLimit}
        >{props.title}
        </button>
    );
};


export default Button;