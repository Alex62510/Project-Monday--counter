import React, {useState} from 'react';

type Buttontype = {
    className: string
    onClickFunc: () => void
    numbersLimit: boolean
    title: string
}
const ButtonCount = (props: Buttontype) => {
    const ClickChange = () => {
        props.onClickFunc()
    }
    return (
        <button

            className={props.className}
            onClick={ClickChange}
            disabled={props.numbersLimit}
        >{props.title}
        </button>
    );
};


export default ButtonCount;